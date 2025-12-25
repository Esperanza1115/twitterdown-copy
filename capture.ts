// capture.ts
import { chromium } from "playwright";
import fs from "fs";

const url = process.argv[2];
if (!url) throw new Error("Missing URL");

(async () => {
  const browser = await chromium.launch({
    headless: true,
    proxy: { server: "http://192.168.201.151:7890" }
  });
  const page = await browser.newPage();

  await page.goto(url, { waitUntil: "networkidle" });

  const data = await page.evaluate(() => {
    const pick = (sel: string) => {
      const el = document.querySelector(sel);
      if (!el) return null;
      const s = getComputedStyle(el);
      return {
        html: el.outerHTML,
        styles: {
          display: s.display,
          position: s.position,
          fontFamily: s.fontFamily,
          fontSize: s.fontSize,
          fontWeight: s.fontWeight,
          lineHeight: s.lineHeight,
          color: s.color,
          background: s.backgroundColor,
          padding: s.padding,
          margin: s.margin,
          borderRadius: s.borderRadius,
          boxShadow: s.boxShadow,
        },
      };
    };

    return {
      title: document.title,
      viewport: {
        width: window.innerWidth,
        height: window.innerHeight,
      },
      header: pick("header"),
      main: pick("main"),
      footer: pick("footer"),
    };
  });

  fs.writeFileSync("page-data.json", JSON.stringify(data, null, 2));
  await page.screenshot({ path: "page.png", fullPage: true });

  await browser.close();
})();
