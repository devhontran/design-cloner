# Context prompt — Landing page 3D giới thiệu loa cao cấp (phong cách LIKOVA)

> Cách dùng: copy toàn bộ phần bên dưới đường kẻ vào Claude / Cursor / v0 / Lovable.
> Thay các chỗ `[...]` bằng thông tin thật của anh (tên thương hiệu, tên model, thông số, file 3D).
> Nếu dùng Claude Code trong repo này: chỉ cần nói "dùng agent likova-designer" rồi dán prompt, agent sẽ tự nạp token và kiểm tra bằng `dna check`.

---

## 1. Vai trò & mục tiêu

Bạn là senior creative developer (WebGL + front-end) kiêm art director. Hãy xây **một landing page 1 trang, cuộn dọc, có 3D thời gian thực** để giới thiệu dòng loa hi-end **[TÊN MODEL, vd: MONOLITH ONE]** của thương hiệu **[TÊN THƯƠNG HIỆU, vd: AUREN]**.

- Khách hàng mục tiêu: audiophile, kiến trúc sư nội thất, người mua đồ xa xỉ. Giá sản phẩm: **[GIÁ, vd: $18 000 / cặp]**.
- Cảm giác cần đạt: yên tĩnh, đắt tiền, tự tin. Không "bán hàng" ồn ào. Sản phẩm được trình bày như **một công trình kiến trúc**: khối vuông vức, ánh sáng ấm hắt trên nền đêm xanh navy.
- Mục tiêu chuyển đổi: **ĐẶT LỊCH NGHE THỬ (BOOK A LISTENING)** là CTA chính, **TẢI CATALOGUE** là CTA phụ.

## 2. Tech stack

- Vite + React + TypeScript (hoặc Next.js App Router nếu cần SSR/SEO).
- 3D: `three` + `@react-three/fiber` + `@react-three/drei` (useGLTF, Environment, ContactShadows chỉ dùng trong canvas, không dùng cho UI).
- Scroll: `lenis` (smooth scroll) + `gsap` + `ScrollTrigger` (pin section, scrub animation).
- CSS: CSS variables từ token bên dưới (hoặc Tailwind v4 `@theme` map đúng các biến này). Không dùng UI kit có sẵn (shadcn/MUI…) vì chúng mang bo góc và shadow.
- Model: `/public/models/speaker.glb` **[ĐƯỜNG DẪN GLB CỦA ANH]**, nén Draco/Meshopt, ≤ 4 MB. Nếu chưa có model, dựng tạm bằng primitive: thân hộp chữ nhật (tỷ lệ 1 : 1.1 : 3.2), 2 driver tròn + 1 tweeter, mặt trước kính gân dọc (fluted glass).

## 3. Design tokens (bắt buộc, không tự bịa giá trị khác)

```css
:root {
  --bg: #070b20;            /* navy đêm – nền chủ đạo ~55% */
  --fg: #ffffff;
  --surface: #232739;       /* panel/card tối */
  --muted: #11162d;
  --muted-fg: #bdbec4;      /* text phụ trên nền tối */
  --border: #393c4d;        /* hairline 1px trên nền tối */
  --light-bg: #ffffff;      /* section sáng */
  --light-alt: #e3e6eb;     /* section sáng thay thế */
  --metal: linear-gradient(180deg, #c7cbd4, #5a5f65); /* chỉ cho chi tiết nhỏ */
  --danger: #ce1d20;        /* chỉ cho lỗi form */

  --font: "Manrope", "TT Norms Pro", ui-sans-serif, system-ui, sans-serif; /* TT Norms Pro nếu có license */
  --text-label: 11px;   /* tracking +0.04em, UPPERCASE */
  --text-body: 14px;    /* line-height 1.29, UPPERCASE, max 45ch */
  --text-statement: clamp(22px, 2.2vw, 32px); /* tracking -0.01em */
  --text-h2: clamp(48px, 5.9vw, 85px);        /* line-height 1, tracking -0.01em */
  --text-display: clamp(72px, 9.9vw, 143px);  /* line-height 1.05, tracking -0.04em */

  --gutter: 20px;       /* lề ngoài & gap cột, lưới 12 cột */
  --section-y: 240px;   /* padding dọc section (mobile 120px) */
  --radius: 0;          /* KHÔNG bo góc, ngoại lệ duy nhất: icon tròn 50% */
  --ease: cubic-bezier(0.7, 0, 0.3, 1); /* easing DUY NHẤT cho mọi chuyển động */
  --dur-fast: 0.5s;  --dur: 1s;  --dur-slow: 2s;
}
```

Quy tắc chữ: **một font, weight 400/450, TẤT CẢ IN HOA** (trừ con số). Không bold, không italic. Chỉ 4 cỡ chữ: 11 / 14 / ~32 / 85–143px.

## 4. Chi tiết đặc trưng (phải có, đây là thứ làm nên phong cách)

1. **Hình chữ nhật "cắn góc" (bitten corner):** nút, tab, khung ảnh bị cắt một khối chữ nhật nhỏ ở một góc bằng `clip-path: polygon(...)` với biến `--notch-x/--notch-y` (≈10px cho nút, ≈100px cho panel lớn). Hover: góc khuyết **khép lại** thành chữ nhật đầy đủ trong 0.5s `var(--ease)`.
2. **Tab lồng vào khung:** một tab đặc (trắng hoặc navy) rộng đúng nửa màn hình, cao 100px, cắm vào góc trên-trái của canvas/ảnh tràn viền. Tab chứa wordmark hoặc nhãn 11px + icon tròn 20px ở mép phải. Mép trên của khung ảnh "bậc thang" lên ở phía bên phải tab.
3. **Wordmark giãn rộng:** tên thương hiệu 85–143px, weight 400, letter-spacing ≈ +0.35em. Đây là chữ lớn duy nhất được giãn rộng.
4. **Hàng thông số 3 cột:** mỗi cột có đường kẻ 1px ở trên, đường kẻ **chạy dần từ trái sang phải** khi cuộn. Nhãn 11px nằm dưới vạch, **con số khổng lồ 85–143px căn phải**. Đơn vị nằm trong nhãn, không nằm trong số (vd nhãn "FREQUENCY RESPONSE, HZ", số "18–40 000").
5. **Cuộn kiểu điện ảnh:** section được pin nhiều viewport. 3D xoay/zoom/tách lớp theo scroll (scrub). Chữ hiện từng dòng bằng mask trượt lên.

## 5. Cấu trúc trang (mỗi section = MỘT ý duy nhất)

Nhịp sáng/tối: **Sáng → Tối → Tối → Sáng → Tối → Tối → Sáng → Tối**.

1. **Preloader** (≈2.5s): nền navy, model 3D quay chậm ở giữa. Một panel trắng cắn góc chứa wordmark + bộ đếm "0% → 100%" ở góc dưới-phải panel. Panel thu lại thành tab của Hero.
2. **Hero (sáng → tối):** nav cố định cao 50px (trái: hamburger 2 vạch 40×2px; phải: `SELECT MODEL` · ♡ 0 · `BOOK A LISTENING`). Tab trắng nửa trái chứa wordmark **[THƯƠNG HIỆU]** giãn rộng. Bên dưới: canvas 3D tràn viền, loa đứng trong phòng tối, rim-light ấm vàng hắt dọc cạnh. Cột 7–12: tagline 2 dòng 14px in hoa, vd "WHERE SILENCE / GAINS DEPTH". Khi cuộn: camera dolly-in, tab thu nhỏ thành logo trên nav.
3. **Tuyên ngôn (tối):** đoạn statement ~32px in hoa, dòng đầu thụt vào tới cột 7, các dòng sau quay về lề trái. Model 3D dạng khối kính gân dọc lơ lửng bên dưới, xoay theo scroll. Đoạn 14px mô tả ở nửa phải.
4. **Exploded view (tối, pin ~3 viewport):** loa tách lớp theo scroll gồm vỏ nhôm → khung → driver bass → midrange → tweeter → mạng phân tần. Mỗi lớp có một chú thích: vạch 1px + nhãn 11px + số thứ tự trong vòng tròn 16px. Không dùng callout bo tròn hay tooltip đổ bóng.
5. **Thông số (tối):** 3 hàng số liệu theo Signature #4, mỗi hàng chiếm một viewport và được pin. Gợi ý: `FREQUENCY RESPONSE, HZ — 18–40 000` · `SENSITIVITY, DB — 91` · `WEIGHT PER UNIT, KG — 64`. **[THAY BẰNG THÔNG SỐ THẬT]**
6. **Vật liệu (sáng, nền #e3e6eb):** cặp 2 ảnh/render chi tiết tỷ lệ 4:3 cạnh nhau, gap 10px (nhôm phay xước, kính gân, gỗ óc chó). Khung ảnh cắn góc. Đoạn 14px ở cột 7–12.
7. **Chọn phiên bản (tối):** bộ chọn màu/finish là các nút cắn góc viền 1px (30% → 100% khi hover/active). Đổi finish thì material 3D đổi theo, crossfade 0.5s. Các finish gợi ý: `GRAPHITE` · `SILVER` · `WALNUT`.
8. **Không gian nghe (tối):** render phòng khách hi-end tràn viền, parallax. Tab navy cắm góc chứa nhãn "DESIGNED FOR ROOMS OF 30–80 M²".
9. **Đối tác / giải thưởng (sáng):** 3 panel navy (~453×473) trên nền trắng, mỗi panel có nhãn 11px góc trái-trên, logo ở giữa và icon `+` tròn góc phải-dưới.
10. **CTA + Footer (tối):** wordmark khổng lồ tràn gần hết chiều ngang. Nút trắng cắn góc `BOOK A LISTENING` và nút viền `DOWNLOAD CATALOGUE`. Form đơn giản (họ tên, SĐT, showroom) dùng input viền dưới 1px, không bo góc. Footer có địa chỉ showroom **[ĐỊA CHỈ]**, mạng xã hội bằng chữ in hoa 11px.

## 6. Cảnh 3D (art direction)

- Nền canvas `#070b20` (fog cùng màu). Không skybox sặc sỡ.
- Ánh sáng: 1 key light ấm (≈3200K, `#ffd9a0`) hắt từ trên-phải xuống cạnh loa như đèn hắt mặt tiền, 1 rim light lạnh `#9fb3ff` cường độ thấp, environment HDRI studio tối, ở mức ~0.3.
- Vật liệu: nhôm anodized (`metalness 1`, `roughness 0.35`), kính gân dọc (transmission + normal map sọc dọc), cao su driver mờ. **Toàn bộ sự ấm áp đến từ ánh sáng 3D. UI không bao giờ dùng màu vàng/cam.**
- Camera: FOV 30–35 (cảm giác kiến trúc, ít méo), chuyển động chỉ bằng scroll, easing `var(--ease)` hoặc damp. Không auto-rotate nhanh, không OrbitControls tự do trên desktop (chỉ cho kéo nhẹ ±15°).
- Hiệu năng: `dpr={[1, 1.75]}`, tắt shadow map realtime (bake AO), pause render khi canvas ra khỏi viewport. Trên mobile dùng ảnh render tĩnh/video thay cho canvas nếu GPU yếu (`navigator.hardwareConcurrency < 4`).

## 7. Motion

- Chỉ một easing `cubic-bezier(0.7, 0, 0.3, 1)`: 0.5s cho hover/màu/clip-path, 1s cho opacity/transform reveal, 2s cho ảnh lớn. Stagger 0.1s mỗi dòng.
- Hover chỉ gồm: khép notch, text mờ 60%, viền 30% → 100%. **Không** scale, không nhấc lên, không glow.
- Tôn trọng `prefers-reduced-motion`: tắt pin/scrub, hiện nội dung tĩnh, dừng 3D ở góc đẹp nhất.

## 8. Anti-patterns (tuyệt đối tránh)

- Bo góc, nút dạng pill, card bo tròn. Box-shadow, glow, glassmorphism/blur.
- Gradient màu mè, màu thương hiệu nổi bật (nút xanh dương, highlight vàng/cam, CTA xanh lá).
- Chữ đậm, chữ thường cho tiêu đề, italic, emoji.
- Lưới 3+ card tính năng có icon, carousel testimonial, ảnh stock người cười.
- Căn giữa đoạn văn (chỉ căn giữa logo trong panel).
- Nhồi nội dung: mỗi viewport tối đa 1 tiêu đề + 1 cặp ảnh + 1 đoạn văn. ≥ 60% diện tích để trống.

## 9. Responsive

- Desktop 1440 là chuẩn. Tablet ≤ 1024: lưới 6 cột. Mobile ≤ 640: 1 cột, gutter 20px, padding section 120px.
- Trên mobile: tab hero rộng 80%. Display 72–86px, body vẫn 11–14px in hoa. Hàng thông số thành 1 cột, số vẫn căn phải. Nav chỉ còn hamburger + `CONTACT`.
- Không để cuộn ngang ở bất kỳ breakpoint nào.

## 10. Bàn giao & tiêu chí nghiệm thu

- Code chạy được bằng `npm i && npm run dev`, cấu trúc gọn: `components/sections/*`, `components/three/*`, `styles/tokens.css`.
- Lighthouse desktop: Performance ≥ 85, Accessibility ≥ 95. Contrast text đạt WCAG AA (trắng/#bdbec4 trên #070b20 đều đạt).
- Checklist tự kiểm trước khi trả kết quả:
  - [ ] Không có `border-radius` > 0 ngoài icon tròn; không có `box-shadow`.
  - [ ] Toàn bộ chữ in hoa, weight ≤ 450, chỉ 4 cỡ chữ.
  - [ ] Có ít nhất 3 phần tử cắn góc với hover khép notch.
  - [ ] Có hàng thông số với vạch 1px chạy theo scroll và số căn phải.
  - [ ] Nhịp section sáng/tối đúng như mục 5.
  - [ ] Mọi transition dùng đúng `cubic-bezier(0.7, 0, 0.3, 1)`.
  - [ ] 3D tắt/pause khi ngoài viewport và có fallback cho mobile & reduced-motion.

Nếu thiếu thông tin (thông số, ảnh, model), hãy dùng placeholder hợp lý, đánh dấu `TODO:` và liệt kê ở cuối câu trả lời. Đừng dừng lại để hỏi.
