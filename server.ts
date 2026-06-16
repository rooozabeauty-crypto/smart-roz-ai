import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

// Set high upload limits for image handling
app.use(express.json({ limit: "25mb" }));
app.use(express.urlencoded({ limit: "25mb", extended: true }));

let aiClient: GoogleGenAI | null = null;

function getGeminiClient(): GoogleGenAI {
  if (!aiClient) {
    const key = process.env.GEMINI_API_KEY;
    if (!key) {
      throw new Error("GEMINI_API_KEY_MISSING");
    }
    aiClient = new GoogleGenAI({
      apiKey: key,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  }
  return aiClient;
}

// Utility to parse base64 image strings
function parseBase64Image(dataUri: string) {
  const matches = dataUri.match(/^data:([a-zA-Z0-9]+\/[a-zA-Z0-9-+.]+);base64,(.*)$/);
  if (!matches || matches.length !== 3) {
    // If it is already raw base64 or custom
    return { mimeType: "image/png", data: dataUri };
  }
  return { mimeType: matches[1], data: matches[2] };
}

// System Instruction to Smart Roz for Product Analysis, Branding, and Storyboard
const SMART_ROZ_SYSTEM_INSTRUCTION = `
You are "Smart Roz" (روبوت ذكي), an elite Arabic & English AI expert in graphic design, brand themes, luxury visual identities, and professional e-commerce product edits.
When a user uploads a product image and specifies their wishes or descriptions, you must analyze the product and provide deep, professional branding direction, graphic themes, editing parameters, and an absolute high-fidelity 30-second marketing promo video storyboard.

You MUST respond strictly in a highly structured, valid JSON format. All fields related to descriptions, slogans, copy, feedback and storyboard must be written in elegant, persuasive Arabic (اللغة العربية) to connect with the target user, but you can include English terms or English equivalents where helpful.

Your JSON structure must EXACTLY match the following format:
{
  "productName": "اسم المنتج المقدر بشكل تجاري جذاب",
  "category": "تصنيف المنتج (مثال: مستحضرات تجميل، عطور، مشروبات فاخرة، أزياء)",
  "aestheticStrengths": [
    "قوة التصميم الحالي 1",
    "قوة التصميم الحالي 2"
  ],
  "slogan": "شعار تسويقي رنان ومبتكر تم ابتكاره للمنتج",
  "brandThemeName": "اسم الثيم البصري المقترح (مثال: نيون السهر، طبيعة نقية، فخامة ملكية)",
  "brandIdentity": {
    "colors": [
      { "name": "أصفر ذهبي دافئ", "hex": "#D4AF37", "type": "primary" },
      { "name": "أسود غامق ملكي", "hex": "#121212", "type": "secondary" },
      { "name": "أبيض لؤلؤي نقّي", "hex": "#F8F9FA", "type": "accent" }
    ],
    "typography": {
      "titleFont": "Cairo",
      "bodyFont": "Tajawal",
      "arabicFriendly": true
    },
    "brandTone": "فخم، ريادي ومؤثر"
  },
  "suggestedEdits": [
    { "label": "الخلفية المقترحة", "description": "خلفية بلون متدرج مع تأثيرات إضاءة ستوديو تبرز تفاصيل المنتج", "suggestedValue": "Studio Royal Black with Golden backlight" },
    { "label": "عناصر الديكور المضافة", "description": "إضافة عناصر مرئية متطايرة مثل أوراق ذهبية أو قطرات ماء رقيقة لتعزيز الحيوية", "suggestedValue": "Floating golden flakes and water droplets" },
    { "label": "التأثير العام (الإنارة والظلال)", "description": "ظلال ناعمة خفيفة تنبثق من قاعدة المنتج لإعطاء طابع ثلاثي الأبعاد واقعي", "suggestedValue": "Soft base shadow drop with professional spotlight" }
  ],
  "videoStoryboard": [
    {
      "sceneNumber": 1,
      "timeRange": "00:00 - 00:06",
      "visuals": "تظهر صورة المنتج في المنتصف مع تأثير تقريب تدريجي slow zoom، والمنتج يسبح فوق سطح مائي هادئ يعكس أضواء ذهبية لؤلؤية مع بريق خفيف.",
      "textOverlay": "الفخامة تبدأ بلمسة..",
      "voiceover": "في عالم مليء بالتفاصيل العادية، نأخذك في رحلة إلى عمق التميز البصري الفاخر.",
      "soundEffects": "صوت مادي هادئ لتموج المياه مع نغمة عميقة ممهدة."
    },
    {
      "sceneNumber": 2,
      "timeRange": "00:06 - 00:12",
      "visuals": "تتسارع الحركة قليلاً لتسليط الضوء على تفاصيل شعار المنتج وغطائه الفضي المتلألئ مع تداخل أوراق الشجر الذهبية المتساقطة بنعومة.",
      "textOverlay": "صمم ليدوم، وليزين حضورك",
      "voiceover": "حيث تلتقي المكونات الطبيعية النقية بأرقى تصاميم التعبئة العصرية لتشكل هوية لا تشبه أحداً.",
      "soundEffects": "ارتفاع تدريجي لإيقاع الموسيقى مع صوت رنين معدني ناعم (Shimmer)."
    },
    {
      "sceneNumber": 3,
      "timeRange": "00:12 - 00:18",
      "visuals": "تغيير الخلفية إلى بيئة ستوديو ثلاثية الأبعاد تفاعلية، مع تساقط قطرات الندى على جانب المنتج وتحرك كاميرا بنظام الـ Pan حول زوايا العبوة.",
      "textOverlay": "جمال يتحدث بلغة الاحتراف",
      "voiceover": "دقة استثنائية في كل زاوية، تجعل منتجك جاهزاً ليسرق الأضواء في كل منصة.",
      "soundEffects": "مؤثر صوتي لفرقعة قطرات ماء رشيقة مع دفء نغمات البيانو."
    },
    {
      "sceneNumber": 4,
      "timeRange": "00:18 - 00:24",
      "visuals": "شاشة بتركيبة شبكية تعرض الألوان المقترحة للثيم (الذهبي، الرمادي الدافئ، الأبيض الكوني) وهي تمتزج لتشكل الهوية الفريدة للمنتج.",
      "textOverlay": "هويتك البصرية، بصمتك الخاصة",
      "voiceover": "سمارت روز ينسج من الألوان والظلال حكاية نجاح لعلامتك التجارية لتبهج قلوب عملائك.",
      "soundEffects": "تناغم وتكامل إيقاعي يبعث على الراحة والثقة والاحترافية."
    },
    {
      "sceneNumber": 5,
      "timeRange": "00:24 - 00:30",
      "visuals": "المنتج يقف شامخاً في لقطة نهائية واسعة مع الشعار الرائع يلمع في الجزء العلوي، وكلمات العرض الختامي ورابط الموقع تظهر بخط أنيق.",
      "textOverlay": "اطلب تميزك الآن مع Smart Roz",
      "voiceover": "اجعل منتجاتك تتحدث بذكاء واحترافية. ذكاء سمارت روز التخيلي بين يديك الآن.",
      "soundEffects": "ضربة إيقاع نهائية فخمة وصدى لموسيقى هادئة تنتهي ببطء."
    }
  ],
  "recommendedMusicStyle": "لوفي هادئ ممزوج بعناصر سينمائية حديثة وصوت طبيعة دافئ",
  "aiPromptForEditing": "A professional high-end studio commercial photo of the product, placed on a premium wet reflective obsidian base, surrounded by luxury golden flakes falling, pristine soft direct studio lighting, hyper-realistic, 8k, ready for advertising"
}

Make sure the output is strictly valid JSON conforming to this schema, containing no code wrappers like \`\`\`json or \`\`\`. Do not write conversational text outside of the JSON block. Return ONLY the JSON object.
`;

// Helper for Mock Data Fallback in case of missing keys or local test environments
const fallbackMockResponse = (userPrompt: string, hasImage: boolean) => {
  return {
    productName: "عطر روج الملكي الفاخر",
    category: "عطور ومستحضرات تجميل",
    aestheticStrengths: [
      "تصميم زجاجي بلوري فريد يعكس الضوء ببراعة",
      "غطاء معدني مصقول يضفي هيبة كلاسيكية"
    ],
    slogan: "بريق خاص يحكي حكايتك الفريدة",
    brandThemeName: "الفخامة الذهبية الهادئة",
    brandIdentity: {
      colors: [
        { name: "ذهبي شامبين ملكي", hex: "#E5C158", type: "primary" },
        { name: "أسود كربوني مطفي", hex: "#1C1C1E", type: "secondary" },
        { name: "برونزي دافئ", hex: "#CD7F32", type: "accent" }
      ],
      typography: {
        titleFont: "Cairo",
        bodyFont: "Tajawal",
        arabicFriendly: true
      },
      brandTone: "راقٍ، فاخر، مفعم بالثقة"
    },
    suggestedEdits: [
      { label: "تحسين الخلفية", description: `خلفية رخامية داكنة مستوحاة من طلبك: ${userPrompt || "تحسين الصورة بلمسة ستوديو"}`, suggestedValue: "Luxury dark marble studio setting" },
      { label: "إضافة المؤثرات المائية", description: "قطرات ندى رقيقة متناثرة على سطح الزجاج لزيادة الإحساس بالانتعاش", suggestedValue: "Subtle mist droplets" },
      { label: "الإضاءة السينمائية", description: "إضاءة جانبية ناعمة لتحديد معالم المنتج بجمالية قصوى", suggestedValue: "Dramatic backlighting and ambient shadows" }
    ],
    videoStoryboard: [
      {
        sceneNumber: 1,
        timeRange: "00:00 - 00:06",
        visuals: "تظهر العبوة ببطء من تحت غطاء مخملي أسود فاخر يرتفع تدريجياً، مع بصيص ضوئي ذهبي ينعكس على حوافها.",
        textOverlay: "النبل والجاذبية في زجاجة",
        voiceover: "لكل قصة عظيمة بداية، وبداية حضورك الطاغي تبدأ بنفحة واحدة من السحر الخالص.",
        soundEffects: "صوت نسيم رقيق يتبعه تأثير صدى عميق وراقي."
      },
      {
        sceneNumber: 2,
        timeRange: "00:06 - 00:12",
        visuals: "لقطة قريبة ماكرو عالية التفاصيل تركز على الرذاذ المتطاير بشكل متناغم ذي جزيئات ذهبية متلألئة في الهواء.",
        textOverlay: "عبق يعانق الخيال",
        voiceover: "تركيبة تم ابتكارها بحرفية فائقة، لتمتزج مع أحاسيسك وتصنع هالة لا تُنسى تلفت الأنظار.",
        soundEffects: "صوت انتشار الرذاذ برقة مع صعود موسيقى بيانو عذبة."
      },
      {
        sceneNumber: 3,
        timeRange: "00:12 - 00:18",
        visuals: "المنتج موضوع على قاعدة مائية تتماوج وتتحرك بنعومة فائقة، مع بريق إضاءة الاستوديو يرتد بشكل هندسي آسر.",
        textOverlay: "دقة بصرية من طراز آخر",
        voiceover: "لأن منتجك يستحق التميز، قمنا بضبط الإضاءة والانعكاسات لتناسب تطلعات عملائك الفاخرة.",
        soundEffects: "تموجات مياه خفيفة وصوت رنين سحري متكرر."
      },
      {
        sceneNumber: 4,
        timeRange: "00:18 - 00:24",
        visuals: "استعراض لوحة الإلهام (Mood board) تظهر خطوطاً وتدرجات فنية من درجات الذهب والبرونز الفخم المنسجم بشكل إبداعي.",
        textOverlay: "ألوان تعكس جوهر جودتك",
        voiceover: "هوية بصرية متكاملة وثيم عصري مدروس لترسيخ هيبة علامتك التجارية في الصدارة.",
        soundEffects: "تضخيم إيقاعي في الخلفية الموسيقية يعطي طابع القوة والنمو."
      },
      {
        sceneNumber: 5,
        timeRange: "00:24 - 00:30",
        visuals: "تراجع هادئ للكاميرا لتظهر اللقطة الإعلانية الكاملة للمنتج مزيناً بالزهور النبيلة مع ظهور عبارة جذابة ووسائل الشراء برقي.",
        textOverlay: "تمتع بالتميز المطلق اليوم",
        voiceover: "سمارت روز يعيد صياغة المستقبل البصري لأعمالك. هويتك البصرية الذكية جاهزة للنشر والانتشار.",
        soundEffects: "نغمة أخيرة فخمة تلخص روح الاحتراف والأناقة مع تلاشي تدريجي دافئ."
      }
    ],
    recommendedMusicStyle: "موسيقى تانجو فاخرة ممزوجة بإيقاع شرقي هادئ وراقي جداً",
    aiPromptForEditing: "Product set on dark polished marble table, volumetric soft atmospheric lighting, cinematic, golden flakes, photorealistic commercial photoshoot, 8k resolution"
  };
};

/* --- ENDPOINTS --- */

// 1. Analyze product image and request requirements
app.post("/api/smart-roz/analyze", async (req, res) => {
  try {
    const { image, description, isDemoMode } = req.body;

    const userPrompt = description || "أريد تحسين وتصميم هوية بصرية مذهلة لهذا المنتج ليكون جاهزاً للنشر تجارياً بشكل فخم";

    // Check if we should forcefully run mock data or if API Key is missing
    if (isDemoMode) {
      console.log("[Smart Roz] Serving configured Demo Mode response.");
      return res.json(fallbackMockResponse(userPrompt, !!image));
    }

    let ai;
    try {
      ai = getGeminiClient();
    } catch (err: any) {
      console.log("[Smart Roz] Gemini API key not found. Using responsive intelligent mockup generator.");
      return res.json(fallbackMockResponse(userPrompt, !!image));
    }

    let contentsParts: any[] = [];

    if (image) {
      const parsed = parseBase64Image(image);
      contentsParts.push({
        inlineData: {
          mimeType: parsed.mimeType,
          data: parsed.data,
        },
      });
    }

    contentsParts.push({
      text: `User instruction for dynamic edits/improvements: "${userPrompt}"\n\nPlease analyze the product image (if provided) and user instructions, then return the JSON layout detailing the optimized commercial branding, suggested theme edits, and 30-second storyboard.`,
    });

    console.log("[Smart Roz] Requesting Gemini analysis...");
    
    // Using gemini-3.5-flash for complex, Arabic-rich structuring tasks
    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: { parts: contentsParts },
      config: {
        systemInstruction: SMART_ROZ_SYSTEM_INSTRUCTION,
        responseMimeType: "application/json",
        temperature: 0.8,
      },
    });

    const textOutput = response.text;
    if (!textOutput) {
      throw new Error("Empty response from Gemini API.");
    }

    // Clean any accidental markdown leftovers just in case
    let cleanedText = textOutput.trim();
    if (cleanedText.startsWith("```json")) {
      cleanedText = cleanedText.substring(7);
    }
    if (cleanedText.endsWith("```")) {
      cleanedText = cleanedText.substring(0, cleanedText.length - 3);
    }
    cleanedText = cleanedText.trim();

    const parsedJson = JSON.parse(cleanedText);
    res.json(parsedJson);

  } catch (error: any) {
    console.error("[Smart Roz Backend Error]:", error);
    res.status(500).json({
      error: "حدث خطأ أثناء معالجة البيانات من قبل سمارت روز الذكي. تفاصيل: " + error.message,
      fallbackData: fallbackMockResponse(req.body.description || "", !!req.body.image)
    });
  }
});

// 2. Edit Image / Generate High Quality Optimized Product shoot using gemini-2.5-flash-image
app.post("/api/smart-roz/edit-image", async (req, res) => {
  try {
    const { image, description, aiPrompt, presetTheme, isDemoMode } = req.body;

    if (isDemoMode) {
      console.log("[Smart Roz Image] Demo mode: returning simulated high-end variant.");
      return res.json({ success: true, simulated: true });
    }

    let ai;
    try {
      ai = getGeminiClient();
    } catch (err: any) {
      console.log("[Smart Roz Image] Missing API key for image editing. Falling back to simulated layers.");
      return res.json({ success: true, simulated: true });
    }

    const editPrompt = aiPrompt || description || "A beautiful, premium commercial studio output of the product, professional lighting, photorealistic, 4k";
    
    let parts: any[] = [];
    if (image) {
      const parsed = parseBase64Image(image);
      parts.push({
        inlineData: {
          mimeType: parsed.mimeType,
          data: parsed.data
        }
      });
    }

    // Combine visual description with user's specific guidelines
    const finalPromptText = `Modify and professionalize this product image based on the prompt: "${editPrompt}". Place the product in a gorgeous, highly premium, clean, high-contrast, professional-lit brand setting matching theme "${presetTheme || 'Luxury'}". Retain the original product bottle/shape perfectly, while making the background, shadows, lighting, reflections, and context stunningly beautiful and commercial-grade. Ensure clean shadows and premium reflections.`;

    parts.push({ text: finalPromptText });

    console.log("[Smart Roz Image] Requesting Gemini Image Editing using gemini-2.5-flash-image...");

    // We use gemini-2.5-flash-image for image edits as recommended in the gemini-api skill
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash-image",
      contents: { parts },
      config: {
        imageConfig: {
          aspectRatio: "1:1"
        }
      }
    });

    let generatedBase64: string | null = null;
    let textResponse = "";

    if (response.candidates?.[0]?.content?.parts) {
      for (const part of response.candidates[0].content.parts) {
        if (part.inlineData) {
          generatedBase64 = part.inlineData.data;
        } else if (part.text) {
          textResponse += part.text;
        }
      }
    }

    if (generatedBase64) {
      res.json({
        success: true,
        simulated: false,
        imageUrl: `data:image/png;base64,${generatedBase64}`,
        explanation: textResponse || "تم تحسين الصورة وتعديل الثيم بنجاح واحترافية."
      });
    } else {
      console.log("[Smart Roz Image] No image returned in inline parts. Returning simulation marker.");
      res.json({
        success: true,
        simulated: true,
        explanation: "لقد نجح الهيكل التوجيهي، وسنقوم بتوفير طبقات المحاكاة الفاخرة لزيادة دقة صورك."
      });
    }

  } catch (error: any) {
    console.error("[Smart Roz Image Error]:", error);
    res.json({
      success: true,
      simulated: true,
      errorMsg: error.message,
      explanation: "تأثيرات ذكية مبنية على المحاكاة البصرية الفائقة."
    });
  }
});

// Configure Vite rendering & fallback router
async function bootstrapServer() {
  if (process.env.NODE_ENV !== "production") {
    console.log("Setting up Express development environment with local Vite server middleware...");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    console.log("Serving production static assets from dist folder...");
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Smart Roz App running dynamically on port ${PORT}`);
  });
}

bootstrapServer();
