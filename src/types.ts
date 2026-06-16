export interface ColorPaletteItem {
  name: string;
  hex: string;
  type: "primary" | "secondary" | "accent";
}

export interface BrandTypography {
  titleFont: string;
  bodyFont: string;
  arabicFriendly: boolean;
}

export interface BrandIdentity {
  colors: ColorPaletteItem[];
  typography: BrandTypography;
  brandTone: string;
}

export interface SuggestedEdit {
  label: string;
  description: string;
  suggestedValue: string;
}

export interface VideoScene {
  sceneNumber: number;
  timeRange: string;
  visuals: string;
  textOverlay: string;
  voiceover: string;
  soundEffects: string;
}

export interface SmartRozAnalysis {
  productName: string;
  category: string;
  aestheticStrengths: string[];
  slogan: string;
  brandThemeName: string;
  brandIdentity: BrandIdentity;
  suggestedEdits: SuggestedEdit[];
  videoStoryboard: VideoScene[];
  recommendedMusicStyle: string;
  aiPromptForEditing: string;
}

export interface ProductPreset {
  id: string;
  name: string;
  arabicName: string;
  category: string;
  originalImage: string;
  editedMock: string;
  description: string;
  defaultPrompt: string;
  defaultTheme: string;
  analysis: SmartRozAnalysis;
}

export interface StickerOverlay {
  id: string;
  text: string;
  color: string;
  textColor: string;
  positionX: number; // 0 to 100%
  positionY: number; // 0 to 100%
  size: number; // in px
  borderRadius: string;
  style: "classic" | "elegant" | "ribbon" | "badge";
}
