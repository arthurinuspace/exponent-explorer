# 指數探險家 (Exponent Explorer) 🚀

一個專為小學生設計的互動式數學網頁應用程式，透過視覺化工具、遊戲和 AI 導師，讓孩子輕鬆理解「指數」與「指數律」的奧秘。

![App Preview](https://via.placeholder.com/800x400?text=Exponent+Explorer+Preview)

## ✨ 特色功能

1.  **🔢 基礎觀念 (Basics)**：
    *   互動式滑桿調整底數與指數。
    *   即時視覺化點點圖，展示數量如何隨指數爆炸性增長。
    *   生活化解說（細菌分裂、細胞增生）。

2.  **➗ 指數律實驗室 (Rule Playground)**：
    *   **乘法規則**：視覺化展示 $a^m \times a^n = a^{m+n}$。
    *   **除法規則**：視覺化展示 $a^m \div a^n = a^{m-n}$ 的消去過程。
    *   **次方規則**：展示 $(a^m)^n$ 的分組概念。

3.  **📈 生長圖表 (Growth Graph)**：
    *   使用圖表對比「線性成長」與「指數成長」的巨大差異。
    *   讓學生親眼見證什麼是「爆炸性成長」。

4.  **🎮 挑戰遊戲 (Quiz Game)**：
    *   遊戲化的測驗系統，即時回饋與詳細解說。
    *   累積積分，獲得成就感。

5.  **😺 數數貓家教 (AI Tutor)**：
    *   整合 **Google Gemini 2.5 Flash** 模型。
    *   專屬角色「數數貓」，用活潑可愛的語氣回答數學問題。
    *   引導式學習，鼓勵學生發問。

## 🛠️ 技術架構

本專案使用現代前端技術構建：

*   **核心框架**: [React 19](https://react.dev/)
*   **樣式庫**: [Tailwind CSS](https://tailwindcss.com/)
*   **圖表庫**: [Recharts](https://recharts.org/)
*   **AI 模型**: [Google Gemini API](https://ai.google.dev/) (@google/genai)
*   **圖示庫**: [Lucide React](https://lucide.dev/)

## 🚀 如何執行

由於本專案使用 ES Modules 與 Import Maps，您可以直接透過靜態伺服器執行，或使用開發工具。

### 1. 設定 API Key
本專案需要 Google Gemini API Key 才能使用 AI 家教功能。
請確保環境變數 `API_KEY` 已設定。

### 2. 啟動專案
如果您在本地開發，可以使用 VS Code 的 Live Server 或透過 Node.js：

```bash
npx serve .
```

## 📚 學習目標

*   理解底數 (Base) 與指數 (Exponent) 的定義。
*   熟悉指數律的三大基本規則（乘法、除法、次方再次方）。
*   理解 $a^0 = 1$ 的概念。
*   體驗指數成長的速度。

## 📄 授權

MIT License
