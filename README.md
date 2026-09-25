# design-cloner — học “DNA thiết kế” rồi biến nó thành Skill + Agent cho Claude

Đưa vào **website, ảnh chụp màn hình, link showcase (Dribbble/Behance…) hoặc link Pinterest** → bộ công cụ sẽ:

1. **Trích xuất** (tự động, bằng Chromium): màu và vai trò màu, font và thang cỡ chữ, lưới spacing, bo góc, đổ bóng, motion, layout, cách làm button/card/input/nav, ảnh chụp desktop/mobile.
2. **Tổng hợp** tất cả nguồn (có trọng số) thành một **Design DNA** (`dna.json`) kèm token: CSS variables, Tailwind v3/v4, DTCG JSON (dùng cho Figma Tokens/Style Dictionary).
3. **Claude nhìn ảnh** và viết phần DNA định tính (`principles.md`): tinh thần, bố cục, giọng typography, tỉ lệ màu, chi tiết đặc trưng, điều cấm.
4. **Biên dịch** thành một **Skill** (`.claude/skills/dna-<tên>/`) và một **Agent** (`.claude/agents/<tên>-designer.md`) để Claude làm UI đúng phong cách đó.
5. **Kiểm tra**: `dna check` chấm điểm (0–100) mức độ một trang web tuân thủ DNA, kèm lỗi tương phản WCAG và tràn ngang trên mobile, để agent tự sửa đến khi đạt.

```
 references ──► extract ──► synthesize ──► dna.json + tokens ──► SKILL.md + agent
 (web, pin,        (styles,     (weighted        ▲                      │
  dribbble, png)    pixels)      vote)           │ overrides.json       ▼
                                                 │ principles.md   build UI ──► dna check ──► fix
                                        Claude looks at screenshots ◄────────────────────────┘
```

## Cài đặt

```bash
npm install
npx playwright install chromium   # nếu máy chưa có Chromium cho Playwright
npm link                          # (tuỳ chọn) để gõ `dna` thay cho `node bin/dna.js`
npm test
```

## Dùng nhanh (qua Claude Code — khuyến nghị)

Mở Claude Code trong thư mục này rồi nói, ví dụ:

> Học phong cách từ https://linear.app, https://www.pinterest.com/pin/123… và ./inspo/*.png, đặt tên `midnight`.

Skill `design-dna` (hoặc agent `dna-analyst`) sẽ chạy trích xuất, xem ảnh, sửa số liệu, viết principles và sinh skill `dna-midnight` + agent `midnight-designer`. Sau đó:

> Dùng midnight-designer làm landing page cho app quản lý chi tiêu.

## Dùng bằng CLI

```bash
node bin/dna.js learn midnight https://linear.app ./inspo/ https://www.pinterest.com/pin/123/
node bin/dna.js add midnight https://dribbble.com/shots/456 --weight 0.5   # thêm nguồn
node bin/dna.js build midnight                 # sau khi sửa principles.md / overrides.json
node bin/dna.js show midnight                  # xem tóm tắt DNA
node bin/dna.js check midnight http://localhost:3000   # chấm điểm trang của bạn
node bin/dna.js build midnight --claude-dir ~/.claude  # cài skill/agent cho MỌI dự án
```

| Nguồn | Cách xử lý |
|---|---|
| URL website | computed style của mọi phần tử + screenshot desktop / full page / mobile |
| Pinterest pin/board, Dribbble, Behance, Land-book, Mobbin… | tải ảnh được showcase (bỏ qua avatar/logo), phân tích bảng màu & độ “thoáng” |
| Ảnh local / thư mục ảnh | phân tích bảng màu (k-means trong OKLab), độ sáng, độ bão hoà, khoảng trống |
| File `.html` / thư mục có `index.html` | như website |
| Tiền tố `web:` `img:` `gallery:` | ép kiểu nguồn |

Pinterest/Dribbble đôi khi chặn bot hoặc bắt đăng nhập — khi đó hãy lưu ảnh về máy và truyền file.

### Trộn nhiều nguồn
Mỗi nguồn có trọng số (`--weight`, hoặc sửa `dna/<tên>/sources.json` rồi `dna synth <tên> && dna build <tên>`). Công thức hay dùng: 1 website làm “khung” typography/layout (weight 2) + vài ảnh Pinterest cho mood và bảng màu.

## Một DNA gồm những gì

```
dna/<tên>/
  sources/<id>/        desktop.png, full.png, mobile.png, raw.json | images/, analysis.json
  dna.auto.json        DNA do máy tổng hợp
  overrides.json       (tuỳ chọn) sửa tay — deep-merge lên dna.auto.json
  principles.md        DNA định tính do Claude viết sau khi xem ảnh
  dna.json             DNA cuối cùng (auto + overrides)
  DNA.md               tóm tắt dễ đọc
  tokens.css  components.css  tailwind-v4.css  tailwind.preset.js  tokens.json
  specimen.html/.png   style guide + landing mẫu dựng CHỈ từ token (để so với ảnh gốc)
  moodboard.html/.png  toàn bộ ảnh tham chiếu + bảng màu
```

Token dùng tên theo chuẩn shadcn/Tailwind v4 (`--color-background`, `--color-primary`, `--color-muted-foreground`, `--font-display`, `--text-2xl`, `--radius-md`, `--shadow-md`…) nên **đổi DNA = đổi file token**, markup giữ nguyên.

Ví dụ đầu ra có sẵn trong [`examples/output/paper`](examples/output/paper) (SKILL.md, agent, specimen, moodboard) và [`examples/output/aurora`](examples/output/aurora). Tự tạo lại bằng `npm run demo`.

## Cấu trúc mã nguồn

```
bin/dna.js                    CLI
src/extract/collect-styles.js chạy trong trang: gom computed style thành histogram
src/extract/web.js            website → screenshot + raw.json
src/extract/gallery.js        Pinterest / Dribbble / showcase → tải ảnh
src/extract/image.js          phân tích pixel (bảng màu, sáng tối, khoảng trống, độ rối)
src/synthesize.js             bỏ phiếu có trọng số → vai trò màu, thang chữ, spacing, shape, component…
src/generate/tokens.js        CSS vars, Tailwind v3/v4, DTCG, components.css
src/generate/docs.js          DNA.md, principles template, SKILL.md, agent
src/generate/pages.js         specimen + moodboard
src/check.js                  chấm điểm tuân thủ DNA
.claude/skills/design-dna/    skill điều phối quy trình (dành cho Claude)
.claude/agents/dna-analyst.md agent chuyên chưng cất DNA
```

## Giới hạn
- Font thương mại (Söhne, Circular, GT…) được thay bằng font Google gần nhất; tên font gốc vẫn được ghi lại.
- Nguồn chỉ có ảnh thì typography là placeholder (`confidence: low`) — Claude cần nhận diện font bằng mắt và ghi vào `overrides.json`.
- Trang dựng bằng canvas/WebGL chỉ lấy được bảng màu từ screenshot, không lấy được style.
- Chỉ nên học phong cách (DNA) để làm sản phẩm của bạn; đừng sao chép nguyên logo, nội dung hay tài sản có bản quyền.
