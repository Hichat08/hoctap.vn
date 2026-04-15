const QUIZ_BANK = {
  "html-tags": {
    title: "Trắc nghiệm Thẻ HTML Cơ bản",
    description:
      "Ôn lại các thẻ HTML nền tảng, công dụng cơ bản và cú pháp thường gặp trong đề kiểm tra.",
    iconId: "icon-html",
    iconClass: "icon-shell--amber",
    lessonUrl: "html-tags.html",
    lessonLabel: "Bài Thẻ HTML",
    questions: [
      {
        prompt: "Dòng nào dùng để khai báo tài liệu HTML5?",
        options: [
          "<code>&lt;html5&gt;</code>",
          "<code>&lt;!DOCTYPE html&gt;</code>",
          "<code>&lt;document html&gt;</code>",
          "<code>&lt;meta html5&gt;</code>",
        ],
        answer: 1,
        explain:
          "<code>&lt;!DOCTYPE html&gt;</code> là khai báo chuẩn để trình duyệt hiểu đây là tài liệu HTML5.",
      },
      {
        prompt: "Thẻ nào dùng để tạo liên kết sang trang khác?",
        options: [
          "<code>&lt;link&gt;</code>",
          "<code>&lt;a&gt;</code>",
          "<code>&lt;nav&gt;</code>",
          "<code>&lt;href&gt;</code>",
        ],
        answer: 1,
        explain:
          "Thẻ <code>&lt;a&gt;</code> kết hợp với thuộc tính <code>href</code> để tạo liên kết.",
      },
      {
        prompt:
          "Thuộc tính nào của ảnh giúp mô tả nội dung khi ảnh không tải được?",
        options: [
          "<code>title</code>",
          "<code>src</code>",
          "<code>alt</code>",
          "<code>name</code>",
        ],
        answer: 2,
        explain:
          "<code>alt</code> chứa văn bản thay thế, hữu ích khi ảnh lỗi hoặc cho trình đọc màn hình.",
      },
      {
        prompt: "Muốn tạo danh sách không có thứ tự, em nên dùng thẻ nào?",
        options: [
          "<code>&lt;ol&gt;</code>",
          "<code>&lt;ul&gt;</code>",
          "<code>&lt;li&gt;</code>",
          "<code>&lt;dl&gt;</code>",
        ],
        answer: 1,
        explain:
          "<code>&lt;ul&gt;</code> tạo danh sách không thứ tự; mỗi mục vẫn đặt trong <code>&lt;li&gt;</code>.",
      },
      {
        prompt: "Thẻ nào thường dùng cho ô tiêu đề trong bảng?",
        options: [
          "<code>&lt;td&gt;</code>",
          "<code>&lt;tr&gt;</code>",
          "<code>&lt;table&gt;</code>",
          "<code>&lt;th&gt;</code>",
        ],
        answer: 3,
        explain:
          "<code>&lt;th&gt;</code> là ô tiêu đề, còn <code>&lt;td&gt;</code> là ô dữ liệu thường.",
      },
      {
        prompt:
          "Nếu chỉ muốn xuống dòng trong cùng đoạn văn, thẻ nào phù hợp nhất?",
        options: [
          "<code>&lt;hr&gt;</code>",
          "<code>&lt;br&gt;</code>",
          "<code>&lt;p&gt;</code>",
          "<code>&lt;span&gt;</code>",
        ],
        answer: 1,
        explain:
          "<code>&lt;br&gt;</code> dùng để ngắt dòng; <code>&lt;hr&gt;</code> là đường kẻ ngang.",
      },
      {
        prompt: "Thẻ nào dùng để tạo đoạn văn?",
        options: [
          "<code>&lt;text&gt;</code>",
          "<code>&lt;para&gt;</code>",
          "<code>&lt;p&gt;</code>",
          "<code>&lt;paragraph&gt;</code>",
        ],
        answer: 2,
        explain:
          "<code>&lt;p&gt;</code> là thẻ chuẩn để tạo một đoạn văn trong HTML.",
      },
      {
        prompt: "Thẻ nào dùng để nhúng ảnh vào trang web?",
        options: [
          "<code>&lt;image&gt;</code>",
          "<code>&lt;img&gt;</code>",
          "<code>&lt;picture&gt;</code>",
          "<code>&lt;photo&gt;</code>",
        ],
        answer: 1,
        explain:
          "<code>&lt;img&gt;</code> là thẻ để nhúng hình ảnh, cần thuộc tính <code>src</code>.",
      },
      {
        prompt: "Thẻ nào tạo danh sách có thứ tự 1, 2, 3...?",
        options: [
          "<code>&lt;ul&gt;</code>",
          "<code>&lt;ol&gt;</code>",
          "<code>&lt;li&gt;</code>",
          "<code>&lt;dl&gt;</code>",
        ],
        answer: 1,
        explain:
          "<code>&lt;ol&gt;</code> là ordered list, tức danh sách có thứ tự.",
      },
    ],
  },
  "html-advanced": {
    title: "Trắc nghiệm HTML Nâng cao & Semantic",
    description:
      "Kiểm tra khả năng phân biệt semantic tags, input types, div/span và các thuộc tính mở rộng của HTML.",
    iconId: "icon-layout",
    iconClass: "icon-shell--sky",
    lessonUrl: "html-advanced.html",
    lessonLabel: "Bài HTML Nâng cao",
    questions: [
      {
        prompt:
          "Thẻ semantic nào thường chứa phần đầu trang hoặc phần giới thiệu của một khu vực?",
        options: [
          "<code>&lt;header&gt;</code>",
          "<code>&lt;footer&gt;</code>",
          "<code>&lt;aside&gt;</code>",
          "<code>&lt;mark&gt;</code>",
        ],
        answer: 0,
        explain:
          "<code>&lt;header&gt;</code> thường dùng cho phần đầu trang hoặc phần mở đầu của một section/article.",
      },
      {
        prompt:
          "Thẻ nào phù hợp nhất cho một bài viết độc lập có thể tách riêng?",
        options: [
          "<code>&lt;section&gt;</code>",
          "<code>&lt;article&gt;</code>",
          "<code>&lt;div&gt;</code>",
          "<code>&lt;span&gt;</code>",
        ],
        answer: 1,
        explain:
          "<code>&lt;article&gt;</code> dùng cho nội dung độc lập như bài viết, tin tức, bài đăng.",
      },
      {
        prompt:
          "Khác biệt đúng giữa <code>div</code> và <code>span</code> là gì?",
        options: [
          "<code>div</code> là inline, <code>span</code> là block",
          "Cả hai đều là semantic tags",
          "<code>div</code> thường là block, <code>span</code> thường là inline",
          "<code>span</code> chỉ dùng cho JavaScript",
        ],
        answer: 2,
        explain:
          "<code>div</code> là container dạng khối, còn <code>span</code> là container nội dòng.",
      },
      {
        prompt: "Kiểu input nào hỗ trợ kiểm tra định dạng email cơ bản?",
        options: [
          "<code>type=&quot;text&quot;</code>",
          "<code>type=&quot;mail&quot;</code>",
          "<code>type=&quot;email&quot;</code>",
          "<code>type=&quot;contact&quot;</code>",
        ],
        answer: 2,
        explain:
          "<code>type=&quot;email&quot;</code> giúp trình duyệt kiểm tra định dạng email khi submit.",
      },
      {
        prompt:
          "Thuộc tính <code>for</code> trong thẻ <code>label</code> nên trỏ tới đâu?",
        options: [
          "Tên class của form",
          "Giá trị <code>id</code> của input",
          "Tên file HTML",
          "Giá trị <code>name</code> của button",
        ],
        answer: 1,
        explain:
          "<code>label for</code> liên kết với <code>id</code> của input để click nhãn sẽ focus đúng ô nhập.",
      },
      {
        prompt:
          "Nhóm thuộc tính nào được dùng để lưu dữ liệu tùy biến trong HTML?",
        options: [
          "<code>custom-*</code>",
          "<code>info-*</code>",
          "<code>meta-*</code>",
          "<code>data-*</code>",
        ],
        answer: 3,
        explain:
          "<code>data-*</code> là chuẩn HTML để gắn dữ liệu tùy biến cho phần tử.",
      },
      {
        prompt: "Thẻ nào phù hợp nhất cho thanh điều hướng của trang?",
        options: [
          "<code>&lt;nav&gt;</code>",
          "<code>&lt;main&gt;</code>",
          "<code>&lt;img&gt;</code>",
          "<code>&lt;aside&gt;</code>",
        ],
        answer: 0,
        explain:
          "<code>&lt;nav&gt;</code> biểu diễn vùng điều hướng, thường chứa menu hoặc liên kết chính.",
      },
      {
        prompt: "Kiểu input nào dùng để nhập mật khẩu?",
        options: [
          "<code>type=&quot;secret&quot;</code>",
          "<code>type=&quot;password&quot;</code>",
          "<code>type=&quot;hidden&quot;</code>",
          "<code>type=&quot;secure&quot;</code>",
        ],
        answer: 1,
        explain:
          "<code>type=&quot;password&quot;</code> ẩn ký tự khi người dùng gõ mật khẩu.",
      },
      {
        prompt: "Thẻ <code>&lt;footer&gt;</code> thường chứa nội dung gì?",
        options: [
          "Nội dung chính của trang",
          "Thông tin bản quyền, liên hệ, liên kết phụ",
          "Menu điều hướng chính",
          "Quảng cáo và hình ảnh",
        ],
        answer: 1,
        explain:
          "<code>&lt;footer&gt;</code> chứa thông tin nằm ở cuối trang như bản quyền, liên hệ.",
      },
    ],
  },
  "css-layout": {
    title: "Trắc nghiệm CSS Cơ bản",
    description:
      "Luyện nhanh các thuộc tính CSS cơ bản liên quan tới màu sắc, khoảng cách, viền và căn chỉnh.",
    iconId: "icon-palette",
    iconClass: "icon-shell--teal",
    lessonUrl: "css-layout.html",
    lessonLabel: "Bài CSS Cơ bản",
    questions: [
      {
        prompt: "Thuộc tính nào dùng để đổi màu chữ?",
        options: [
          "<code>font-color</code>",
          "<code>text-color</code>",
          "<code>color</code>",
          "<code>foreground</code>",
        ],
        answer: 2,
        explain:
          "Trong CSS, màu chữ được điều khiển bằng thuộc tính <code>color</code>.",
      },
      {
        prompt: "Khoảng cách nằm bên trong viền của phần tử là gì?",
        options: [
          "<code>margin</code>",
          "<code>padding</code>",
          "<code>spacing</code>",
          "<code>gap</code>",
        ],
        answer: 1,
        explain:
          "<code>padding</code> là khoảng cách bên trong viền, còn <code>margin</code> là khoảng cách bên ngoài.",
      },
      {
        prompt:
          "Muốn căn giữa nội dung chữ theo chiều ngang, thuộc tính nào thường dùng?",
        options: [
          "<code>align-items: center</code>",
          "<code>margin: auto</code>",
          "<code>text-align: center</code>",
          "<code>justify-self: center</code>",
        ],
        answer: 2,
        explain:
          "<code>text-align: center</code> dùng để căn giữa văn bản theo chiều ngang trong phần tử chứa.",
      },
      {
        prompt: "Thuộc tính nào làm bo tròn góc hộp?",
        options: [
          "<code>corner-radius</code>",
          "<code>border-style</code>",
          "<code>radius</code>",
          "<code>border-radius</code>",
        ],
        answer: 3,
        explain: "<code>border-radius</code> dùng để bo góc phần tử.",
      },
      {
        prompt:
          "Nếu một phần tử thường chiếm cả dòng mới, đó là kiểu hiển thị nào?",
        options: [
          "<code>inline</code>",
          "<code>block</code>",
          "<code>none</code>",
          "<code>static</code>",
        ],
        answer: 1,
        explain:
          "Phần tử kiểu <code>block</code> thường xuống dòng và chiếm chiều rộng khả dụng.",
      },
      {
        prompt: "Muốn tạo khoảng cách bên ngoài phần tử, em nên dùng:",
        options: [
          "<code>padding</code>",
          "<code>margin</code>",
          "<code>border</code>",
          "<code>outline</code>",
        ],
        answer: 1,
        explain:
          "<code>margin</code> tạo khoảng cách bên ngoài phần tử; <code>padding</code> là bên trong.",
      },
      {
        prompt: "Thuộc tính nào dùng để thay đổi kích thước chữ?",
        options: [
          "<code>text-size</code>",
          "<code>font-size</code>",
          "<code>size</code>",
          "<code>text-scale</code>",
        ],
        answer: 1,
        explain:
          "<code>font-size</code> dùng để thay đổi kích thước của văn bản.",
      },
      {
        prompt: "Thuộc tính nào dùng để đổi màu nền phần tử?",
        options: [
          "<code>color</code>",
          "<code>background-color</code>",
          "<code>bg-color</code>",
          "<code>back-color</code>",
        ],
        answer: 1,
        explain: "<code>background-color</code> thiết lập màu nền của phần tử.",
      },
      {
        prompt: "Muốn tạo viền cho phần tử, thuộc tính nào được sử dụng?",
        options: [
          "<code>frame</code>",
          "<code>border</code>",
          "<code>line</code>",
          "<code>boundary</code>",
        ],
        answer: 1,
        explain:
          "<code>border</code> tạo viền xung quanh phần tử, có thể kết hợp với độ dày, kiểu và màu sắc.",
      },
      {
        prompt: "Phần tử nào là kiểu inline (nằm trong dòng)?",
        options: [
          "<code>&lt;p&gt;</code>",
          "<code>&lt;div&gt;</code>",
          "<code>&lt;span&gt;</code>",
          "<code>&lt;h1&gt;</code>",
        ],
        answer: 2,
        explain:
          "<code>&lt;span&gt;</code> là phần tử inline, không chiếm toàn bộ chiều rộng và không xuống dòng.",
      },
    ],
  },
  "css-advanced": {
    title: "Trắc nghiệm CSS Nâng cao",
    description:
      "Kiểm tra nhanh về selector, pseudo-class, Flexbox, Grid và responsive design.",
    iconId: "icon-grid",
    iconClass: "icon-shell--blue",
    lessonUrl: "css-advanced.html",
    lessonLabel: "Bài CSS Nâng cao",
    questions: [
      {
        prompt: "Bộ chọn <code>div p</code> có ý nghĩa gì?",
        options: [
          "Chọn mọi <code>div</code> đứng cạnh <code>p</code>",
          "Chọn mọi <code>p</code> nằm trong <code>div</code>",
          "Chọn mọi <code>div</code> có class <code>p</code>",
          "Chọn <code>p</code> đầu tiên trong trang",
        ],
        answer: 1,
        explain:
          "<code>div p</code> là descendant selector, chọn mọi thẻ <code>p</code> bên trong <code>div</code>.",
      },
      {
        prompt: "Pseudo-class nào hoạt động khi rê chuột lên phần tử?",
        options: [
          "<code>:focus</code>",
          "<code>:active</code>",
          "<code>:hover</code>",
          "<code>:visited</code>",
        ],
        answer: 2,
        explain:
          "<code>:hover</code> áp dụng khi con trỏ chuột nằm trên phần tử.",
      },
      {
        prompt:
          "Muốn bắt đầu dùng Flexbox cho một container, thuộc tính đầu tiên cần có là:",
        options: [
          "<code>position: flex</code>",
          "<code>display: flex</code>",
          "<code>layout: flex</code>",
          "<code>flex: block</code>",
        ],
        answer: 1,
        explain: "Container phải có <code>display: flex</code> để bật Flexbox.",
      },
      {
        prompt:
          "Trong Flexbox, thuộc tính nào thường căn phần tử theo trục chính?",
        options: [
          "<code>justify-content</code>",
          "<code>text-align</code>",
          "<code>align-self</code>",
          "<code>float</code>",
        ],
        answer: 0,
        explain:
          "<code>justify-content</code> căn chỉnh theo trục chính; <code>align-items</code> là trục phụ.",
      },
      {
        prompt:
          "Trong CSS Grid, thuộc tính nào thường dùng để khai báo số cột?",
        options: [
          "<code>grid-template-columns</code>",
          "<code>grid-columns-count</code>",
          "<code>column-layout</code>",
          "<code>grid-auto-flow</code>",
        ],
        answer: 0,
        explain:
          "<code>grid-template-columns</code> xác định cấu trúc cột của grid container.",
      },
      {
        prompt:
          "Kỹ thuật nào thường được dùng để đổi style theo kích thước màn hình?",
        options: ["Pseudo-element", "Media query", "Keyframe", "Z-index"],
        answer: 1,
        explain:
          "Media query cho phép thay đổi CSS theo điều kiện như độ rộng màn hình.",
      },
      {
        prompt: "Pseudo-class nào dùng khi input được focus?",
        options: [
          "<code>:active</code>",
          "<code>:focus</code>",
          "<code>:hover</code>",
          "<code>:visited</code>",
        ],
        answer: 1,
        explain:
          "<code>:focus</code> áp dụng khi phần tử được focus (có con trỏ chuột hoặc được click).",
      },
      {
        prompt: "Trong Flexbox, thuộc tính nào căn phần tử theo trục phụ?",
        options: [
          "<code>justify-items</code>",
          "<code>align-items</code>",
          "<code>align-self</code>",
          "<code>justify-self</code>",
        ],
        answer: 1,
        explain:
          "<code>align-items</code> căn chỉnh theo trục phụ trong flex container.",
      },
      {
        prompt: "Bộ chọn nào chọn phần tử con đầu tiên của một phần tử cha?",
        options: [
          "<code>.parent:first</code>",
          "<code>.parent &gt; :first-child</code>",
          "<code>.parent:first-child</code>",
          "<code>:first</code>",
        ],
        answer: 1,
        explain:
          "<code>:first-child</code> chọn phần tử con đầu tiên của phần tử cha.",
      },
      {
        prompt: "Thuộc tính nào dùng để thay đổi độ mỏng/đậm của chữ?",
        options: [
          "<code>font-style</code>",
          "<code>text-weight</code>",
          "<code>font-weight</code>",
          "<code>font-bold</code>",
        ],
        answer: 2,
        explain:
          "<code>font-weight</code> dùng để thay đổi độ đậm nhạt của chữ (100, 400, 700, 900...).",
      },
    ],
  },
  "javascript-basics": {
    title: "Trắc nghiệm JavaScript Cơ bản",
    description:
      "Ôn tập biến, điều kiện, vòng lặp, hàm và các thao tác DOM cơ bản bằng JavaScript.",
    iconId: "icon-js",
    iconClass: "icon-shell--gold",
    lessonUrl: "javascript-basics.html",
    lessonLabel: "Bài JavaScript",
    questions: [
      {
        prompt: "Từ khóa nào thường dùng để tạo biến có thể thay đổi giá trị?",
        options: [
          "<code>const</code>",
          "<code>let</code>",
          "<code>static</code>",
          "<code>new</code>",
        ],
        answer: 1,
        explain:
          "<code>let</code> tạo biến có thể gán lại; <code>const</code> thì không nên gán lại.",
      },
      {
        prompt:
          "Từ khóa nào dùng cho hằng số, tức là không muốn gán lại giá trị?",
        options: [
          "<code>const</code>",
          "<code>var</code>",
          "<code>if</code>",
          "<code>loop</code>",
        ],
        answer: 0,
        explain:
          "<code>const</code> phù hợp khi muốn giữ tham chiếu không bị gán lại.",
      },
      {
        prompt: "Cấu trúc nào dùng để kiểm tra điều kiện trong JavaScript?",
        options: [
          "<code>repeat</code>",
          "<code>switcher</code>",
          "<code>if / else</code>",
          "<code>return</code>",
        ],
        answer: 2,
        explain:
          "<code>if / else</code> là cú pháp điều kiện cơ bản để rẽ nhánh xử lý.",
      },
      {
        prompt:
          "Nếu muốn lặp một đoạn mã nhiều lần theo số đếm, em thường dùng:",
        options: [
          "<code>for</code>",
          "<code>try</code>",
          "<code>const</code>",
          "<code>break</code>",
        ],
        answer: 0,
        explain:
          "Vòng lặp <code>for</code> rất phù hợp khi biết trước số lần lặp.",
      },
      {
        prompt: "Hàm nào thường được dùng để lấy phần tử theo <code>id</code>?",
        options: [
          "<code>document.getElementById()</code>",
          "<code>window.query()</code>",
          "<code>document.getClass()</code>",
          "<code>element.findId()</code>",
        ],
        answer: 0,
        explain:
          "<code>document.getElementById()</code> trả về phần tử có <code>id</code> tương ứng.",
      },
      {
        prompt:
          "Muốn lắng nghe sự kiện nhấn chuột vào nút, cách nào đúng nhất?",
        options: [
          "<code>button.listen(&quot;press&quot;)</code>",
          "<code>button.addEventListener(&quot;click&quot;, fn)</code>",
          "<code>button.onclick = click()</code>",
          "<code>event.click(button)</code>",
        ],
        answer: 1,
        explain:
          "<code>addEventListener(&quot;click&quot;, fn)</code> là cách phổ biến để gắn sự kiện click.",
      },
      {
        prompt: "Hàm nào dùng để in ra console khi debug?",
        options: [
          "<code>alert.log()</code>",
          "<code>document.write()</code>",
          "<code>console.log()</code>",
          "<code>print.console()</code>",
        ],
        answer: 2,
        explain:
          "<code>console.log()</code> rất hay dùng khi học JS để xem giá trị trong console.",
      },
      {
        prompt: "Vòng lặp nào thường dùng khi không biết trước số lần lặp?",
        options: [
          "<code>for</code>",
          "<code>while</code>",
          "<code>switch</code>",
          "<code>if</code>",
        ],
        answer: 1,
        explain:
          "<code>while</code> lặp miễn là điều kiện còn đúng, không cần biết trước số lần.",
      },
      {
        prompt: "Hàm nào dùng để chuyển chuỗi thành số?",
        options: [
          "<code>toNumber()</code>",
          "<code>parseInt()</code> hoặc <code>parseFloat()</code>",
          "<code>convert()</code>",
          "<code>number()</code>",
        ],
        answer: 1,
        explain:
          "<code>parseInt()</code> chuyển thành số nguyên, <code>parseFloat()</code> chuyển thành số thập phân.",
      },
      {
        prompt: "Operator nào dùng để so sánh giá trị và kiểu dữ liệu?",
        options: [
          "<code>==</code>",
          "<code>===</code>",
          "<code>=</code>",
          "<code>!=</code>",
        ],
        answer: 1,
        explain:
          "<code>===</code> so sánh cả giá trị lẫn kiểu dữ liệu, còn <code>==</code> chỉ so sánh giá trị.",
      },
    ],
  },
  "python-basics": {
    title: "Trắc nghiệm Python Cơ bản",
    description:
      "Ôn tập cú pháp Python nền tảng gồm nhập xuất dữ liệu, biến, điều kiện, vòng lặp, list và hàm.",
    iconId: "icon-python",
    iconClass: "icon-shell--emerald",
    lessonUrl: "python-basics.html",
    lessonLabel: "Bài Python",
    questions: [
      {
        prompt: "Hàm nào dùng để in dữ liệu ra màn hình trong Python?",
        options: [
          "<code>show()</code>",
          "<code>echo()</code>",
          "<code>print()</code>",
          "<code>write()</code>",
        ],
        answer: 2,
        explain:
          "<code>print()</code> là hàm chuẩn để hiển thị dữ liệu ra màn hình.",
      },
      {
        prompt: "Lệnh <code>input()</code> thường dùng để làm gì?",
        options: [
          "Xóa dữ liệu trong bộ nhớ",
          "Nhập dữ liệu từ bàn phím",
          "Lặp lại chương trình",
          "Tạo bảng trong cơ sở dữ liệu",
        ],
        answer: 1,
        explain:
          "<code>input()</code> cho phép người dùng nhập dữ liệu từ bàn phím.",
      },
      {
        prompt: "Cách gán giá trị 18 cho biến <code>age</code> là:",
        options: [
          "<code>age := 18</code>",
          "<code>set age = 18</code>",
          "<code>age = 18</code>",
          "<code>int age = 18</code>",
        ],
        answer: 2,
        explain:
          "Python dùng dấu <code>=</code> để gán giá trị cho biến, ví dụ <code>age = 18</code>.",
      },
      {
        prompt: "Kiểu dữ liệu nào phù hợp cho danh sách các số?",
        options: [
          "<code>(1, 2, 3)</code> bắt buộc",
          "<code>[1, 2, 3]</code>",
          "<code>{1; 2; 3}</code>",
          "<code>&lt;1, 2, 3&gt;</code>",
        ],
        answer: 1,
        explain:
          "Danh sách (list) trong Python thường viết bằng ngoặc vuông như <code>[1, 2, 3]</code>.",
      },
      {
        prompt: "Muốn thêm phần tử mới vào cuối list, em thường dùng:",
        options: [
          "<code>push()</code>",
          "<code>insertLast()</code>",
          "<code>append()</code>",
          "<code>addItem()</code>",
        ],
        answer: 2,
        explain:
          "<code>append()</code> thêm một phần tử vào cuối danh sách.",
      },
      {
        prompt: "Trong Python, cấu trúc điều kiện thường bắt đầu bằng từ khóa nào?",
        options: [
          "<code>check</code>",
          "<code>switch</code>",
          "<code>if</code>",
          "<code>when</code>",
        ],
        answer: 2,
        explain:
          "<code>if</code> là từ khóa dùng để kiểm tra điều kiện trong Python.",
      },
      {
        prompt: "Sau câu lệnh <code>if</code>, <code>for</code> hoặc <code>def</code> trong Python cần có gì?",
        options: [
          "Dấu chấm phẩy <code>;</code>",
          "Dấu hai chấm <code>:</code>",
          "Dấu phẩy <code>,</code>",
          "Dấu gạch chéo <code>/</code>",
        ],
        answer: 1,
        explain:
          "Các câu lệnh mở khối như <code>if</code>, <code>for</code>, <code>while</code>, <code>def</code> cần có dấu <code>:</code> ở cuối.",
      },
      {
        prompt: "Muốn lặp 5 lần theo số đếm, cú pháp nào đúng hơn?",
        options: [
          "<code>for i in range(5):</code>",
          "<code>repeat i to 5</code>",
          "<code>loop(5)</code>",
          "<code>for i = 1..5</code>",
        ],
        answer: 0,
        explain:
          "<code>for i in range(5):</code> là cú pháp quen thuộc để lặp theo số lần trong Python.",
      },
      {
        prompt: "Từ khóa nào dùng để khai báo hàm trong Python?",
        options: [
          "<code>func</code>",
          "<code>function</code>",
          "<code>define</code>",
          "<code>def</code>",
        ],
        answer: 3,
        explain:
          "<code>def</code> mở đầu cho phần khai báo hàm trong Python.",
      },
      {
        prompt: "Điều gì rất quan trọng để Python hiểu đúng khối lệnh?",
        options: [
          "Viết hoa toàn bộ từ khóa",
          "Thụt lề đúng",
          "Có dấu chấm phẩy ở cuối mọi dòng",
          "Đặt tên biến bằng số",
        ],
        answer: 1,
        explain:
          "Python dùng thụt lề để xác định khối lệnh, nên viết sai indentation sẽ dễ lỗi.",
      },
    ],
  },
  "sql-database": {
    title: "Trắc nghiệm SQL & Cơ sở dữ liệu",
    description:
      "Luyện các lệnh SQL nền tảng như SELECT, INSERT, UPDATE, DELETE và các khái niệm database cơ bản.",
    iconId: "icon-database",
    iconClass: "icon-shell--emerald",
    lessonUrl: "sql-database.html",
    lessonLabel: "Bài SQL & DB",
    questions: [
      {
        prompt: "Lệnh nào dùng để lấy dữ liệu từ bảng?",
        options: [
          "<code>SELECT</code>",
          "<code>SHOW</code>",
          "<code>OPEN</code>",
          "<code>PICK</code>",
        ],
        answer: 0,
        explain:
          "<code>SELECT</code> là lệnh truy vấn để đọc dữ liệu từ một hay nhiều bảng.",
      },
      {
        prompt: "Mệnh đề nào giúp lọc bản ghi theo điều kiện?",
        options: [
          "<code>ORDER BY</code>",
          "<code>GROUP BY</code>",
          "<code>WHERE</code>",
          "<code>VALUES</code>",
        ],
        answer: 2,
        explain:
          "<code>WHERE</code> giới hạn các dòng được chọn hoặc cập nhật theo điều kiện.",
      },
      {
        prompt: "Lệnh nào dùng để thêm một bản ghi mới vào bảng?",
        options: [
          "<code>ADD ROW</code>",
          "<code>INSERT</code>",
          "<code>CREATE</code>",
          "<code>APPEND</code>",
        ],
        answer: 1,
        explain:
          "<code>INSERT</code> thêm dữ liệu mới vào bảng, thường đi cùng <code>INTO</code> và <code>VALUES</code>.",
      },
      {
        prompt: "Lệnh nào dùng để sửa dữ liệu đã có?",
        options: [
          "<code>EDIT</code>",
          "<code>ALTER</code>",
          "<code>UPDATE</code>",
          "<code>CHANGE</code>",
        ],
        answer: 2,
        explain:
          "<code>UPDATE</code> chỉnh sửa bản ghi hiện có; nên đi kèm <code>WHERE</code> để tránh sửa toàn bảng.",
      },
      {
        prompt: "Nếu muốn xóa dữ liệu trong bảng theo điều kiện, em dùng:",
        options: [
          "<code>DELETE</code>",
          "<code>REMOVE ALL</code>",
          "<code>DROP</code>",
          "<code>TRUNCATE COLUMN</code>",
        ],
        answer: 0,
        explain:
          "<code>DELETE</code> xóa bản ghi; <code>DROP</code> là xóa cả bảng/cấu trúc.",
      },
      {
        prompt: "Khóa chính (Primary Key) có ý nghĩa gần đúng nhất là gì?",
        options: [
          "Một cột có thể trùng nhiều giá trị",
          "Một cột chứa mô tả dài",
          "Một giá trị duy nhất để nhận diện bản ghi",
          "Một cột chỉ dùng cho ngày tháng",
        ],
        answer: 2,
        explain:
          "Primary Key dùng để nhận diện duy nhất từng bản ghi trong bảng.",
      },
      {
        prompt: "Mệnh đề nào dùng để sắp xếp dữ liệu?",
        options: [
          "<code>SORT BY</code>",
          "<code>ORDER BY</code>",
          "<code>ARRANGE</code>",
          "<code>RANK</code>",
        ],
        answer: 1,
        explain:
          "<code>ORDER BY</code> dùng để sắp xếp kết quả theo cột nào đó (ASC hoặc DESC).",
      },
      {
        prompt: "Khóa ngoài (Foreign Key) dùng để::",
        options: [
          "Xóa dữ liệu",
          "Kết nối hai bảng với nhau",
          "Mã hóa dữ liệu",
          "Sắp xếp dữ liệu",
        ],
        answer: 1,
        explain:
          "Foreign Key là tham chiếu đến Primary Key của bảng khác, dùng để kết nối các bảng.",
      },
      {
        prompt: "Hàm nào thường dùng để tính tổng trong SQL?",
        options: [
          "<code>TOTAL()</code>",
          "<code>SUM()</code>",
          "<code>ADD()</code>",
          "<code>COUNT()</code>",
        ],
        answer: 1,
        explain:
          "<code>SUM()</code> tính tổng giá trị trong một cột, <code>COUNT()</code> đếm số dòng.",
      },
      {
        prompt: "Mệnh đề nào dùng để lọc kết quả của hàm tổng hợp?",
        options: [
          "<code>WHERE</code>",
          "<code>HAVING</code>",
          "<code>FILTER</code>",
          "<code>SELECT</code>",
        ],
        answer: 1,
        explain:
          "<code>HAVING</code> lọc kết quả của các hàm tổng hợp như SUM, COUNT, AVG.",
      },
    ],
  },
  network: {
    title: "Trắc nghiệm Mạng máy tính",
    description:
      "Ôn lại các khái niệm như DNS, HTTP/HTTPS, LAN, router, firewall và địa chỉ IP.",
    iconId: "icon-network",
    iconClass: "icon-shell--cyan",
    lessonUrl: "network.html",
    lessonLabel: "Bài Mạng máy tính",
    questions: [
      {
        prompt: "DNS thường có nhiệm vụ gì?",
        options: [
          "Mã hóa ổ cứng",
          "Chuyển tên miền thành địa chỉ IP",
          "Gửi email",
          "Tăng tốc CPU",
        ],
        answer: 1,
        explain:
          "DNS giúp phân giải tên miền như <code>example.com</code> sang địa chỉ IP để máy tính truy cập.",
      },
      {
        prompt: "Điểm khác biệt quan trọng nhất của HTTPS so với HTTP là gì?",
        options: [
          "HTTPS chỉ dùng cho game",
          "HTTPS không cần Internet",
          "HTTPS có mã hóa dữ liệu truyền",
          "HTTPS chỉ chạy trong LAN",
        ],
        answer: 2,
        explain:
          "HTTPS bổ sung lớp mã hóa giúp truyền dữ liệu an toàn hơn so với HTTP.",
      },
      {
        prompt:
          "Thiết bị nào thường dùng để kết nối nhiều mạng với nhau và định tuyến gói tin?",
        options: ["Monitor", "Router", "Keyboard", "Scanner"],
        answer: 1,
        explain:
          "Router là thiết bị định tuyến, giúp kết nối các mạng và chuyển tiếp gói tin.",
      },
      {
        prompt: "LAN là viết tắt của loại mạng nào?",
        options: [
          "Mạng diện rộng toàn cầu",
          "Mạng cục bộ trong phạm vi nhỏ",
          "Mạng vệ tinh",
          "Mạng chuyên cho điện thoại",
        ],
        answer: 1,
        explain:
          "LAN là Local Area Network, thường dùng trong lớp học, văn phòng hay gia đình.",
      },
      {
        prompt: "Firewall thường được dùng để làm gì?",
        options: [
          "Chỉnh màu màn hình",
          "Lọc và kiểm soát lưu lượng mạng",
          "Lưu trữ ảnh",
          "Tăng dung lượng RAM",
        ],
        answer: 1,
        explain:
          "Firewall giúp kiểm soát truy cập và chặn lưu lượng mạng không mong muốn.",
      },
      {
        prompt: "Địa chỉ IP dùng để:",
        options: [
          "Đặt tên file Word",
          "Xác định thiết bị trong mạng",
          "Tạo mật khẩu",
          "Thay thế hệ điều hành",
        ],
        answer: 1,
        explain:
          "IP là địa chỉ logic để nhận diện thiết bị khi giao tiếp trên mạng.",
      },
      {
        prompt: "Giao thức nào thường dùng để gửi email?",
        options: [
          "<code>FTP</code>",
          "<code>SMTP</code>",
          "<code>HTTP</code>",
          "<code>DNS</code>",
        ],
        answer: 1,
        explain:
          "SMTP là giao thức để gửi thư điện tử từ máy khách đến máy chủ mail.",
      },
      {
        prompt: "WAN là viết tắt của:",
        options: [
          "Mạng cục bộ trong phạm vi nhỏ",
          "Mạng diện rộng toàn cầu",
          "Mạng không dây",
          "Mạng ảo",
        ],
        answer: 1,
        explain:
          "WAN (Wide Area Network) là mạng diện rộng, có thể bao trùm cả quốc gia hoặc thế giới.",
      },
      {
        prompt: "Giao thức nào thường dùng để tải file từ server?",
        options: ["HTTP", "FTP", "SMTP", "DNS"],
        answer: 1,
        explain:
          "FTP (File Transfer Protocol) là giao thức để tải hoặc tải lên file trên server.",
      },
      {
        prompt: "Bit là đơn vị cơ bản của thông tin trong máy tính?",
        options: [
          "Sai, byte là đơn vị cơ bản",
          "Đúng, bit là 0 hoặc 1",
          "Sai, dùng KB",
          "Đúng, từ bit thì tạo hết",
        ],
        answer: 1,
        explain: "Bit là đơn vị cơ bản (0 hoặc 1); 8 bit = 1 byte.",
      },
    ],
  },
  informatics: {
    title: "Trắc nghiệm Trọng tâm Tin 12",
    description:
      "Tổng hợp nhanh các khái niệm trung tâm như website, trình duyệt, client-server, dữ liệu và an toàn thông tin.",
    iconId: "icon-monitor",
    iconClass: "icon-shell--slate",
    lessonUrl: "informatics.html",
    lessonLabel: "Bài Trọng tâm Tin 12",
    questions: [
      {
        prompt: "Phần mềm nào thường dùng để mở và xem trang web?",
        options: [
          "Trình duyệt",
          "Bộ gõ",
          "Máy nén file",
          "Trình soạn thảo ảnh",
        ],
        answer: 0,
        explain:
          "Trình duyệt như Chrome, Edge, Firefox dùng để truy cập và hiển thị website.",
      },
      {
        prompt: "Mô tả nào đúng hơn về website?",
        options: [
          "Chỉ là một ảnh duy nhất",
          "Một tập hợp nhiều trang web liên quan",
          "Một phần cứng mạng",
          "Một loại cáp kết nối",
        ],
        answer: 1,
        explain:
          "Website thường gồm nhiều webpage liên kết với nhau theo cùng chủ đề hoặc mục đích.",
      },
      {
        prompt: "Cơ sở dữ liệu thường dùng để:",
        options: [
          "Chỉ phát nhạc",
          "Lưu trữ dữ liệu có tổ chức",
          "Thay đổi màn hình nền",
          "Chạy trò chơi 3D",
        ],
        answer: 1,
        explain:
          "Database giúp lưu trữ và quản lý dữ liệu theo bảng, bản ghi, trường.",
      },
      {
        prompt: "Trong mô hình client-server, máy chủ (server) thường làm gì?",
        options: [
          "Gửi yêu cầu đến client",
          "Nhận và trả lời yêu cầu từ client",
          "Chỉ dùng để in tài liệu",
          "Chỉ là bộ nhớ USB",
        ],
        answer: 1,
        explain:
          "Client gửi yêu cầu, server xử lý và trả về dữ liệu/kết quả phù hợp.",
      },
      {
        prompt: "Mật khẩu mạnh nên có đặc điểm nào?",
        options: [
          "Ngắn và dễ đoán",
          "Giống ngày sinh",
          "Kết hợp chữ, số, ký tự đặc biệt và không lặp lại",
          "Chỉ gồm một chữ cái",
        ],
        answer: 2,
        explain:
          "Mật khẩu mạnh nên đủ dài, khó đoán và không trùng lặp giữa các tài khoản quan trọng.",
      },
      {
        prompt: "Lưu trữ đám mây (cloud storage) nghĩa là gì?",
        options: [
          "Lưu file trên giấy",
          "Lưu dữ liệu trên máy chủ từ xa qua Internet",
          "Chỉ lưu trên RAM",
          "Tắt kết nối mạng",
        ],
        answer: 1,
        explain:
          "Cloud storage là lưu dữ liệu trên hệ thống máy chủ từ xa, có thể truy cập qua Internet.",
      },
      {
        prompt: "API là gì?",
        options: [
          "Một loại phần mềm virus",
          "Giao diện giúp các ứng dụng giao tiếp với nhau",
          "Một loại chuột máy tính",
          "Hệ điều hành Windows",
        ],
        answer: 1,
        explain:
          "API (Application Programming Interface) cho phép các chương trình tương tác với nhau.",
      },
      {
        prompt: "Log in với tài khoản và mật khẩu là biện pháp:",
        options: [
          "Tăng tốc độ Internet",
          "Bảo mật xác thực danh tính",
          "Chỉnh sửa website",
          "Sao lưu file",
        ],
        answer: 1,
        explain:
          "Xác thực bằng tài khoản/mật khẩu giúp đảm bảo chỉ người có quyền mới truy cập.",
      },
      {
        prompt: "Backup dữ liệu có ý nghĩa gì?",
        options: [
          "Xóa dữ liệu cũ",
          "Sao lưu dữ liệu để tránh mất mát nếu có sự cố",
          "Tăng tốc ổ cứng",
          "Thay đổi mật khẩu",
        ],
        answer: 1,
        explain:
          "Sao lưu (backup) là tạo bản sao dữ liệu để bảo vệ trường hợp xảy ra sự cố mất dữ liệu.",
      },
      {
        prompt: "Malware là loại phần mềm:",
        options: [
          "Để chỉnh sửa ảnh",
          "Có hại, cố tình gây hại cho hệ thống",
          "Để tăng bộ nhớ RAM",
          "Để tải video",
        ],
        answer: 1,
        explain:
          "Malware (phần mềm độc hại) như virus, trojan có khả năng xâm hại hệ thống.",
      },
    ],
  },
  "exam-review": {
    title: "Trắc nghiệm Ôn thi Tin 12",
    description:
      "Một bộ câu hỏi tổng hợp ngắn để luyện phản xạ trước khi kiểm tra hoặc ôn cuối chương.",
    iconId: "icon-clipboard",
    iconClass: "icon-shell--orange",
    lessonUrl: "exam-review.html",
    lessonLabel: "Bài Ôn thi Tin 12",
    questions: [
      {
        prompt: "Thẻ semantic nào phù hợp nhất cho thanh điều hướng của trang?",
        options: [
          "<code>&lt;nav&gt;</code>",
          "<code>&lt;main&gt;</code>",
          "<code>&lt;img&gt;</code>",
          "<code>&lt;aside&gt;</code>",
        ],
        answer: 0,
        explain:
          "<code>&lt;nav&gt;</code> biểu diễn vùng điều hướng, thường chứa menu hoặc liên kết chính.",
      },
      {
        prompt: "Thẻ nào tạo danh sách có thứ tự 1, 2, 3...?",
        options: [
          "<code>&lt;ul&gt;</code>",
          "<code>&lt;ol&gt;</code>",
          "<code>&lt;li&gt;</code>",
          "<code>&lt;dl&gt;</code>",
        ],
        answer: 1,
        explain:
          "<code>&lt;ol&gt;</code> là ordered list, tức danh sách có thứ tự.",
      },
      {
        prompt: "Trong CSS, khoảng cách ngoài phần tử là:",
        options: [
          "<code>padding</code>",
          "<code>margin</code>",
          "<code>border</code>",
          "<code>height</code>",
        ],
        answer: 1,
        explain:
          "Khoảng cách ngoài phần tử là <code>margin</code>; trong là <code>padding</code>.",
      },
      {
        prompt:
          "Sự kiện nào trong JavaScript thường được dùng khi nhấn vào nút?",
        options: [
          "<code>hover</code>",
          "<code>change</code>",
          "<code>click</code>",
          "<code>scroll</code>",
        ],
        answer: 2,
        explain: "Nút bấm thường xử lý bằng sự kiện <code>click</code>.",
      },
      {
        prompt:
          "Trong SQL, muốn lọc dữ liệu theo điều kiện em dùng mệnh đề nào?",
        options: [
          "<code>FROM</code>",
          "<code>WHERE</code>",
          "<code>VALUES</code>",
          "<code>TABLE</code>",
        ],
        answer: 1,
        explain: "<code>WHERE</code> là mệnh đề lọc dữ liệu theo điều kiện.",
      },
      {
        prompt: "Ưu điểm chính của HTTPS là gì?",
        options: [
          "Không cần tên miền",
          "Có mã hóa bảo mật khi truyền dữ liệu",
          "Chỉ dùng được trong trường học",
          "Nhanh hơn mọi giao thức khác",
        ],
        answer: 1,
        explain:
          "HTTPS giúp mã hóa dữ liệu trao đổi giữa trình duyệt và máy chủ, tăng mức an toàn.",
      },
      {
        prompt: "Thuộc tính nào dùng để tạo viền trong CSS?",
        options: [
          "<code>frame</code>",
          "<code>border</code>",
          "<code>line</code>",
          "<code>edge</code>",
        ],
        answer: 1,
        explain: "<code>border</code> tạo viền xung quanh phần tử HTML.",
      },
      {
        prompt: "Hàm nào thường dùng để lấy chiều dài chuỗi trong JavaScript?",
        options: [
          "<code>len()</code>",
          "<code>length()</code>",
          "<code>.length</code>",
          "<code>size()</code>",
        ],
        answer: 2,
        explain:
          "<code>.length</code> là thuộc tính để lấy số ký tự của một chuỗi hoặc số phần tử của một mảng.",
      },
      {
        prompt: "Trong Python, hàm nào dùng để nhập dữ liệu từ bàn phím?",
        options: [
          "<code>print()</code>",
          "<code>scan()</code>",
          "<code>input()</code>",
          "<code>read()</code>",
        ],
        answer: 2,
        explain:
          "<code>input()</code> nhận dữ liệu người dùng nhập từ bàn phím, thường trả về chuỗi.",
      },
      {
        prompt: "Meta tag nào thường dùng để khai báo bộ ký tự UTF-8?",
        options: [
          '<code>&lt;meta charset="UTF-8"&gt;</code>',
          '<code>&lt;meta encoding="UTF-8"&gt;</code>',
          '<code>&lt;meta code="UTF-8"&gt;</code>',
          "<code>&lt;charset UTF-8&gt;</code>",
        ],
        answer: 0,
        explain:
          '<code>&lt;meta charset="UTF-8"&gt;</code> khai báo rõ mã hóa ký tự dùng trong trang.',
      },
    ],
  },
  summary: {
    title: "Trắc nghiệm Ghi nhớ nhanh",
    description:
      "Bộ câu hỏi ngắn theo kiểu cheat sheet để kiểm tra xem em còn nhớ các ý cốt lõi nhất hay không.",
    iconId: "icon-flash",
    iconClass: "icon-shell--gold",
    lessonUrl: "summary.html",
    lessonLabel: "Bài Ghi nhớ nhanh",
    questions: [
      {
        prompt: "Dòng nào thường đứng đầu tài liệu HTML5?",
        options: [
          "<code>&lt;html&gt;</code>",
          "<code>&lt;body&gt;</code>",
          "<code>&lt;!DOCTYPE html&gt;</code>",
          "<code>&lt;meta charset=&quot;UTF-8&quot;&gt;</code>",
        ],
        answer: 2,
        explain:
          "Khai báo <code>&lt;!DOCTYPE html&gt;</code> thường nằm ở đầu tài liệu HTML5.",
      },
      {
        prompt: "Trong Flexbox, thuộc tính nào thường căn theo trục chính?",
        options: [
          "<code>justify-content</code>",
          "<code>font-size</code>",
          "<code>z-index</code>",
          "<code>border-collapse</code>",
        ],
        answer: 0,
        explain:
          "<code>justify-content</code> căn các phần tử dọc theo trục chính của flex container.",
      },
      {
        prompt: "Lệnh nào thường in dữ liệu ra console trong JavaScript?",
        options: [
          "<code>alert.log()</code>",
          "<code>document.write()</code>",
          "<code>console.log()</code>",
          "<code>print.console()</code>",
        ],
        answer: 2,
        explain:
          "<code>console.log()</code> rất hay dùng khi học JS để xem giá trị trong console.",
      },
      {
        prompt: "Trong Python, từ khóa nào dùng để khai báo hàm?",
        options: [
          "<code>function</code>",
          "<code>define</code>",
          "<code>def</code>",
          "<code>func</code>",
        ],
        answer: 2,
        explain:
          "<code>def</code> là từ khóa chuẩn để khai báo hàm trong Python.",
      },
      {
        prompt:
          "Muốn sắp xếp dữ liệu giảm dần trong SQL, từ khóa nào hay đi cùng <code>ORDER BY</code>?",
        options: [
          "<code>ASC</code>",
          "<code>DESC</code>",
          "<code>LOW</code>",
          "<code>DROP</code>",
        ],
        answer: 1,
        explain:
          "<code>DESC</code> là viết tắt của descending, tức sắp xếp giảm dần.",
      },
      {
        prompt: "Giao thức nào thường liên quan đến gửi email?",
        options: ["SMTP", "DNS", "FTP", "LAN"],
        answer: 0,
        explain: "SMTP là giao thức thường dùng để gửi thư điện tử.",
      },
      {
        prompt:
          "Khác biệt đúng hơn giữa <code>strong</code> và <code>b</code> là gì?",
        options: [
          "Không có khác biệt nào",
          "<code>strong</code> mang ý nghĩa nhấn mạnh mạnh hơn về mặt ngữ nghĩa",
          "<code>b</code> là thẻ dành cho ảnh",
          "<code>strong</code> chỉ dùng trong CSS",
        ],
        answer: 1,
        explain:
          "<code>strong</code> không chỉ làm đậm mà còn mang ý nghĩa nhấn mạnh về mặt ngữ nghĩa.",
      },
      {
        prompt: "Thuộc tính nào dùng để thay đổi kích thước phần tử?",
        options: [
          "<code>scale</code>",
          "<code>width</code> và <code>height</code>",
          "<code>size</code>",
          "<code>dimension</code>",
        ],
        answer: 1,
        explain:
          "<code>width</code> (rộng) và <code>height</code> (cao) dùng để xác định kích thước.",
      },
      {
        prompt: "Thẻ nào dùng để nhúng một trang web vào trang hiện tại?",
        options: [
          "<code>&lt;embed&gt;</code>",
          "<code>&lt;iframe&gt;</code>",
          "<code>&lt;frame&gt;</code>",
          "<code>&lt;include&gt;</code>",
        ],
        answer: 1,
        explain:
          "<code>&lt;iframe&gt;</code> dùng để nhúng một trang HTML khác hoặc nội dung từ nguồn khác.",
      },
      {
        prompt: "Selector nào chọn tất cả phần tử trên trang?",
        options: [
          "<code>*</code>",
          "<code>#all</code>",
          "<code>.all</code>",
          "<code>all</code>",
        ],
        answer: 0,
        explain:
          "<code>*</code> là universal selector, chọn tất cả phần tử trong tài liệu.",
      },
    ],
  },
};

// Adicionar full-quiz após QUIZ_BANK estar completo
QUIZ_BANK["full-quiz"] = {
  title: "Trắc nghiệm Toàn bộ Tin 12",
  description:
    "Kiểm tra tổng hợp đầy đủ tất cả câu hỏi từ 11 chương. Chấm điểm tự động và giải thích chi tiết cho mỗi câu.",
  iconId: "icon-bulb",
  iconClass: "icon-shell--gold",
  lessonUrl: "index.html",
  lessonLabel: "Trang chính",
  questions: [
    // HTML Tags
    ...QUIZ_BANK["html-tags"].questions,
    // HTML Advanced
    ...QUIZ_BANK["html-advanced"].questions,
    // CSS Layout
    ...QUIZ_BANK["css-layout"].questions,
    // CSS Advanced
    ...QUIZ_BANK["css-advanced"].questions,
    // JavaScript Basics
    ...QUIZ_BANK["javascript-basics"].questions,
    // Python Basics
    ...QUIZ_BANK["python-basics"].questions,
    // SQL Database
    ...QUIZ_BANK["sql-database"].questions,
    // Network
    ...QUIZ_BANK.network.questions,
    // Informatics
    ...QUIZ_BANK.informatics.questions,
    // Exam Review
    ...QUIZ_BANK["exam-review"].questions,
    // Summary
    ...QUIZ_BANK.summary.questions,
  ],
};

function renderQuizIcon(iconId, iconClass) {
  return `
    <span class="icon-shell icon-shell--sm ${iconClass}" aria-hidden="true">
      <svg class="ui-icon">
        <use href="#${iconId}"></use>
      </svg>
    </span>
  `;
}

function renderQuizPageMarkup(topicKey, quizData) {
  const questionItems = quizData.questions
    .map(function (question, index) {
      const optionsMarkup = question.options
        .map(function (option, optionIndex) {
          const optionLetter = String.fromCharCode(65 + optionIndex);

          return `
            <label class="quiz-option" data-quiz-option>
              <input type="radio" name="${topicKey}-q${index}" value="${optionIndex}" />
              <span class="quiz-option-letter">${optionLetter}</span>
              <span class="quiz-option-text">${option}</span>
            </label>
          `;
        })
        .join("");

      return `
        <article class="quiz-question" data-quiz-question>
          <h3>Câu ${index + 1}. ${question.prompt}</h3>
          <div class="quiz-options">
            ${optionsMarkup}
          </div>
          <div class="quiz-feedback" data-quiz-feedback>
            Chọn 1 đáp án rồi bấm <strong>Chấm điểm</strong> để xem giải thích.
          </div>
        </article>
      `;
    })
    .join("");

  return `
    <div class="page-actions">
      <a class="back-home" href="index.html">
        ${renderQuizIcon("icon-home", "icon-shell--teal")}
        <span>Trang chính</span>
      </a>
      <a class="back-home back-lesson" href="${quizData.lessonUrl}">
        ${renderQuizIcon(quizData.iconId, quizData.iconClass)}
        <span>${quizData.lessonLabel}</span>
      </a>
    </div>

    <section class="section quiz-section" id="quiz-${topicKey}">
      <div class="section-head">
        <h2>
          <span class="section-title">
            ${renderQuizIcon(quizData.iconId, quizData.iconClass)}
            <span>${quizData.title}</span>
          </span>
        </h2>
        <p>${quizData.description}</p>
      </div>

      <div class="quiz-meta">
        <div class="quiz-stat">
          <strong>${quizData.questions.length} câu hỏi</strong>
          <span>Mỗi câu có 1 đáp án đúng</span>
        </div>
        <div class="quiz-stat">
          <strong>Tự chấm điểm</strong>
          <span>Xem ngay đáp án đúng và giải thích</span>
        </div>
        <div class="quiz-stat">
          <strong>Luyện để nhớ</strong>
          <span>Làm lại nhiều lần để ghi nhớ tốt hơn</span>
        </div>
      </div>

      <div class="quiz-content">
        <form class="quiz-form" data-quiz-form novalidate>
          ${questionItems}
          <div class="quiz-actions">
            <button class="quiz-submit" type="submit">Chấm điểm</button>
            <button class="quiz-reset" type="button" data-quiz-reset>Làm lại</button>
          </div>
        </form>
        <div class="quiz-result" data-quiz-result aria-live="polite"></div>
      </div>
    </section>
  `;
}

function resetQuizState(form, result, shouldResetInputs) {
  if (shouldResetInputs) {
    form.reset();
  }

  form.dataset.graded = "false";

  form.querySelectorAll("[data-quiz-question]").forEach(function (question) {
    question.classList.remove("is-correct", "is-incorrect", "is-unanswered");

    question.querySelectorAll("[data-quiz-option]").forEach(function (option) {
      option.classList.remove("is-correct-choice", "is-wrong-choice");
    });

    const feedback = question.querySelector("[data-quiz-feedback]");
    if (feedback) {
      feedback.innerHTML =
        "Chọn 1 đáp án rồi bấm <strong>Chấm điểm</strong> để xem giải thích.";
    }
  });

  result.classList.remove("is-visible");
  result.innerHTML = "";
}

function getQuizResultMessage(percent) {
  if (percent >= 90) {
    return "Nắm bài rất chắc. Có thể chuyển sang phần tiếp theo hoặc luyện lại để nhớ lâu hơn.";
  }

  if (percent >= 70) {
    return "Kết quả khá tốt. Chỉ cần xem lại vài ý dễ nhầm là ổn.";
  }

  if (percent >= 50) {
    return "Đã nhớ được phần nền tảng, nhưng nên mở lại bài học và làm thêm 1 lượt nữa.";
  }

  return "Cần xem lại lý thuyết trước khi làm lại. Hãy đọc lại bài học và ghi chú những ý quan trọng.";
}

function gradeQuiz(form, result, quizData, topicKey) {
  let score = 0;
  let answeredCount = 0;
  const missedQuestions = [];

  form
    .querySelectorAll("[data-quiz-question]")
    .forEach(function (questionEl, index) {
      const questionData = quizData.questions[index];
      const selectedInput = form.querySelector(
        'input[name="' + topicKey + "-q" + index + '"]:checked',
      );
      const feedback = questionEl.querySelector("[data-quiz-feedback]");
      const optionElements = Array.from(
        questionEl.querySelectorAll("[data-quiz-option]"),
      );

      questionEl.classList.remove(
        "is-correct",
        "is-incorrect",
        "is-unanswered",
      );

      optionElements.forEach(function (optionEl, optionIndex) {
        optionEl.classList.remove("is-correct-choice", "is-wrong-choice");

        if (optionIndex === questionData.answer) {
          optionEl.classList.add("is-correct-choice");
        }
      });

      if (!selectedInput) {
        questionEl.classList.add("is-unanswered");
        missedQuestions.push(index + 1);
        feedback.innerHTML =
          "Chưa chọn đáp án. Đáp án đúng là <strong>" +
          String.fromCharCode(65 + questionData.answer) +
          "</strong>. " +
          questionData.explain;
        return;
      }

      answeredCount += 1;
      const selectedIndex = Number(selectedInput.value);

      if (selectedIndex === questionData.answer) {
        score += 1;
        questionEl.classList.add("is-correct");
        feedback.innerHTML = "<strong>Đúng.</strong> " + questionData.explain;
        return;
      }

      questionEl.classList.add("is-incorrect");
      missedQuestions.push(index + 1);
      optionElements[selectedIndex].classList.add("is-wrong-choice");
      feedback.innerHTML =
        "Sai. Đáp án đúng là <strong>" +
        String.fromCharCode(65 + questionData.answer) +
        "</strong>. " +
        questionData.explain;
    });

  form.dataset.graded = "true";

  const totalQuestions = quizData.questions.length;
  const percent = Math.round((score / totalQuestions) * 100);
  const missedLabel =
    missedQuestions.length > 0
      ? "Câu cần xem lại: " + missedQuestions.join(", ") + "."
      : "Bạn đã đúng toàn bộ các câu trong lượt này.";
  const answeredLabel =
    answeredCount < totalQuestions
      ? "Bạn còn bỏ trống " + (totalQuestions - answeredCount) + " câu."
      : "Bạn đã trả lời đủ tất cả các câu.";

  result.innerHTML = `
    <div class="quiz-score">${score}/${totalQuestions}</div>
    <strong>${percent}% câu đúng</strong>
    <p>${getQuizResultMessage(percent)}</p>
    <p>${answeredLabel}</p>
    <p>${missedLabel}</p>
  `;
  result.classList.add("is-visible");
}

function initializeQuizPages() {
  document.querySelectorAll("[data-quiz-page]").forEach(function (mount) {
    const topicKey = mount.dataset.quizPage;
    const quizData = QUIZ_BANK[topicKey];

    if (!quizData) {
      mount.innerHTML =
        '<div class="quiz-empty">Không tìm thấy bộ câu hỏi cho trang trắc nghiệm này.</div>';
      return;
    }

    mount.innerHTML = renderQuizPageMarkup(topicKey, quizData);

    const form = mount.querySelector("[data-quiz-form]");
    const result = mount.querySelector("[data-quiz-result]");
    const resetButton = mount.querySelector("[data-quiz-reset]");

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      gradeQuiz(form, result, quizData, topicKey);
    });

    form.addEventListener("change", function () {
      if (form.dataset.graded === "true") {
        resetQuizState(form, result, false);
      }
    });

    resetButton.addEventListener("click", function () {
      resetQuizState(form, result, true);
    });
  });
}

document.addEventListener("DOMContentLoaded", initializeQuizPages);
