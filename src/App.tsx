/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect } from "react";
import { 
  Sparkles, 
  UploadCloud, 
  Video, 
  Image as ImageIcon, 
  Tag, 
  Music, 
  Layers, 
  Compass, 
  Check, 
  Loader2, 
  RefreshCw, 
  Palette, 
  Download, 
  Plus, 
  Trash2, 
  Volume2, 
  VolumeX, 
  Eye, 
  Sliders, 
  Sun, 
  Maximize2, 
  Play, 
  Pause, 
  Clock, 
  ChevronRight, 
  Flame, 
  Zap, 
  Award,
  AlertCircle
} from "lucide-react";
import { SmartRozAnalysis, ProductPreset, StickerOverlay } from "./types";

// Premium High-Quality Unsplash Presets to make the application immediately interactive and stunning.
const PRESET_PRODUCTS: ProductPreset[] = [
  {
    id: "royal_perfume",
    name: "عطر روج الملكي الفاخر",
    arabicName: "عطر روج الملكي",
    category: "عطور ومستحضرات تجميل",
    originalImage: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80&w=600",
    editedMock: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&q=80&w=600",
    description: "زجاجة عطر بلورية دائرية فخمة تحتاج هوية بصرية مذهلة تعتمد على اللون الذهبي لتمثيل الجاذبية الأبدية والهدوء.",
    defaultPrompt: "A high-end commercial photo of luxury glass fragrance bottle on black glossy granite platform, floating particles of golden foils, warm studio backlight spotlight, cinematic product styling, 8k resolution",
    defaultTheme: "الفخامة الذهبية الهادئة",
    analysis: {
      productName: "عطر روج الملكي الفاخر",
      category: "عطور ومستحضرات تجميل",
      aestheticStrengths: [
        "عبوة زجاجية بلورية منشورية توزع الضوء بزوايا هندسية مبهرة",
        "غطاء ذهبي مصقول ذو طابع ملكي يمنح إحساساً كلاسيكياً فورياً"
      ],
      slogan: "بريق خاص يحكي حكايتك الفريدة",
      brandThemeName: "الفخامة الذهبية الهادئة",
      brandIdentity: {
        colors: [
          { name: "ذهبي شامبين فخم", hex: "#E5C158", type: "primary" },
          { name: "أسود كربوني غامق", hex: "#111112", type: "secondary" },
          { name: "برونزي ميتاليك", hex: "#C59B27", type: "accent" }
        ],
        typography: {
          titleFont: "Cairo",
          bodyFont: "Tajawal",
          arabicFriendly: true
        },
        brandTone: "راقٍ، كلاسيكي فاخر، ومفعم بالثقة"
      },
      suggestedEdits: [
        { label: "إضاءة الاستوديو", description: "إضافة إضاءة ذهبية دافئة تنبثق من الخلف بلمسة ناعمة لتحديد معالم العبوة وتأثير فخم.", suggestedValue: "Gold backlighting" },
        { label: "جزيئات الذهب المتطايرة", description: "تأثير جزيئات ورق الذهب الخفيف المعلق بالهواء لإبداء ثراء وسحر الهوية.", suggestedValue: "Floating mini gold particles in background" },
        { label: "القاعدة العاكسة", description: "وضع الزجاجة على قاعدة رخامية مصقولة تعكس التدرج الضوئي للزجاج السفلي.", suggestedValue: "Polished wet black obsidian floor" }
      ],
      videoStoryboard: [
        {
          sceneNumber: 1,
          timeRange: "00:00 - 00:06",
          visuals: "تظهر زجاجة العطر ببطء من تحت غطاء مخملي أسود فاخر يرتفع تدريجياً، مع بصيص ضوئي ذهبي ينعكس على حوافها بجمال فائق.",
          textOverlay: "النبل والجاذبية في زجاجة",
          voiceover: "لكل قصة عظيمة بداية، وبداية حضورك الطاغي تبدأ بنفحة واحدة من السحر الخالص والأناقة السرمدية.",
          soundEffects: "صوت نسيم ناعم يتبعه ضجيج مائي دافئ وصوت رنين سحري متصاعد."
        },
        {
          sceneNumber: 2,
          timeRange: "00:06 - 00:12",
          visuals: "لقطة قريبة ماكرو عالية التفاصيل تركز على الرذاذ المتطاير بشكل متناغم ذي جزيئات ذهبية متلألئة في الهواء الكوني الداكن.",
          textOverlay: "عبق يعانق الخيال",
          voiceover: "تركيبات تم ابتكارها بحرفية من قبل سمارت روز لتناسب تطلعات عملائك وتمنحهم حضوراً لا ينسى.",
          soundEffects: "صوت انتشار الرذاذ برقة مع صعود موسيقى بيانو هادئة وعذبة."
        },
        {
          sceneNumber: 3,
          timeRange: "00:12 - 00:18",
          visuals: "المنتج موضوع على قاعدة رخامية تعكس ظلالاً متدرجة، مع تساقط حبات الذهب وقطرات الندى على جانب المنتج.",
          textOverlay: "دقة بصرية تفوق التصور",
          voiceover: "لأن منتجك ليس مجرد عطر، قمنا بضبط الأبعاد والظلال الإستوديوية لينبض منتجك بالحياة والإغراء التجاري.",
          soundEffects: "تموجات مياه خفيفة مع رنين سحري ناعم متردد."
        },
        {
          sceneNumber: 4,
          timeRange: "00:18 - 00:24",
          visuals: "مراجعة لوحة الهوية البصرية (Mood Board) تظهر خطوطاً وتدرجات فنية من درجات الذهب والبرونز الفخم الممتدة بانسيابية عصرية جمالية.",
          textOverlay: "ألوان تعكس جوهر جودتك",
          voiceover: "هوية بصرية متكاملة تم ترسيخها بذكاء فائض لتكون جاهزة للمشاركة والنشر على كافة منصات التواصل.",
          soundEffects: "نغمات وترية تبعث على الفخامة والتكامل والثقة المطلقة."
        },
        {
          sceneNumber: 5,
          timeRange: "00:24 - 00:30",
          visuals: "تراجع هادئ للكاميرا لتظهر اللقطة الإعلانية الكاملة للمنتج مزيناً بالهوية مع عرض شعار وسعر جذاب وأزرار الطلب الفوري.",
          textOverlay: "امتلك هويتك الإبداعية الآن مع Smart Roz",
          voiceover: "اجعل منتجاتك تتحدث بذكاء واحترافية. ذكاء سمارت روز التخيلي بين يديك الآن لصناعة المستقبل.",
          soundEffects: "نغمة أوركسترالية نهائية تلخص روح الفخامة والأناقة الفائقة مع هدوء تدريجي."
        }
      ],
      recommendedMusicStyle: "مزيج لوفي أرابيسك ناعم مع لمسات من الأوتار الملكية العميقة",
      aiPromptForEditing: "A luxury perfume photo on dark premium marble background, gold leaves accent, dramatic side studio spotlighting, 8k render"
    }
  },
  {
    id: "organic_elixir",
    name: "إكسير الأعشاب العضوي النقي",
    arabicName: "إكسير الأعشاب النقي",
    category: "عناية وصحة",
    originalImage: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&q=80&w=600",
    editedMock: "https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&q=80&w=600",
    description: "مركب طبيعي في قطارة زجاجية صامتة، مطلوب هوية تمثل الانتعاش العضوي، الطبيعة، الأمان، والتأثير المنعش لأوراق الشجر والندى.",
    defaultPrompt: "An elegant organic serum product bottle with dropper, placed on dry natural wood piece, surrounded by fresh green mint leaves and morning dew water droplets, soft bright daylight, bokeh background",
    defaultTheme: "الواحة الخضراء النقية",
    analysis: {
      productName: "إكسير الأعشاب العضوي النقي",
      category: "عناية بالبشرة وصحة",
      aestheticStrengths: [
        "لون زجاجي داكن يحمي المكونات العضوية ويعطي شعوراً طبياً عتيقاً وموثوقاً",
        "قطارة دقيقة ترمز للحرفية والخلطات الطبيعية الفائقة"
      ],
      slogan: "طبيعة تحميك.. ونقاء يحييك",
      brandThemeName: "الواحة الخضراء النقية",
      brandIdentity: {
        colors: [
          { name: "أخضر زمردي عضوي", hex: "#2E7D32", type: "primary" },
          { name: "بيج رملي دافئ", hex: "#D7CCC8", type: "secondary" },
          { name: "نعناعي مشرق", hex: "#A5D6A7", type: "accent" }
        ],
        typography: {
          titleFont: "Cairo",
          bodyFont: "Tajawal",
          arabicFriendly: true
        },
        brandTone: "طبيعي، صحي، منعش وموثوق بالكامل"
      },
      suggestedEdits: [
        { label: "خلفية الطبيعة الخضراء", description: "تغيير الخلفية إلى بيئة مشمسة هادئة غنية بأوراق الشجر الخضراء المنداة لتطويق المنتج بالنقاء.", suggestedValue: "Sunny zen forest background" },
        { label: "قطرات الندى الحقيقية", description: "إضافة قطرات ماء كريستال متجمعة على زجاج المنتج الخارجي لضمان محاكاة الانتعاش والحيوية.", suggestedValue: "Hyperreal water drops" },
        { label: "قاعدة خشبية طبيعية", description: "وضع الزجاجة ببراعة فوق قطعة جذع خشبي متعرجة لإضفاء لمسة ريفية حقيقية بالكامل.", suggestedValue: "Solid natural raw wood pedestal" }
      ],
      videoStoryboard: [
        {
          sceneNumber: 1,
          timeRange: "00:00 - 00:06",
          visuals: "تبدأ الكاميرا من الأعلى بلقطة غوص ناعمة نحو غابة مطيرة تملؤها أشعة الشمس الذهبية لتستقر فوق ورقة شجر يقطر منها الندى النقي.",
          textOverlay: "من قلب الطبيعة الصامتة",
          voiceover: "هناك سر يكمن في عمق الطبيعة.. سر الجمال الكامل والصحة الدائمة التي تبحث عنها بشرتك.",
          soundEffects: "أصوات عصافير برية ورياح تداعب الزهور بلطف فائق."
        },
        {
          sceneNumber: 2,
          timeRange: "00:06 - 00:12",
          visuals: "ينزلق السائل الأخضر الرائع من قطارة الإكسير ليلامس قاعدة خشبية طبيعية ينبثق منها النعناع الأخضر والمكونات الطازجة.",
          textOverlay: "عناية تفوق المعايير",
          voiceover: "سمارت روز يقدم منتجك العضوي في أبهى حلة تبرز طبيعته العذبة، لتأسر قلوب الباحثين عن النقاء المطلق.",
          soundEffects: "صوت سقوط قطرة مائية ذو رنين نقي متبوع بعزف قيتار صوتي هادئ."
        },
        {
          sceneNumber: 3,
          timeRange: "00:12 - 00:18",
          visuals: "لقطة بطيئة ومقربة للعبوة مع تدفق قطرات الماء المنعش من جوانبها تعبيراً عن الرعاية المكثفة والانتعاش الفوري.",
          textOverlay: "نقاء يظهر في كل بريق",
          voiceover: "أضفنا إضاءة غامرة ناعمة تحاكي شمس الصباح الساطعة، لتشعر الأعين برائحة العشب المنعش.",
          soundEffects: "موسيقى تفاؤلية هادئة بأسلوب الكانتري الدافئ."
        },
        {
          sceneNumber: 4,
          timeRange: "00:18 - 00:24",
          visuals: "تأثير مرئي يكشف درجات الهوية البصرية المعتمدة (الزمردي، الرملي، النعناعي المشرق) وهي ممتزجة مع خطوط جمالية فريدة.",
          textOverlay: "هوية بصرية ترسم النجاح",
          voiceover: "تناغم لوني مدروس وصورة فنية تمنح علامتك المصداقية المطلقة والجاذبية في السوق المحلي والدولي.",
          soundEffects: "نغمة تآلفية متكاملة لصدى طبيعي منعش."
        },
        {
          sceneNumber: 5,
          timeRange: "00:24 - 00:30",
          visuals: "لقطة نهائية للمظهر المتكامل للمنتج يحيطه النعناع مع ظهور عبارة الخصم الموسمي الحصري وهاشتاغات النشر.",
          textOverlay: "احجز رونقك الطبيعي مع Smart Roz",
          voiceover: "مظهر احترافي لافت وعميق الجمال لمنتجاتك بطريقة تدرج ممتعة. هويتك العضوية جاهزة للنشر الآن.",
          soundEffects: "هدوء لطيف للاصوات مع رنين متلاشي يبعث على الاسترخاء والأمان."
        }
      ],
      recommendedMusicStyle: "موسيقى هادئة مستوحاة من الطبيعة والـ Acoustic الياباني المريح",
      aiPromptForEditing: "Product serum bottle on wooden block, mint leaves, morning soft sunshine, organic luxury feel, 8k resolution"
    }
  },
  {
    id: "cyber_drink",
    name: "مشروب الطاقة سايبر بنك إكس",
    arabicName: "مشروب سايبر بنك",
    category: "مشروبات وأغذية",
    originalImage: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80&w=600",
    editedMock: "https://images.unsplash.com/photo-1543257580-7269da773bf5?auto=format&fit=crop&q=80&w=600",
    description: "عبوة معدنية أسطوانية عصرية مخصصة للشباب وهواة العاب الفيديو، بحاجة إلى ثيم نيون كهربائي صاخب وقوي يعبر عن الفيوتشري والهايب اللامحدود.",
    defaultPrompt: "A sleek black aluminum beverage can centered, exploding neon lightning cyber effects in background, magenta and cyan cyber laser tracks, condensation ice drops on the can, epic atmosphere, gaming setup style, 8k epic render",
    defaultTheme: "النيون الكهربائي الصاخب",
    analysis: {
      productName: "مشروب الطاقة سايبر بنك إكس",
      category: "مشروبات حيوية وطاقة",
      aestheticStrengths: [
        "هيكل معدني ألومنيوم معتم ينقل طابع البرودة المطلقة والتحدي القاسي",
        "تكامل مثالي لخطوط الحفر تمنحه فخامة ملموسة"
      ],
      slogan: "فوق حدود طاقتك.. اهزم المستحيل",
      brandThemeName: "النيون الكهربائي الصاخب",
      brandIdentity: {
        colors: [
          { name: "فوشيا نيون متوهج", hex: "#FF007F", type: "primary" },
          { name: "سماوي سايبر كهربائي", hex: "#00F0FF", type: "secondary" },
          { name: "رمادي معدني داكن", hex: "#22252A", type: "accent" }
        ],
        typography: {
          titleFont: "Cairo",
          bodyFont: "Tajawal",
          arabicFriendly: true
        },
        brandTone: "جريء، ناري، مبهر ومليء بالأدرينالين"
      },
      suggestedEdits: [
        { label: "برق ليزري نيون خلفي", description: "أشعة ليزر زرقاء ووردية تتقاطع خلف العبوة لإظهار الحركة الفوق طبيعية والقوة الحقيقية.", suggestedValue: "Magenta and cyan laser beams" },
        { label: "كثافة قطرات الثلج والبرودة", description: "إضافة نسيج فروست وجليد رقيق جداً متكثف على سطح العبوة لإبراز شدة انتعاش وبرودة المشروب المميز.", suggestedValue: "Dense frozen frost textures" },
        { label: "قاعدة سايبر فوتوغرافية", description: "قاعدة مشققة ترسل توهجات كهربائية ممتدة تتناغم مع زوايا اللعبة الرقمية.", suggestedValue: "Glow grid gaming dark matrix" }
      ],
      videoStoryboard: [
        {
          sceneNumber: 1,
          timeRange: "00:00 - 00:06",
          visuals: "تفتح الشاشة بظلام تام يقطعه وميض صاعقة ليزر أزرق فوسجادي يخترق العبوة المعدنية الساكنة لتبدأ بالدوران اللامتناهي السريع.",
          textOverlay: "جاهز لتجاوز كل الحدود؟",
          voiceover: "في الميدان حيث تتوقف القلوب وتشتد المنافسة، القادة الحقيقيون يمتلكون سلاحهم الخفي والخاص للسيطرة.",
          soundEffects: "ضربة رعد كهربائية مع صوت تراكم أزيز الكابلات عالي التردد."
        },
        {
          sceneNumber: 2,
          timeRange: "00:06 - 00:12",
          visuals: "العبوة تنفجر بهالة من قطرات الماء المتطايرة ذات اللون الفيروزي والوردي مع تقريب فائق السرعة لكلمات الطاقة والتحذير الرائعة.",
          textOverlay: "أدرينالين نيون لا يتوقف",
          voiceover: "تصميم جريء وثيم إلكتروني نفاذ صُنع بدقة متناهية من سمارت روز ليتواصل مباشرة مع عقول الجيل القادم المبتكر.",
          soundEffects: "تأثير دوي انفجار مائي سريع متبوع ببيتات سنثسيزر حماسية وسريعة للغاية."
        },
        {
          sceneNumber: 3,
          timeRange: "00:12 - 00:18",
          visuals: "العبوة تتمركز مجدداً على شبكة ليزر فوسفورية مشعة ممزوجة برموز سيبرانية تدور حول الغطاء في لوحة بصرية مدهشة.",
          textOverlay: "عالم رقمي.. طاقة حقيقية",
          voiceover: "التحسينات المقترحة تمنح منتجك وزناً وقوة تنافسية عملاقة تشعل الفضول وتدفع لمشاركة المنشور بسرعة جنونية.",
          soundEffects: "صوت صفير إلكتروني حاد مع إيقاع بوب سايبر قوي يتصاعد باحترافية."
        },
        {
          sceneNumber: 4,
          timeRange: "00:18 - 00:24",
          visuals: "عرض ساحق لتدرج السايبر بنك الخاص بالهوية وتفاصيل الخطوط العريضة والمستقبلية التي تدعم لغة الحوار مع الشباب.",
          textOverlay: "هويتك الآن.. لغة المستقبل والبرمجة",
          voiceover: "ألوان جريئة وصاخبة تخطف انتباه العين فوراً في بضع ثوانٍ لتبرز علامتك كرمز للقوة المطلقة.",
          soundEffects: "صوت تدفق الطاقة المتناغم مع ضربات درامز قوية ومجسمة."
        },
        {
          sceneNumber: 5,
          timeRange: "00:24 - 00:30",
          visuals: "عبوة المشروب تقف بثبات مع وميض نيون يحيط بها ومؤثرات دخان كهربائية مع رابط الموقع وتطبيق الشراء الفوري تلمع بربكة حية.",
          textOverlay: "سجّل ريادتك اليوم مع Smart Roz",
          voiceover: "سمارت روز يعيد تعريف الهويات البصرية الأكثر حماساً وإثارة. هويتك الثورية بانتظارك للمجد.",
          soundEffects: "إرسال نغمات ليزرية سريعة تنتهي بصوت بيب إلكتروني فخم وشعار متلاشي بروعة."
        }
      ],
      recommendedMusicStyle: "موسيقى سايبر بانك سنث ويف حماسية جداً وغنية بإيقاعات الماتريكس الصاخبة",
      aiPromptForEditing: "A dynamic cyber drink can mockup with glowing neon lightning vectors behind it, high contrast cyberpunk neon theme, 8k rendering"
    }
  }
];

export default function App() {
  const [selectedPreset, setSelectedPreset] = useState<ProductPreset>(PRESET_PRODUCTS[0]);
  const [customImageBase64, setCustomImageBase64] = useState<string | null>(null);
  const [customDescription, setCustomDescription] = useState<string>("");
  const [designerMode, setDesignerMode] = useState<"commercial" | "artistic">("commercial");
  const [activeThemeTab, setActiveThemeTab] = useState<string>("الفخامة الذهبية الهادئة");
  
  // App states
  const [isAnalyzing, setIsAnalyzing] = useState<boolean>(false);
  const [isEditingImage, setIsEditingImage] = useState<boolean>(false);
  const [analysisResult, setAnalysisResult] = useState<SmartRozAnalysis>(PRESET_PRODUCTS[0].analysis);
  const [imageResultUrl, setImageResultUrl] = useState<string>(PRESET_PRODUCTS[0].editedMock);
  const [isSimulatingResponse, setIsSimulatingResponse] = useState<boolean>(false);
  
  // Interactive decals/stickers overlays
  const [stickers, setStickers] = useState<StickerOverlay[]>([
    {
      id: "sticker-1",
      text: "النسخة المحدودة ⭐",
      color: "#E5C158",
      textColor: "#111112",
      positionX: 18,
      positionY: 20,
      size: 130,
      borderRadius: "9999px",
      style: "classic"
    },
    {
      id: "sticker-2",
      text: "طبيعي 100% 🌿",
      color: "#111112",
      textColor: "#F8F9FA",
      positionX: 55,
      positionY: 82,
      size: 120,
      borderRadius: "8px",
      style: "elegant"
    }
  ]);
  const [selectedStickerId, setSelectedStickerId] = useState<string | null>("sticker-1");
  const [newStickerText, setNewStickerText] = useState<string>("");
  
  // Photo Adjustments sliders
  const [brightness, setBrightness] = useState<number>(100);
  const [contrast, setContrast] = useState<number>(100);
  const [glowIntensity, setGlowIntensity] = useState<number>(20);
  const [appliedFilter, setAppliedFilter] = useState<string>("none"); // 'none' | 'sunset' | 'nord' | 'vintage' | 'neon'
  
  // 30-Second Video Simulator Player state
  const [isPlayingVideo, setIsPlayingVideo] = useState<boolean>(false);
  const [videoProgress, setVideoProgress] = useState<number>(0); // 0 to 100
  const [activeVideoSceneIdx, setActiveVideoSceneIdx] = useState<number>(0);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const [isVideoLoading, setIsVideoLoading] = useState<boolean>(false);
  
  // Web view tabs
  const [activeTab, setActiveTab] = useState<"workspace" | "storyboard" | "gallery">("workspace");

  // Drag & drop file upload state/refs
  const [isDragOver, setIsDragOver] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  // Demo mode controller
  const [isDemoMode, setIsDemoMode] = useState<boolean>(true);

  // Audio synsthesizer simulation
  const audioContextRef = useRef<AudioContext | null>(null);
  const oscRef = useRef<OscillatorNode | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);

  // Auto incremental simulated video runtime
  useEffect(() => {
    let interval: any;
    if (isPlayingVideo) {
      interval = setInterval(() => {
        setVideoProgress((prev) => {
          if (prev >= 100) {
            setIsPlayingVideo(false);
            return 0;
          }
          const nextProgress = prev + 1;
          const currentSec = (nextProgress / 100) * 30;
          // Determine active scene based on time (5 scenes of 6 seconds each)
          const sceneIdx = Math.min(Math.floor(currentSec / 6), 4);
          setActiveVideoSceneIdx(sceneIdx);
          
          // Synthesize interactive space music notes on timeline tick!
          if (soundEnabled && nextProgress % 15 === 0) {
            playSynthNote();
          }
          return nextProgress;
        });
      }, 300);
    } else {
      stopSynth();
    }
    return () => {
      clearInterval(interval);
      stopSynth();
    };
  }, [isPlayingVideo, soundEnabled]);

  // Audio synthesizer player helper
  const playSynthNote = () => {
    try {
      if (!audioContextRef.current) {
        audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
      }
      const ctx = audioContextRef.current;
      if (ctx.state === "suspended") {
        ctx.resume();
      }

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      
      // Determine note pitch based on selection to sound premium and therapeutic
      let frequency = 261.63; // C4 default
      if (selectedPreset.id === "royal_perfume") frequency = 329.63; // E4 luxurious
      if (selectedPreset.id === "organic_elixir") frequency = 349.23; // F4 refreshing
      if (selectedPreset.id === "cyber_drink") frequency = 440.00; // A4 dynamic cyberpunk

      // Add a random slight pitch drift
      frequency += Math.random() * 20 - 10;

      osc.type = selectedPreset.id === "cyber_drink" ? "sawtooth" : "triangle";
      osc.frequency.setValueAtTime(frequency, ctx.currentTime);
      
      gain.gain.setValueAtTime(0, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.12, ctx.currentTime + 0.1);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 1.2);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 1.3);
    } catch (e) {
      console.log("Web Audio not permitted on this gesture or browser.");
    }
  };

  const stopSynth = () => {
    // Keep clean
  };

  // Preset fast loader
  const handleSelectPreset = (preset: ProductPreset) => {
    setSelectedPreset(preset);
    setAnalysisResult(preset.analysis);
    setImageResultUrl(preset.editedMock);
    setCustomImageBase64(null); // Clear custom upload when toggling presets
    setActiveThemeTab(preset.analysis.brandThemeName);
    
    // Reset video progression
    setIsPlayingVideo(false);
    setVideoProgress(0);
    setActiveVideoSceneIdx(0);

    // Populate customized values
    setBrightness(100);
    setContrast(100);
    setGlowIntensity(20);
    setAppliedFilter("none");

    // Re-seed decals
    if (preset.id === "royal_perfume") {
      setStickers([
        { id: "sticker-1", text: "النسخة المحدودة ⭐", color: "#E5C158", textColor: "#111112", positionX: 18, positionY: 20, size: 130, borderRadius: "9999px", style: "classic" },
        { id: "sticker-2", text: "طبيعي %100 🌿", color: "#111112", textColor: "#F8F9FA", positionX: 55, positionY: 82, size: 120, borderRadius: "8px", style: "elegant" }
      ]);
    } else if (preset.id === "organic_elixir") {
      setStickers([
        { id: "st-1", text: "عضوي نقي 🍃", color: "#2E7D32", textColor: "#ffffff", positionX: 15, positionY: 25, size: 125, borderRadius: "8px", style: "elegant" },
        { id: "st-2", text: "سمارت روز توصي به", color: "#D7CCC8", textColor: "#5c3d2e", positionX: 45, positionY: 80, size: 140, borderRadius: "9999px", style: "classic" }
      ]);
    } else {
      setStickers([
        { id: "cy-1", text: "طاقة ليزر 🔥", color: "#FF007F", textColor: "#ffffff", positionX: 20, positionY: 15, size: 110, borderRadius: "4px", style: "ribbon" },
        { id: "cy-2", text: "مشروب اللاعبين ⚡", color: "#00F0FF", textColor: "#111112", positionX: 50, positionY: 84, size: 150, borderRadius: "4px", style: "badge" }
      ]);
    }
  };

  // Convert File object to Base64 String
  const processUploadedFile = (file: File) => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === "string") {
        setCustomImageBase64(reader.result);
        setImageResultUrl(reader.result); // Initially same, until Smart Roz edits it
        setSelectedPreset({
          id: "custom",
          name: "منتج مخصص مرفوع",
          arabicName: "منتج مخصص جديد",
          category: "غير مصنف بعد",
          originalImage: reader.result,
          editedMock: reader.result,
          description: "قم بطلب تعديلات من سمارت روز الذكي في الأسفل وسيقوم بتوليد صورة فخمة لك.",
          defaultPrompt: "A high-end modern retail store front photo of custom product, dynamic perspective, beautiful warm bokeh, 4k",
          defaultTheme: "تحليل ذكي فوري",
          analysis: selectedPreset.analysis // Use current study first
        });
      }
    };
    reader.readAsDataURL(file);
  };

  // Input Drag Events
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      processUploadedFile(e.dataTransfer.files[0]);
    }
  };

  const handleSelectFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      processUploadedFile(e.target.files[0]);
    }
  };

  // Trigger File dialof
  const triggerFileSelector = () => {
    fileInputRef.current?.click();
  };

  // API Call to Analyze product
  const runSmartRozIntegration = async () => {
    setIsAnalyzing(true);
    setIsEditingImage(true);
    
    const targetImage = customImageBase64 || selectedPreset.originalImage;
    const targetDesc = customDescription || selectedPreset.description;

    try {
      // Step 1: Call Gemini-fueled Brand Identity & Slogan generator
      const analyzeResponse = await fetch("/api/smart-roz/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          image: targetImage.startsWith("data:") ? targetImage : null, // send if uploaded base64
          description: targetDesc,
          isDemoMode: isDemoMode
        }),
      });

      if (!analyzeResponse.ok) {
        throw new Error("فشل الاتصال بالخادم الذكي.");
      }

      const analyzedJson: SmartRozAnalysis = await analyzeResponse.json();
      setAnalysisResult(analyzedJson);
      
      // Step 2: Call Gemini-based image editing service 
      const editImageResponse = await fetch("/api/smart-roz/edit-image", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          image: targetImage.startsWith("data:") ? targetImage : null,
          description: targetDesc,
          aiPrompt: analyzedJson.aiPromptForEditing,
          presetTheme: analyzedJson.brandThemeName,
          isDemoMode: isDemoMode
        }),
      });

      const editedJson = await editImageResponse.json();
      if (editedJson.success && editedJson.imageUrl) {
        setImageResultUrl(editedJson.imageUrl);
      } else {
        // Fallback to high-quality preset rendered if simulated
        if (customImageBase64) {
          // If custom uploaded and simulated, we apply gorgeous studio overlays
          setImageResultUrl(customImageBase64);
        } else {
          setImageResultUrl(selectedPreset.editedMock);
        }
      }

      // Success alerts and local feedback
      playSynthNote();
      setActiveThemeTab(analyzedJson.brandThemeName);
      
    } catch (err) {
      console.error(err);
      // Soft alert and safe state recovery
    } finally {
      setIsAnalyzing(false);
      setIsEditingImage(false);
    }
  };

  // Add Sticker overlay 
  const addSticker = () => {
    if (!newStickerText.trim()) return;
    const newSticker: StickerOverlay = {
      id: "st-" + Date.now(),
      text: newStickerText,
      color: analysisResult.brandIdentity.colors[0]?.hex || "#E5C158",
      textColor: "#111112",
      positionX: 30 + Math.random() * 20,
      positionY: 40 + Math.random() * 20,
      size: 130,
      borderRadius: "8px",
      style: "elegant"
    };
    setStickers([...stickers, newSticker]);
    setSelectedStickerId(newSticker.id);
    setNewStickerText("");
  };

  // Remove selected sticker
  const removeSticker = (id: string) => {
    setStickers(stickers.filter(s => s.id !== id));
    if (selectedStickerId === id) setSelectedStickerId(null);
  };

  // Move Sticker (simulated layout setter)
  const adjustStickerPosition = (key: "x" | "y" | "size", val: number) => {
    if (!selectedStickerId) return;
    setStickers(stickers.map(s => {
      if (s.id === selectedStickerId) {
        return {
          ...s,
          positionX: key === "x" ? Math.max(0, Math.min(100, val)) : s.positionX,
          positionY: key === "y" ? Math.max(0, Math.min(100, val)) : s.positionY,
          size: key === "size" ? Math.max(60, Math.min(250, val)) : s.size
        };
      }
      return s;
    }));
  };

  // Adjust Sticker style/variant
  const adjustStickerStyle = (id: string, updates: Partial<StickerOverlay>) => {
    setStickers(stickers.map(s => {
      if (s.id === id) {
        return { ...s, ...updates };
      }
      return s;
    }));
  };

  const activeSticker = stickers.find(s => s.id === selectedStickerId);

  // Get dynamic CSS Filter styles
  const getFilterStyle = () => {
    let filterString = `brightness(${brightness}%) contrast(${contrast}%)`;
    if (appliedFilter === "sunset") filterString += " sepia(35%) hue-rotate(340deg) saturate(140%)";
    if (appliedFilter === "nord") filterString += " saturate(70%) hue-rotate(180deg) brightness(95%)";
    if (appliedFilter === "vintage") filterString += " sepia(60%) contrast(90%) brightness(102%)";
    if (appliedFilter === "neon") filterString += " saturate(180%) hue-rotate(290deg) contrast(110%)";
    return filterString;
  };

  // Simulated download
  const handleDownloadOutput = () => {
    // Generate simulated dynamic download file
    const link = document.createElement("a");
    link.href = imageResultUrl;
    link.download = `smart_roz_${selectedPreset.id}_theme.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-slate-100 font-sans antialiased selection:bg-[#D4AF37]/30 selection:text-[#E5C158] transition-all" dir="rtl">
      
      {/* Decorative Elegant background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f2e12_1px,transparent_1px),linear-gradient(to_bottom,#1f1f2e12_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Hero Header Space */}
      <header className="border-b border-zinc-800/80 bg-zinc-950/70 backdrop-blur-md sticky top-0 z-50 transition-all">
        <div className="max-w-7xl mx-auto px-4 py-3 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Logo & Agent identity */}
          <div className="flex items-center gap-3">
            <div className="relative flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-tr from-amber-500 via-yellow-500 to-amber-600 shadow-lg shadow-amber-500/10">
              <Sparkles className="w-6 h-6 text-zinc-950 animate-pulse" />
              <div className="absolute -top-1 -left-1 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-zinc-950" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl font-bold tracking-tight bg-gradient-to-r from-amber-400 via-yellow-200 to-amber-500 bg-clip-text text-transparent">
                  Smart Roz
                </h1>
                <span className="text-xs bg-amber-500/10 text-amber-500 border border-amber-500/20 px-2 py-0.5 rounded font-mono">v3.5 Flash</span>
              </div>
              <p className="text-xs text-zinc-400 font-medium">روبوت ذكي مبدع بالهوية البصرية وتعديل المنتجات والفيديو</p>
            </div>
          </div>

          {/* Quick Stats & Controls bar */}
          <div className="flex flex-wrap items-center gap-3">
            
            {/* Toggle demo engine simulated values */}
            <div className="bg-zinc-900/90 border border-zinc-800 rounded-lg p-1 px-2.5 flex items-center gap-2 text-xs">
              <span className="text-zinc-400">وضع المحاكاة الفائق:</span>
              <button 
                onClick={() => {
                  setIsDemoMode(!isDemoMode);
                  playSynthNote();
                }}
                className={`px-3 py-1 rounded-md font-semibold transition-all cursor-pointer ${isDemoMode ? 'bg-amber-500 text-zinc-950 shadow-md' : 'bg-zinc-800 text-zinc-300'}`}
              >
                {isDemoMode ? "مفعّل (استجابة فورية)" : "مغلق (سيرفر حقيقي)"}
              </button>
            </div>

            {/* Quick switcher buttons */}
            <nav className="flex bg-zinc-900 border border-zinc-800 rounded-lg p-1 text-xs">
              <button
                onClick={() => setActiveTab("workspace")}
                className={`px-3 py-1.5 rounded-md flex items-center gap-2 transition-all cursor-pointer ${activeTab === "workspace" ? "bg-zinc-800 text-amber-400 font-semibold" : "text-zinc-400 hover:text-zinc-200"}`}
              >
                <Sliders className="w-3.5 h-3.5" />
                <span>الورشة الذكية</span>
              </button>
              <button
                onClick={() => setActiveTab("storyboard")}
                className={`px-3 py-1.5 rounded-md flex items-center gap-2 transition-all cursor-pointer ${activeTab === "storyboard" ? "bg-zinc-800 text-amber-400 font-semibold" : "text-zinc-400 hover:text-zinc-200"}`}
              >
                <Video className="w-3.5 h-3.5" />
                <span>الفيديو الإعلاني</span>
              </button>
              <button
                onClick={() => setActiveTab("gallery")}
                className={`px-3 py-1.5 rounded-md flex items-center gap-2 transition-all cursor-pointer ${activeTab === "gallery" ? "bg-zinc-800 text-amber-400 font-semibold" : "text-zinc-400 hover:text-zinc-200"}`}
              >
                <Compass className="w-3.5 h-3.5" />
                <span>الهام المعرض</span>
              </button>
            </nav>

          </div>

        </div>
      </header>

      {/* Main Workspace Frame */}
      <main className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        
        {/* Banner Warning if Real server and missing keys */}
        {!isDemoMode && (
          <div className="mb-6 p-3 bg-zinc-900/90 border border-amber-500/20 text-amber-500 rounded-xl text-xs flex items-start gap-3">
            <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold mb-1">تنبيه وضع السيرفر الحقيقي</p>
              <p className="text-zinc-300">
                عند إلغاء وضع المعاينة، سيقوم سمارت روز بالاتصال المباشر بخدمة الذكاء الاصطناعي <code className="text-amber-400">@google/genai</code>. يرجى التأكد من ضبط مفتاح السر في إعدادات التطبيق قبل البدء لضمان نجاح التوليد.
              </p>
            </div>
          </div>
        )}

        {/* Tab 1: Direct workspace (Default) */}
        {activeTab === "workspace" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            
            {/* LEFT AREA: Product Selector & Action Control panel (4 Columns) */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              
              {/* Box 1: Product Input & Choice */}
              <div id="product-selection-card" className="bg-zinc-950 border border-zinc-800 rounded-2xl p-5 flex flex-col gap-4 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 blur-3xl rounded-full" />
                
                <div className="flex items-center justify-between border-b border-zinc-800/80 pb-3">
                  <div className="flex items-center gap-2">
                    <Layers className="w-4.5 h-4.5 text-amber-500" />
                    <h2 className="font-bold text-sm tracking-tight text-zinc-100">تحميل أو اختيار العينة</h2>
                  </div>
                  <span className="text-xs text-zinc-500">اختر بسرعة للتجربة</span>
                </div>

                {/* Preset Fast Picker */}
                <div className="grid grid-cols-3 gap-2">
                  {PRESET_PRODUCTS.map((prod) => (
                    <button
                      key={prod.id}
                      onClick={() => handleSelectPreset(prod)}
                      className={`p-1.5 rounded-lg border text-center transition-all flex flex-col items-center gap-1 cursor-pointer ${
                        selectedPreset.id === prod.id && !customImageBase64
                          ? "border-amber-500/60 bg-amber-500/10 text-amber-400 scale-[1.02]"
                          : "border-zinc-800 bg-zinc-900/40 text-zinc-400 hover:text-zinc-200 hover:border-zinc-700"
                      }`}
                    >
                      <img 
                        src={prod.originalImage} 
                        alt={prod.name} 
                        className="w-10 h-10 object-cover rounded-md border border-zinc-800" 
                      />
                      <span className="text-[10px] font-medium truncate w-full">{prod.arabicName}</span>
                    </button>
                  ))}
                </div>

                {/* Main Interactive File Uploader */}
                <div 
                  id="drag-and-drop-workspace-uploader"
                  onClick={triggerFileSelector}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  className={`border-2 border-dashed rounded-xl p-4 text-center cursor-pointer transition-all flex flex-col items-center justify-center group ${
                    isDragOver 
                      ? "border-amber-500 bg-amber-500/10" 
                      : customImageBase64
                      ? "border-green-500/40 bg-zinc-900/20 hover:bg-zinc-900/30"
                      : "border-zinc-800 hover:border-zinc-700 bg-zinc-900/30 hover:bg-zinc-900/55"
                  }`}
                >
                  <input 
                    type="file" 
                    ref={fileInputRef}
                    onChange={handleSelectFileInput}
                    accept="image/*"
                    className="hidden" 
                  />
                  {customImageBase64 ? (
                    <div className="flex flex-col items-center gap-1.5">
                      <div className="w-8 h-8 rounded-full bg-green-500/10 text-green-400 flex items-center justify-center text-xs">
                        <Check className="w-4 h-4" />
                      </div>
                      <span className="text-xs text-green-400 font-semibold">تم تحميل منتجك المخصص!</span>
                      <span className="text-[10px] text-zinc-500 max-w-xs truncate">انقر لتغيير الصورة المرفوعة في أي وقت</span>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center gap-2">
                      <UploadCloud className="w-8 h-8 text-zinc-500 group-hover:text-amber-500 transition-all group-hover:scale-110" />
                      <span className="text-xs text-zinc-300 font-semibold">اسحب و أفلت صورة منتجك هنا</span>
                      <p className="text-[10px] text-zinc-500">أو اضغط للتصفح يدوياً من جهازك</p>
                    </div>
                  )}
                </div>

                {/* Desired adjustments description */}
                <div className="flex flex-col gap-1.5 mt-2">
                  <label className="text-xs text-zinc-400 font-semibold">ما التعديلات والهوية البصرية التي ترغب بها؟</label>
                  <textarea
                    value={customDescription}
                    onChange={(e) => setCustomDescription(e.target.value)}
                    placeholder={selectedPreset.description}
                    rows={3}
                    className="w-full bg-zinc-900 text-xs border border-zinc-800 rounded-xl p-3 focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500 text-zinc-200 placeholder:text-zinc-600 resize-none transition-all"
                  />
                </div>

                {/* Mode Controller Commercial vs Artistic */}
                <div className="flex flex-col gap-2 mt-2">
                  <span className="text-xs text-zinc-400 font-semibold hover:text-zinc-200">نمط تعديل الروبوت الفني</span>
                  <div className="grid grid-cols-2 gap-2 bg-zinc-900 p-1 rounded-xl">
                    <button
                      onClick={() => setDesignerMode("commercial")}
                      className={`py-1.5 text-xs rounded-lg font-semibold transition-all cursor-pointer ${designerMode === "commercial" ? 'bg-amber-500 text-zinc-950 font-bold' : 'text-zinc-400 hover:text-zinc-200'}`}
                    >
                      تجاري متكامل إعلاني
                    </button>
                    <button
                      onClick={() => setDesignerMode("artistic")}
                      className={`py-1.5 text-xs rounded-lg font-semibold transition-all cursor-pointer ${designerMode === "artistic" ? 'bg-amber-500 text-zinc-950 font-bold' : 'text-zinc-400 hover:text-zinc-200'}`}
                    >
                      فني يدوي يدوي
                    </button>
                  </div>
                </div>

                {/* Big Magic trigger button */}
                <button
                  onClick={runSmartRozIntegration}
                  disabled={isAnalyzing || isEditingImage}
                  className="w-full relative group bg-gradient-to-tr from-amber-500 via-yellow-400 to-amber-600 text-zinc-950 font-bold py-3.5 px-4 rounded-xl shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2 hover:brightness-105 active:scale-98 transition-all disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed"
                >
                  {isAnalyzing || isEditingImage ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin text-zinc-950" />
                      <span className="text-sm font-black">جاري تحليل وبناء الهوية...</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-5 h-5 text-zinc-950 animate-bounce" />
                      <span className="text-sm font-black">اسأل سمارت روز لتصميم الهوية</span>
                    </>
                  )}
                </button>

              </div>

              {/* Box 2: Visual presets recommendations */}
              <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-5 flex flex-col gap-3">
                <div className="flex items-center gap-2 border-b border-zinc-800/80 pb-2.5">
                  <Palette className="w-4 h-4 text-amber-500" />
                  <span className="font-bold text-xs">ثيمات ذكية يوصي بها سمارت روز</span>
                </div>
                <div className="flex flex-col gap-1.5 text-[11px] text-zinc-400">
                  <p className="mb-2">يمكنك نسخ ولصق الثيم بوصفك في الأعلى للحصول على نتائج حقيقية:</p>
                  
                  <div className="p-2.5 rounded-lg bg-zinc-900/60 hover:bg-zinc-900 border border-zinc-800 hover:border-zinc-700 cursor-pointer text-right flex items-center justify-between group"
                       onClick={() => setCustomDescription("صمم لي الهوية بأسلوب الفخامة الذهبية الهادئة مع تساقط ورق الذهب وإضاءة ستوديو ناعمة")}>
                    <div>
                      <span className="font-bold text-amber-400 block mb-0.5">ثيم الفخامة الذهبية ⚜️</span>
                      <span>رخام أسود، إضاءة كلاسيكية وغبار الذهب.</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-zinc-600 transition-transform group-hover:translate-x-1" />
                  </div>

                  <div className="p-2.5 rounded-lg bg-zinc-900/60 hover:bg-zinc-900 border border-zinc-800 hover:border-zinc-700 cursor-pointer text-right flex items-center justify-between group"
                       onClick={() => setCustomDescription("أريد ثيم الواحة الخضراء النقية العشبية مع قطرات الندى العذبة وجذع ريفي خشبي")}>
                    <div>
                      <span className="font-bold text-green-400 block mb-0.5">ثيم الواحة الطبيعية 🍃</span>
                      <span>غابات الصنوبر، خشب طبيعي وقطرات الندى المشرقة.</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-zinc-600 transition-transform group-hover:translate-x-1" />
                  </div>

                  <div className="p-2.5 rounded-lg bg-zinc-900/60 hover:bg-zinc-900 border border-zinc-800 hover:border-zinc-700 cursor-pointer text-right flex items-center justify-between group"
                       onClick={() => setCustomDescription("حول المنتج إلى الطابع النيوني للملاعب وألعاب الفيديو مع صواعق ليزر فوشيا")}>
                    <div>
                      <span className="font-bold text-cyan-400 block mb-0.5">ثيم السايبر المتوهج ⚡</span>
                      <span>ليزر زرقاء ووردية، بريق برودة شديد وبكسلات.</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-zinc-600 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>

            </div>

            {/* MIDDLE AREA: Dynamic Design Preview & Overlays (5 Columns) */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              
              {/* Box 3: Master Visual Board */}
              <div id="master-visual-board" className="bg-zinc-950 border border-zinc-800 rounded-2xl p-5 flex flex-col gap-4 relative">
                
                <div className="flex items-center justify-between border-b border-zinc-800/80 pb-3">
                  <div className="flex items-center gap-2">
                    <ImageIcon className="w-4.5 h-4.5 text-amber-500" />
                    <h3 className="font-bold text-sm tracking-tight text-zinc-100">استوديو رندر وتعديل اللقطة</h3>
                  </div>
                  
                  {/* Filter selector options drop */}
                  <div className="flex items-center gap-1.5 bg-zinc-900 p-0.5 rounded-lg">
                    <select
                      value={appliedFilter}
                      onChange={(e) => setAppliedFilter(e.target.value)}
                      className="bg-transparent text-[11px] text-zinc-300 font-semibold px-2 py-1 outline-none cursor-pointer border-none"
                    >
                      <option value="none">بدون تصفية لونية</option>
                      <option value="sunset">Sunset Amber 🌅</option>
                      <option value="nord">Moonlight Teal ❄️</option>
                      <option value="vintage">Classic Rust 🎞️</option>
                      <option value="neon">Cosmic Cyber 🔮</option>
                    </select>
                  </div>
                </div>

                {/* The Interactive Interactive Interactive Canvas container */}
                <div className="relative w-full aspect-square rounded-xl bg-[#0e0e11] border border-zinc-800 overflow-hidden group">
                  
                  {/* Subtle simulated lighting source overlay */}
                  <div 
                    className="absolute inset-0 pointer-events-none transition-opacity duration-300"
                    style={{
                      mixBlendMode: "screen",
                      background: `radial-gradient(circle at 50% 20%, rgba(255,253,240,${glowIntensity/200}) 0%, transparent 70%)`
                    }}
                  />

                  {/* Rendering loader if analyzing */}
                  {(isAnalyzing || isEditingImage) && (
                    <div className="absolute inset-0 bg-zinc-950/95 backdrop-blur-sm flex flex-col items-center justify-center text-center p-6 z-30 animate-fade-in">
                      <div className="w-16 h-16 rounded-full bg-amber-500/10 flex items-center justify-center mb-4 relative">
                        <Loader2 className="w-8 h-8 text-amber-400 animate-spin" />
                        <Sparkles className="w-4 h-4 text-amber-500 absolute top-2 right-2 animate-bounce" />
                      </div>
                      <span className="text-amber-400 text-sm font-bold block mb-1">سمارت روز يقوم بطلاء المشهد الفخم</span>
                      <p className="text-[11px] text-zinc-500 max-w-sm">يبحث في تركيب الزجاج وتدرج الألوان، ويصقل تداخل السطح العاكس لجعل الصورة جاهزة للنشر الفوري...</p>
                    </div>
                  )}

                  {/* Simulated Image Compare Slider layout */}
                  <div className="relative w-full h-full overflow-hidden flex items-center justify-center">
                    
                    {/* The Processed Master Image */}
                    <img
                      src={imageResultUrl}
                      alt="Product output"
                      className="w-full h-full object-cover transition-all"
                      style={{ filter: getFilterStyle() }}
                    />

                    {/* Draggable & Floating Sticker overlays rendering */}
                    {stickers.map((st) => (
                      <div
                        key={st.id}
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedStickerId(st.id);
                        }}
                        style={{
                          left: `${st.positionX}%`,
                          top: `${st.positionY}%`,
                          backgroundColor: st.color,
                          color: st.textColor,
                          width: `${st.size}px`,
                          transform: "translate(-50%, -50%)",
                          borderRadius: st.borderRadius,
                        }}
                        className={`absolute p-2 flex items-center justify-center text-center cursor-move text-xs font-bold leading-tight select-none shadow-lg border transition-all ${
                          selectedStickerId === st.id 
                            ? "ring-2 ring-white scale-102 border-white z-20" 
                            : "border-transparent opacity-90 hover:opacity-100 hover:scale-101 z-10"
                        }`}
                      >
                        <span className="truncate block w-full">{st.text}</span>
                        {selectedStickerId === st.id && (
                          <div className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-red-600 text-white rounded-full flex items-center justify-center cursor-pointer text-[10px]" onClick={() => removeSticker(st.id)}>
                            ×
                          </div>
                        )}
                      </div>
                    ))}

                  </div>

                </div>

                {/* Image adjustment sliders */}
                <div className="bg-zinc-900/60 p-4 rounded-xl border border-zinc-800/80 flex flex-col gap-3">
                  <div className="flex items-center justify-between text-xs font-semibold text-zinc-400 border-b border-zinc-800/40 pb-2">
                    <span className="flex items-center gap-1.5">
                      <Sliders className="w-3.5 h-3.5 text-zinc-400" />
                      تحكم الإضاءة والتحسينات المادية
                    </span>
                    <button 
                      onClick={() => {
                        setBrightness(100);
                        setContrast(100);
                        setGlowIntensity(20);
                        setAppliedFilter("none");
                        playSynthNote();
                      }}
                      className="text-amber-500 hover:text-amber-400 text-[10px] cursor-pointer"
                    >
                      إعادة تعيين الاصل
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="flex flex-col gap-1">
                      <div className="flex justify-between text-[11px] text-zinc-400">
                        <span>شدة السطوع</span>
                        <span className="font-mono text-zinc-200">{brightness}%</span>
                      </div>
                      <input 
                        type="range" 
                        min="70" 
                        max="140" 
                        value={brightness}
                        onChange={(e) => setBrightness(Number(e.target.value))}
                        className="w-full h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-amber-500" 
                      />
                    </div>

                    <div className="flex flex-col gap-1">
                      <div className="flex justify-between text-[11px] text-zinc-400">
                        <span>التباين اللوني</span>
                        <span className="font-mono text-zinc-200">{contrast}%</span>
                      </div>
                      <input 
                        type="range" 
                        min="70" 
                        max="140" 
                        value={contrast}
                        onChange={(e) => setContrast(Number(e.target.value))}
                        className="w-full h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-amber-500" 
                      />
                    </div>

                    <div className="flex flex-col gap-1">
                      <div className="flex justify-between text-[11px] text-zinc-400">
                        <span>وهج الاستوديو</span>
                        <span className="font-mono text-zinc-200">{glowIntensity}%</span>
                      </div>
                      <input 
                        type="range" 
                        min="0" 
                        max="80" 
                        value={glowIntensity}
                        onChange={(e) => setGlowIntensity(Number(e.target.value))}
                        className="w-full h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-amber-500" 
                      />
                    </div>
                  </div>
                </div>

                {/* Download option */}
                <div className="flex items-center justify-between mt-1">
                  <span className="text-[10px] text-zinc-500">تم رندرتها برعاية سمارت روز بدقة 8K فائقة الجمال</span>
                  <button
                    onClick={handleDownloadOutput}
                    className="flex items-center gap-1.5 text-xs bg-zinc-900 hover:bg-zinc-800 border border-zinc-700/60 hover:border-zinc-600 px-4 py-2 rounded-xl text-zinc-200 transition-all cursor-pointer font-bold"
                  >
                    <Download className="w-3.5 h-3.5 text-amber-400" />
                    <span>تنزيل الصورة المُصممة</span>
                  </button>
                </div>

              </div>

              {/* Box 4: Interactive Custom Decals adding box */}
              <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-5 flex flex-col gap-4">
                <div className="flex items-center justify-between border-b border-zinc-800/80 pb-2.5">
                  <div className="flex items-center gap-2">
                    <Tag className="w-4 h-4 text-amber-500" />
                    <span className="font-bold text-xs text-zinc-100">إضافة ملصقات هولوغرافية على المنتج</span>
                  </div>
                  <span className="text-[10px] text-zinc-500">حرّك الملصقات بأصبعك أو الماوس</span>
                </div>

                <div className="flex gap-2">
                  <input
                    type="text"
                    value={newStickerText}
                    onChange={(e) => setNewStickerText(e.target.value)}
                    placeholder="مثال: خصم 30%، طبيعي، عرض ذهبي"
                    className="flex-1 bg-zinc-900 text-xs border border-zinc-800 rounded-xl px-3 py-2 focus:outline-none focus:ring-1 focus:ring-amber-500 placeholder:text-zinc-600 text-zinc-200"
                    onKeyDown={(e) => {
                      if (e.key === "Enter") addSticker();
                    }}
                  />
                  <button
                    onClick={addSticker}
                    className="bg-amber-500 text-zinc-950 font-bold text-xs p-2.5 px-4 rounded-xl flex items-center gap-1.5 hover:bg-amber-400 transition-all cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>إرسال وتثبيت</span>
                  </button>
                </div>

                {/* Sticker controllers if edit selected */}
                {activeSticker ? (
                  <div className="bg-zinc-900/45 p-3 rounded-xl border border-zinc-800/80 flex flex-col gap-3">
                    <div className="flex items-center justify-between text-[11px] text-zinc-300 font-semibold mb-1">
                      <span>التحكم بموقع وحجم الملصق: <strong className="text-amber-400">{activeSticker.text}</strong></span>
                      <button onClick={() => removeSticker(activeSticker.id)} className="text-red-400 hover:text-red-300 flex items-center gap-0.5 cursor-pointer">
                        <Trash2 className="w-3 h-3" />
                        إزالة
                      </button>
                    </div>

                    <div className="grid grid-cols-2 gap-3 text-[10px]">
                      <div className="flex flex-col gap-1">
                        <span className="text-zinc-500">موقع أفقي (X)</span>
                        <input
                          type="range"
                          min="0"
                          max="85"
                          value={activeSticker.positionX}
                          onChange={(e) => adjustStickerPosition("x", Number(e.target.value))}
                          className="w-full accent-amber-500"
                        />
                      </div>
                      <div className="flex flex-col gap-1">
                        <span className="text-zinc-500">موقع عمودي (Y)</span>
                        <input
                          type="range"
                          min="0"
                          max="85"
                          value={activeSticker.positionY}
                          onChange={(e) => adjustStickerPosition("y", Number(e.target.value))}
                          className="w-full accent-amber-500"
                        />
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 mt-1 pt-2 border-t border-zinc-800/50">
                      <div className="flex items-center gap-1.5 text-[10px] text-zinc-400">
                        <span>نوع الحواف:</span>
                        <button 
                          onClick={() => adjustStickerStyle(activeSticker.id, { borderRadius: "0px" })}
                          className={`px-2 py-0.5 rounded border border-zinc-700 font-mono text-[9px] cursor-pointer ${activeSticker.borderRadius === "0px" ? "bg-amber-500/10 text-amber-400 border-amber-500" : ""}`}
                        >
                          حاد
                        </button>
                        <button 
                          onClick={() => adjustStickerStyle(activeSticker.id, { borderRadius: "8px" })}
                          className={`px-2 py-0.5 rounded border border-zinc-700 font-mono text-[9px] cursor-pointer ${activeSticker.borderRadius === "8px" ? "bg-amber-500/10 text-amber-400 border-amber-500" : ""}`}
                        >
                          مستدير متوسط
                        </button>
                        <button 
                          onClick={() => adjustStickerStyle(activeSticker.id, { borderRadius: "9999px" })}
                          className={`px-2 py-0.5 rounded border border-zinc-700 font-mono text-[9px] cursor-pointer ${activeSticker.borderRadius === "9999px" ? "bg-amber-500/10 text-amber-400 border-amber-500" : ""}`}
                        >
                          بيضاوي
                        </button>
                      </div>

                      <div className="flex items-center gap-1.5 text-[10px] text-zinc-400">
                        <span>اللون:</span>
                        <div className="flex gap-1">
                          {["#E5C158", "#2E7D32", "#FF007F", "#111112", "#00F0FF", "#E11D48"].map(col => (
                            <button
                              key={col}
                              onClick={() => adjustStickerStyle(activeSticker.id, { color: col, textColor: col === "#111112" ? "#ffffff" : "#111112" })}
                              style={{ backgroundColor: col }}
                              className={`w-4 h-4 rounded-full border border-zinc-700 cursor-pointer ${activeSticker.color === col ? "ring-2 ring-white" : ""}`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>

                  </div>
                ) : (
                  <p className="text-[10px] text-zinc-500 text-center">اضغط على أي ملصق حالي فوق صورة المنتج لتعديل حجمه وتفاصيله ولونه.</p>
                )}

              </div>

            </div>

            {/* RIGHT AREA: Computed Identity Report (3 Columns) */}
            <div className="lg:col-span-3 flex flex-col gap-6">
              
              {/* Box 5: Computed Identity Details */}
              <div id="identity-report-display" className="bg-zinc-950 border border-zinc-800 rounded-2xl p-5 flex flex-col gap-4 relative">
                
                <div className="absolute top-0 left-0 w-24 h-24 bg-amber-500/5 blur-2xl rounded-full" />

                <div className="flex items-center gap-2 border-b border-zinc-800/80 pb-3">
                  <Award className="w-4.5 h-4.5 text-amber-500" />
                  <h3 className="font-bold text-sm text-zinc-100">تحليل الهوية البصرية الصادر</h3>
                </div>

                {/* Slogan segment */}
                <div className="flex flex-col gap-1.5">
                  <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider block">شريان التسويق والشعار المبتكر</span>
                  <div className="bg-gradient-to-r from-amber-500/10 to-amber-600/5 hover:to-amber-500/10 border border-amber-500/20 p-3 rounded-xl">
                    <span className="text-xs text-zinc-400 block mb-0.5">سمارت روز يقترح:</span>
                    <strong className="text-sm text-amber-300 text-gold-glow font-bold block">{analysisResult.slogan}</strong>
                  </div>
                </div>

                {/* Slogan Theme Name */}
                <div className="grid grid-cols-2 gap-2 text-[11px] bg-zinc-900/60 p-2.5 rounded-xl border border-zinc-800/50">
                  <div>
                    <span className="text-zinc-500 text-[9px] block">اسم الثيم الفني:</span>
                    <span className="text-zinc-200 font-bold">{analysisResult.brandThemeName}</span>
                  </div>
                  <div>
                    <span className="text-zinc-500 text-[9px] block">تصنيف الصناعة:</span>
                    <span className="text-zinc-200 font-bold">{analysisResult.category || "منتج عام"}</span>
                  </div>
                </div>

                {/* Color Palette Display */}
                <div className="flex flex-col gap-2">
                  <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider block">لوحة ألوان الهوية البصرية المعمّدة</span>
                  
                  <div className="flex flex-col gap-2">
                    {analysisResult.brandIdentity.colors.map((color, idx) => (
                      <div 
                        key={idx} 
                        className="flex items-center justify-between p-2 rounded-xl bg-zinc-900/80 border border-zinc-800/60 text-xs hover:bg-zinc-900 transition-all"
                      >
                        <div className="flex items-center gap-2">
                          <div 
                            style={{ backgroundColor: color.hex }}
                            className="w-6 h-6 rounded-lg pointer-events-none border border-zinc-700 shadow-sm"
                          />
                          <div>
                            <span className="font-bold block text-zinc-200 text-[11px]">{color.name}</span>
                            <span className="text-[9px] text-zinc-500 font-mono lowercase">{color.hex}</span>
                          </div>
                        </div>
                        <span className={`text-[8.5px] px-1.5 py-0.5 rounded font-bold uppercase ${
                          color.type === 'primary' 
                            ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20' 
                            : color.type === 'secondary'
                            ? 'bg-zinc-700/20 text-zinc-300 border border-zinc-700/30'
                            : 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20'
                        }`}>
                          {color.type === 'primary' ? 'رئيسي' : color.type === 'secondary' ? 'ثانوي' : 'تأكيدي'}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Strengths indicators list */}
                <div className="flex flex-col gap-2">
                  <span className="text-[10px] text-zinc-500 font-bold tracking-wider block uppercase">نقاط القوة الجمالية للمنتج</span>
                  <div className="flex flex-col gap-2">
                    {analysisResult.aestheticStrengths.map((str, idx) => (
                      <div key={idx} className="flex gap-2 p-2 bg-zinc-900/30 border border-zinc-900 rounded-xl text-right text-[11px] text-zinc-300">
                        <span className="text-amber-500 font-bold flex-shrink-0">✓</span>
                        <p className="leading-normal">{str}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Ideal edits block summarized */}
                <div className="flex flex-col gap-2 pt-2 border-t border-zinc-800/50">
                  <span className="text-[10px] text-zinc-500 font-bold block uppercase">عوامل ضبط الرندر الإعلاني الذكي</span>
                  <div className="flex flex-col gap-1.5 text-[11px] text-zinc-400">
                    {analysisResult.suggestedEdits.map((edit, idx) => (
                      <div key={idx} className="flex flex-col gap-0.5 p-2 bg-zinc-900/50 rounded-lg">
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-zinc-300 text-[10px]">{edit.label}</span>
                          <span className="text-[9px] text-[#E5C158] font-mono select-all bg-amber-500/5 px-1 rounded">{edit.suggestedValue}</span>
                        </div>
                        <p className="text-[10px] text-zinc-500 leading-tight">{edit.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

            </div>

          </div>
        )}

        {/* Tab 2: Promo Video Storyboard & simulator (30 Seconds) */}
        {activeTab === "storyboard" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            
            {/* L PLAYER COLUMN: The 30S Interactive Simulator Video Player (7 Columns) */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              
              {/* Box 6: Simulated Movie Player Interface */}
              <div id="movie-simulator-container" className="bg-zinc-950 border border-zinc-800 rounded-2xl p-5 flex flex-col gap-4 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-zinc-800/10 blur-3xl pointer-events-none" />

                <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                  <div className="flex items-center gap-2">
                    <Video className="w-5 h-5 text-amber-500" />
                    <div>
                      <h4 className="font-bold text-sm text-zinc-100">محاكي الفيديو الترويجي الذكي (30 ثانية)</h4>
                      <p className="text-[10px] text-zinc-500">تم إنشاؤه ليتوافق مع أبعاد إنتاج الميديا الاحترافي</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    {/* Audio sound trigger enable/disable */}
                    <button
                      onClick={() => {
                        setSoundEnabled(!soundEnabled);
                        playSynthNote();
                      }}
                      className="p-1.5 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 rounded-lg text-zinc-400 hover:text-zinc-200 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      {soundEnabled ? (
                        <>
                          <Volume2 className="w-3.5 h-3.5 text-amber-400" />
                          <span className="text-[10px] font-medium">الصوت التوليدي: مفعّل</span>
                        </>
                      ) : (
                        <>
                          <VolumeX className="w-3.5 h-3.5 text-zinc-500" />
                          <span className="text-[10px] font-medium text-zinc-500">الصوت التوليدي: صامت</span>
                        </>
                      )}
                    </button>
                    
                    <span className="text-[10px] bg-red-500/15 text-red-400 border border-red-500/20 px-2.5 py-0.5 rounded-full font-bold animate-pulse">
                      ● تجريبي فوري
                    </span>
                  </div>
                </div>

                {/* THE SIMULATOR MONITOR VIEWPORT */}
                <div className="relative w-full aspect-video rounded-xl bg-black border border-zinc-800 overflow-hidden group">
                  
                  {/* Subtle video artifacts scanlines, shadow vignette around camera */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.85)_100%)] pointer-events-none z-10" />
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_4px,6px_100%] pointer-events-none opacity-40 z-10" />

                  {/* Active scene rendering with elegant cinematic backings */}
                  <div className="absolute inset-0 flex items-center justify-center text-center animate-pulse">
                    
                    {/* Dynamic atmospheric color wash matching active theme in background */}
                    <div 
                      className="absolute inset-0 transition-all duration-700" 
                      style={{
                        background: `radial-gradient(circle, ${
                          selectedPreset.id === 'royal_perfume' 
                            ? 'rgba(212,175,55,0.18)' 
                            : selectedPreset.id === 'organic_elixir'
                            ? 'rgba(46,125,50,0.18)'
                            : 'rgba(255,0,127,0.18)'
                        } 0%, transparent 80%)`
                      }}
                    />

                    {/* Sliding zoom image of simulated video product render */}
                    <img
                      src={imageResultUrl}
                      alt="Product promo showcase video"
                      className={`w-64 h-64 object-contain transition-transform duration-[3000ms] ${isPlayingVideo ? 'scale-110 rotate-1' : 'scale-100'}`}
                    />

                  </div>

                  {/* Top Hud Overlay info (00:XX of 30S) */}
                  <div className="absolute top-4 left-4 right-4 z-20 flex justify-between items-center text-[10px] text-zinc-400 font-mono bg-zinc-950/80 p-2.5 rounded-lg border border-zinc-800/80">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-amber-500" />
                      <span>زمن البث:</span>
                      <strong className="text-zinc-200">00:{Math.floor((videoProgress / 100) * 30).toString().padStart(2, "0")} / 00:30</strong>
                    </span>
                    <span>اللقطة: <strong className="text-amber-400">#{activeVideoSceneIdx + 1}/5</strong></span>
                    <span>المشهد: <strong className="text-zinc-200">{analysisResult.brandThemeName}</strong></span>
                  </div>

                  {/* Huge Animated Subtitles overlay at video bottom (persuasive Arabic overlay) */}
                  <div className="absolute bottom-6 left-4 right-4 z-20 text-center">
                    <div className="inline-block bg-zinc-950/90 border border-zinc-800 px-4 py-2 rounded-xl max-w-lg shadow-xl shadow-black/80">
                      <span className="text-[10px] text-amber-400 font-bold uppercase block mb-1">التعليق النصي (Overlay) 📺</span>
                      <p className="text-sm tracking-wide text-white font-bold leading-relaxed">{analysisResult.videoStoryboard[activeVideoSceneIdx]?.textOverlay}</p>
                    </div>
                  </div>

                  {/* Play state controller floating button */}
                  {!isPlayingVideo && (
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center z-10 transition-opacity">
                      <button 
                        onClick={() => {
                          setIsPlayingVideo(true);
                          playSynthNote();
                        }}
                        className="w-16 h-16 rounded-full bg-amber-500 hover:bg-amber-400 text-zinc-950 flex items-center justify-center shadow-lg shadow-amber-500/20 cursor-pointer active:scale-95 transition-all"
                      >
                        <Play className="w-7 h-7 fill-current translate-x-[-1px]" />
                      </button>
                    </div>
                  )}

                </div>

                {/* TIMELINE PROGRESS & DIRECT CONTROLLERS */}
                <div className="flex flex-col gap-3 pt-2">
                  
                  {/* Timeline Scrubber visual representation */}
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => {
                        setIsPlayingVideo(!isPlayingVideo);
                        playSynthNote();
                      }}
                      className="p-3 bg-amber-500 hover:bg-amber-400 text-zinc-950 rounded-xl transition-all cursor-pointer shadow shadow-amber-500/10"
                    >
                      {isPlayingVideo ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current" />}
                    </button>

                    <div className="flex-1 bg-zinc-900 border border-zinc-800 h-6.5 rounded-xl px-1.5 flex items-center relative group">
                      {/* Timeline progression indicators */}
                      <div 
                        style={{ width: `${videoProgress}%` }}
                        className="h-3.5 bg-gradient-to-r from-amber-600 via-amber-500 to-amber-400 rounded-lg shadow-sm shadow-amber-500/20 transition-all duration-300"
                      />
                      
                      {/* Interactive Time marks */}
                      <div className="absolute inset-0 flex justify-between px-3 items-center pointer-events-none text-[8.5px] text-zinc-500 font-mono font-bold">
                        <span>00:00</span>
                        <span>00:06</span>
                        <span>00:12</span>
                        <span>00:18</span>
                        <span>00:24</span>
                        <span>00:30</span>
                      </div>
                    </div>
                  </div>

                  {/* Storyboard active notes summary */}
                  <div className="bg-zinc-900/60 p-4 rounded-xl border border-zinc-800/80 flex flex-col gap-2">
                    <span className="text-[10px] text-zinc-500 font-bold block">مساعد الإلقاء والتعليق الصوتي النشط (Voiceover) 🎙️</span>
                    <blockquote className="text-zinc-200 text-xs italic quote leading-relaxed border-r-3 border-amber-500 pr-3.5 py-1">
                      {analysisResult.videoStoryboard[activeVideoSceneIdx]?.voiceover || "لا يوجد نص متاح حالياً."}
                    </blockquote>
                    <div className="flex justify-between text-[10px] text-zinc-500 mt-1">
                      <span>الأثر الصوتي للأذن: <strong className="text-zinc-300">{analysisResult.videoStoryboard[activeVideoSceneIdx]?.soundEffects}</strong></span>
                      <span>طابع الساوندتراك المقترح: <strong className="text-amber-400">{analysisResult.recommendedMusicStyle}</strong></span>
                    </div>
                  </div>

                </div>

              </div>

            </div>

            {/* R COLUMN: Interactive List of all storyboard scenes (5 Columns) */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              
              {/* Box 7: Scene Cards details */}
              <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-5 flex flex-col gap-3">
                <div className="flex items-center justify-between border-b border-zinc-800 pb-2.5">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4.5 h-4.5 text-amber-500" />
                    <span className="font-bold text-xs text-zinc-100">تفاصيل المشاهد الخمسة (30 ثانية)</span>
                  </div>
                  <span className="text-[10px] text-zinc-500">مقسم بالتساوي لتسويق مثالي</span>
                </div>

                <div className="flex flex-col gap-3 max-h-[500px] overflow-y-auto pr-1">
                  {analysisResult.videoStoryboard.map((scene, idx) => (
                    <div
                      key={scene.sceneNumber}
                      onClick={() => {
                        setActiveVideoSceneIdx(idx);
                        setVideoProgress(idx * 20); // Sync progression to scene start
                        playSynthNote();
                      }}
                      className={`p-3.5 rounded-xl border transition-all text-right cursor-pointer relative group ${
                        activeVideoSceneIdx === idx 
                          ? "border-amber-500 bg-amber-500/5 shadow-md shadow-amber-500/5" 
                          : "border-zinc-800/70 bg-zinc-900/30 hover:border-zinc-700 hover:bg-zinc-900/50"
                      }`}
                    >
                      {/* Left timeline bubble tag */}
                      <span className="absolute top-3.5 left-3.5 text-[10px] font-mono bg-zinc-800/80 border border-zinc-700/60 text-zinc-300 px-2 py-0.5 rounded-md font-bold">
                        {scene.timeRange}
                      </span>

                      <div className="flex items-center gap-2 mb-1.5">
                        <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                          activeVideoSceneIdx === idx 
                            ? "bg-amber-500 text-zinc-950" 
                            : "bg-zinc-800 text-zinc-400 group-hover:bg-zinc-700"
                        }`}>
                          {scene.sceneNumber}
                        </span>
                        <h5 className="font-bold text-xs text-zinc-100">المشهد #{scene.sceneNumber}</h5>
                      </div>

                      <div className="flex flex-col gap-1.5 text-[11px] text-zinc-400">
                        <p className="leading-normal"><strong className="text-zinc-300">اللقطة البصرية:</strong> {scene.visuals}</p>
                        <div className="grid grid-cols-2 gap-2 mt-1 pt-1.5 border-t border-zinc-800/40 text-[10px]">
                          <div>
                            <span className="text-zinc-500 block mb-0.5">النص المعروض (Overlay):</span>
                            <span className="text-zinc-300">{scene.textOverlay}</span>
                          </div>
                          <div>
                            <span className="text-zinc-500 block mb-0.5">المؤثر الصوتي (SFX):</span>
                            <span className="text-zinc-300">{scene.soundEffects}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-3 bg-zinc-900/40 rounded-xl border border-zinc-800 text-center text-xs text-zinc-500">
                  <span className="text-amber-500 font-bold">نصيحة سمارت روز الذكي 💡:</span> استخدام هذا المخطط الإعلاني لإنتاج فيديوهات ريلز أو تيك توك يحقق انتشاراً بصرياً أعلى بنسبة 45%.
                </div>

              </div>

            </div>

          </div>
        )}

        {/* Tab 3: Inspiration gallery and user manual */}
        {activeTab === "gallery" && (
          <div className="flex flex-col gap-6">
            
            {/* Gallery intro banner */}
            <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/5 via-transparent to-transparent pointer-events-none" />
              <div className="max-w-3xl">
                <h3 className="text-xl font-bold bg-gradient-to-r from-amber-400 to-amber-200 bg-clip-text text-transparent mb-2">
                  دليل إلهام ومميزات روبوت التصميم ذو الأبعاد الذكية
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  سمارت روز (Smart Roz) صُمم كبيئة عمل فارهة مبنية على عقل المهندس والرسام البصري المحترف. يهدف التطبيق لمساعدة رواد الأعمال والمصممين المستقلين في تقصير زمن بناء الهويات البصرية والاعلام من أيام طوال إلى بضع ثوانٍ.
                </p>
              </div>
            </div>

            {/* Gallery Grid item list for visual showman */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div className="bg-zinc-950 border border-zinc-800 rounded-2xl overflow-hidden flex flex-col hover:border-zinc-700 transition-all">
                <div className="relative aspect-video bg-zinc-900">
                  <img src="https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover" />
                  <div className="absolute bottom-3 right-3 bg-zinc-950/80 px-2 py-1 rounded text-[10px] border border-zinc-800 font-semibold text-amber-500">الأصل</div>
                </div>
                <div className="p-5 flex-1 flex flex-col gap-2">
                  <h4 className="font-bold text-sm text-zinc-100">هوية العطور الفاخرة المطفية</h4>
                  <p className="text-xs text-zinc-400 leading-normal flex-1">
                    تركز الهوية على النقاء الملكي، والضوء المسلط الخافت، من أجل إبراز تركيز العطر وهيبة الزجاجة والذهب المصقول.
                  </p>
                  <span className="text-[10px] bg-amber-500/10 text-amber-500 border border-amber-500/15 py-1 px-3.5 rounded-lg font-bold self-start mt-2">
                    عرض المخطط والهوية
                  </span>
                </div>
              </div>

              <div className="bg-zinc-950 border border-zinc-800 rounded-2xl overflow-hidden flex flex-col hover:border-zinc-700 transition-all">
                <div className="relative aspect-video bg-zinc-900">
                  <img src="https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover" />
                  <div className="absolute bottom-3 right-3 bg-zinc-950/80 px-2 py-1 rounded text-[10px] border border-zinc-800 font-semibold text-amber-500">الأصل</div>
                </div>
                <div className="p-5 flex-1 flex flex-col gap-2">
                  <h4 className="font-bold text-sm text-zinc-100">هوية العناية العضوية والنقاء المنعش</h4>
                  <p className="text-xs text-zinc-400 leading-normal flex-1">
                    ترمز الواحة الطبيعية الخضراء إلى المصداقية التامة وخيار القطرة الطبية الموثوقة المحاطة بأوراق النعناع وصباح الغابات.
                  </p>
                  <span className="text-[10px] bg-amber-500/10 text-amber-500 border border-amber-500/15 py-1 px-3.5 rounded-lg font-bold self-start mt-2">
                    عرض المخطط والهوية
                  </span>
                </div>
              </div>

              <div className="bg-zinc-950 border border-zinc-800 rounded-2xl overflow-hidden flex flex-col hover:border-zinc-700 transition-all">
                <div className="relative aspect-video bg-zinc-900">
                  <img src="https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover" />
                  <div className="absolute bottom-3 right-3 bg-zinc-950/80 px-2 py-1 rounded text-[10px] border border-zinc-800 font-semibold text-amber-500">الأصل</div>
                </div>
                <div className="p-5 flex-1 flex flex-col gap-2">
                  <h4 className="font-bold text-sm text-zinc-100">هوية السايبر و الأدرينالين للاعبين</h4>
                  <p className="text-xs text-zinc-400 leading-normal flex-1">
                    ألوان جريئة تخطف عقول المراهقين من وهلة واحدة بفضل التباعد الساطع لليزر الوردي والسماوي مع صواعق البرودة الفائقة.
                  </p>
                  <span className="text-[10px] bg-amber-500/10 text-amber-500 border border-amber-500/15 py-1 px-3.5 rounded-lg font-bold self-start mt-2">
                    عرض المخطط والهوية
                  </span>
                </div>
              </div>

            </div>

          </div>
        )}

      </main>

      {/* Modern Page Margins Footer */}
      <footer className="mt-16 border-t border-zinc-850 bg-zinc-950 py-8 text-center text-zinc-500 text-xs">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© 2026 روبوت الذكاء الاصطناعي Smart Roz. جميع الحقوق الفنية محفوظة لخدمة ريادة الأعمال.</p>
          <div className="flex gap-4 text-zinc-400">
            <span className="hover:text-amber-400 cursor-pointer transition-colors" onClick={() => handleSelectPreset(PRESET_PRODUCTS[0])}>عطر روج</span>
            <span className="hover:text-amber-400 cursor-pointer transition-colors" onClick={() => handleSelectPreset(PRESET_PRODUCTS[1])}>إكسير طبيعي</span>
            <span className="hover:text-amber-400 cursor-pointer transition-colors" onClick={() => handleSelectPreset(PRESET_PRODUCTS[2])}>سايبر بنك</span>
          </div>
        </div>
      </footer>

    </div>
  );
}

