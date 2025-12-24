import Image from "next/image";
import Link from "next/link";

import styles from "./page.module.css";

const USED = {
  png: "/png/used-image.png",
  jpg: "/jpg/used-image.jpg",
  webp: "/webp/used-image.webp",
  gif: "/gif/used-video.gif",
  svg: "/svg/used-image.svg",
  mp4: "/mp4/used-video.mp4",
} as const;

export default function UnusedMediaCheckerUseCasesPage() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1>nextjs – Use Cases</h1>
        <p className={styles.note}>
          このページは <code>public</code>{" "}
          配下の素材を、検知されやすい参照パターンで “使用（used）”
          するためのサンプルです。素材ファイルは未配置でもOK（404でOK）です。
          <br />
          “未使用（unused）” を検証したい場合は、同じ拡張子フォルダ配下の{" "}
          <code>unused/</code>{" "}
          に素材を置いてください（このリポジトリ上では参照しません）。
        </p>
        <Link className={styles.backLink} href="/">
          ← Home に戻る
        </Link>
      </header>

      <section className={`${styles.section} used-global-bg`}>
        <h2>CSS（グローバルCSS + @import 連鎖 + url()）</h2>
        <div className={styles.grid}>
          <div className={`${styles.card} used-global-bg`}>
            <div className={styles.label}>
              route layout で import された global CSS
            </div>
            <div className={styles.path}>
              （例）
              <code>
                background-image: url(&quot;
                {"/png/used-global-bg.png"}&quot;)
              </code>
            </div>
            <div className={styles.thumb} />
          </div>
          <div className={`${styles.card} used-imported-css-bg`}>
            <div className={styles.label}>@import された nested CSS</div>
            <div className={styles.path}>
              （例）
              <code>
                background-image: url(&quot;
                {"/svg/used-imported-css-bg.svg"}&quot;)
              </code>
            </div>
            <div className={styles.thumb} />
          </div>
          <div className={`${styles.card} used-deeper-css-bg`}>
            <div className={styles.label}>さらに深い @import（deeper.css）</div>
            <div className={styles.path}>
              （例）
              <code>
                background-image: url(&quot;
                {"/webp/used-deeper-import.webp"}&quot;)
              </code>
            </div>
            <div className={styles.thumb} />
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2>next/image（文字列 src）</h2>
        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.label}>PNG / next/image</div>
            <div className={styles.path}>
              <code>{USED.png}</code>
            </div>
            <div className={styles.thumb}>
              <Image
                src={USED.png}
                alt="used png via next/image"
                width={320}
                height={180}
              />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2>HTML（img / picture+source(srcSet)）</h2>
        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.label}>JPG / img</div>
            <div className={styles.path}>
              <code>{USED.jpg}</code>
            </div>
            <div className={styles.thumb}>
              {/* biome-ignore lint/performance/noImgElement: 検知パターン検証のため、あえて <img> を使用 */}
              <img
                className={styles.media}
                src={USED.jpg}
                alt="used jpg via img"
              />
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.label}>SVG / img</div>
            <div className={styles.path}>
              <code>{USED.svg}</code>
            </div>
            <div className={styles.thumb}>
              {/* biome-ignore lint/performance/noImgElement: 検知パターン検証のため、あえて <img> を使用 */}
              <img
                className={styles.media}
                src={USED.svg}
                alt="used svg via img"
              />
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.label}>
              picture / source(srcSet)（WEBP→JPEG）
            </div>
            <div className={styles.path}>
              <code>{USED.webp}</code> / <code>{USED.jpg}</code>
            </div>
            <div className={styles.thumb}>
              <picture>
                <source srcSet={`${USED.webp} 1x`} type="image/webp" />
                <img
                  className={styles.media}
                  src={USED.jpg}
                  alt="used via picture/srcSet"
                />
              </picture>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.label}>GIF / img</div>
            <div className={styles.path}>
              <code>{USED.gif}</code>
            </div>
            <div className={styles.thumb}>
              {/* biome-ignore lint/performance/noImgElement: 検知パターン検証のため、あえて <img> を使用 */}
              <img
                className={styles.media}
                src={USED.gif}
                alt="used gif via img"
              />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2>CSS Modules（url() / mask-image）</h2>
        <div className={styles.grid}>
          <div className={`${styles.card} ${styles.usedModuleBgPng}`}>
            <div className={styles.label}>
              CSS Modules / background-image（PNG）
            </div>
            <div className={styles.path}>
              <code>{"/png/used-module-bg.png"}</code>
            </div>
            <div className={styles.thumb} />
          </div>

          <div className={`${styles.card} ${styles.usedModuleBgWebp}`}>
            <div className={styles.label}>
              CSS Modules / background-image（WEBP）
            </div>
            <div className={styles.path}>
              <code>{"/webp/used-module-bg.webp"}</code>
            </div>
            <div className={styles.thumb} />
          </div>

          <div className={`${styles.card} ${styles.usedModuleMaskSvg}`}>
            <div className={styles.label}>CSS Modules / mask-image（SVG）</div>
            <div className={styles.path}>
              <code>{"/svg/used-mask.svg"}</code>
            </div>
            <div className={styles.thumb}>
              <div className={styles.maskedBox} />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Inline Style（backgroundImage: url(...)）</h2>
        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.label}>inline background-image（JPG）</div>
            <div className={styles.path}>
              <code>{USED.jpg}</code>
            </div>
            <div
              className={`${styles.thumb} ${styles.inlineBg}`}
              style={{ backgroundImage: `url(${USED.jpg})` }}
            />
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2>video / audio（src と source）</h2>
        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.label}>video src（MP4）</div>
            <div className={styles.path}>
              <code>{USED.mp4}</code>
            </div>
            <div className={styles.thumb}>
              {/* biome-ignore lint/a11y/useMediaCaption: 検知パターン検証のため、captions 未配置でも lint を通す */}
              <video className={styles.media} controls src={USED.mp4} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
