const ICON_SPRITE = `
  <svg
    id="ui-icon-sprite"
    class="icon-sprite"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
  >
    <symbol id="icon-home" viewBox="0 0 24 24">
      <path d="M3 10.5 12 3l9 7.5" />
      <path d="M5 9.5V20h14V9.5" />
      <path d="M9.5 20v-5h5v5" />
    </symbol>

    <symbol id="icon-html" viewBox="0 0 24 24">
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
      <path d="M14 3v5h5" />
      <path d="m10 13-2 2 2 2" />
      <path d="m14 13 2 2-2 2" />
    </symbol>

    <symbol id="icon-layout" viewBox="0 0 24 24">
      <rect x="4" y="4" width="16" height="16" rx="2.5" />
      <path d="M4 9h16" />
      <path d="M9 9v11" />
      <path d="M9 14h11" />
    </symbol>

    <symbol id="icon-palette" viewBox="0 0 24 24">
      <path d="M12 3a9 9 0 1 0 0 18h1.2a2.3 2.3 0 0 0 0-4.6h-.5a1.7 1.7 0 0 1-1.7-1.7A1.7 1.7 0 0 1 12.7 13H15a6 6 0 0 0 0-12Z" />
      <circle cx="7.5" cy="10.5" r="1" />
      <circle cx="9.5" cy="7.5" r="1" />
      <circle cx="13.5" cy="7.5" r="1" />
    </symbol>

    <symbol id="icon-grid" viewBox="0 0 24 24">
      <rect x="4" y="4" width="6" height="6" rx="1.5" />
      <rect x="14" y="4" width="6" height="6" rx="1.5" />
      <rect x="4" y="14" width="6" height="6" rx="1.5" />
      <rect x="14" y="14" width="6" height="6" rx="1.5" />
    </symbol>

    <symbol id="icon-js" viewBox="0 0 24 24">
      <rect x="3.5" y="4.5" width="17" height="15" rx="2.5" />
      <path d="m7 10 3 2-3 2" />
      <path d="M13 14h4" />
    </symbol>

    <symbol id="icon-python" viewBox="0 0 24 24">
      <path d="M9 4h4a3 3 0 0 1 3 3v2H9a2 2 0 0 0-2 2v2H5V8a4 4 0 0 1 4-4Z" />
      <path d="M15 20h-4a3 3 0 0 1-3-3v-2h7a2 2 0 0 0 2-2v-2h2v5a4 4 0 0 1-4 4Z" />
      <circle cx="10" cy="7.5" r="1" />
      <circle cx="14" cy="16.5" r="1" />
    </symbol>

    <symbol id="icon-database" viewBox="0 0 24 24">
      <ellipse cx="12" cy="6" rx="7" ry="3" />
      <path d="M5 6v12c0 1.7 3.1 3 7 3s7-1.3 7-3V6" />
      <path d="M5 12c0 1.7 3.1 3 7 3s7-1.3 7-3" />
      <path d="M5 18c0 1.7 3.1 3 7 3s7-1.3 7-3" />
    </symbol>

    <symbol id="icon-network" viewBox="0 0 24 24">
      <circle cx="6" cy="12" r="2" />
      <circle cx="18" cy="7" r="2" />
      <circle cx="18" cy="17" r="2" />
      <path d="M8 12h4" />
      <path d="m14 10 2-2" />
      <path d="m14 14 2 2" />
    </symbol>

    <symbol id="icon-monitor" viewBox="0 0 24 24">
      <rect x="4" y="5" width="16" height="11" rx="2" />
      <path d="M12 16v3" />
      <path d="M9 19h6" />
      <path d="M8 10h8" />
      <path d="M12 8v4" />
    </symbol>

    <symbol id="icon-clipboard" viewBox="0 0 24 24">
      <rect x="6" y="5" width="12" height="16" rx="2" />
      <path d="M9 5.5h6" />
      <path d="M10 11h4" />
      <path d="m10 15 1.5 1.5 3-3" />
    </symbol>

    <symbol id="icon-flash" viewBox="0 0 24 24">
      <path d="M13 2 5 13h5l-1 9 8-11h-5l1-9Z" />
    </symbol>

    <symbol id="icon-stack" viewBox="0 0 24 24">
      <path d="m12 4 8 4-8 4-8-4 8-4Z" />
      <path d="m4 12 8 4 8-4" />
      <path d="m4 16 8 4 8-4" />
    </symbol>

    <symbol id="icon-bulb" viewBox="0 0 24 24">
      <path d="M8 14c-1.3-1-2-2.5-2-4a6 6 0 1 1 12 0c0 1.5-.7 3-2 4l-1 2H9l-1-2Z" />
      <path d="M9 18h6" />
      <path d="M10 21h4" />
    </symbol>
  </svg>
`;

function injectIconSprite() {
  if (!document.body || document.getElementById("ui-icon-sprite")) {
    return;
  }

  document.body.insertAdjacentHTML("afterbegin", ICON_SPRITE);
}

function updateOutput(value) {
  const output = document.getElementById("input-output");
  if (!output) {
    return;
  }

  output.textContent = value ? "Bạn đã nhập: " + value : "";
}

function showAlert() {
  alert("Bạn đã nhấn nút! Đây là hành động của button.");
}

function initializePromoSliders() {
  document.querySelectorAll("[data-promo-slider]").forEach(function (slider) {
    const slides = Array.from(slider.querySelectorAll("[data-promo-slide]"));

    if (slides.length === 0) {
      return;
    }

    let currentIndex = slides.findIndex(function (slide) {
      return slide.classList.contains("is-active");
    });
    let autoPlayId = null;
    const interval = Number(slider.dataset.interval) || 3000;

    if (currentIndex < 0) {
      currentIndex = 0;
    }

    function setActiveSlide(nextIndex) {
      currentIndex = (nextIndex + slides.length) % slides.length;

      slides.forEach(function (slide, index) {
        const isActive = index === currentIndex;
        slide.classList.toggle("is-active", isActive);
        slide.setAttribute("aria-hidden", isActive ? "false" : "true");
      });
    }

    function stopAutoPlay() {
      if (autoPlayId) {
        clearInterval(autoPlayId);
        autoPlayId = null;
      }
    }

    function startAutoPlay() {
      if (slides.length < 2) {
        return;
      }

      stopAutoPlay();
      autoPlayId = window.setInterval(function () {
        setActiveSlide(currentIndex + 1);
      }, interval);
    }

    document.addEventListener("visibilitychange", function () {
      if (document.hidden) {
        stopAutoPlay();
      } else {
        startAutoPlay();
      }
    });

    setActiveSlide(currentIndex);
    startAutoPlay();
  });
}

injectIconSprite();

function initializeQuizPage() {
  const quizShell = document.querySelector("[data-quiz-page]");
  if (!quizShell) {
    return;
  }

  const quizId = quizShell.dataset.quizPage;
  const quizData = QUIZ_BANK[quizId];

  if (!quizData) {
    if (quizId === "full-quiz") {
      renderFullQuiz(quizShell);
    } else {
      quizShell.innerHTML =
        '<p style="color: #f59e0b; padding: 20px;">Không tìm thấy dữ liệu bộ quiz này.</p>';
    }
    return;
  }

  renderQuiz(quizShell, quizData, quizId);
}

function renderQuiz(container, quizData, quizId) {
  let currentQuestion = 0;
  let answered = {};
  let score = 0;

  function renderQuestion() {
    const q = quizData.questions[currentQuestion];
    const prevBtnHtml =
      currentQuestion > 0
        ? `<button class="btn btn-prev" onclick="window.quizInstance.previousQuestion()">← Câu trước</button>`
        : "";
    const nextBtnHtml =
      currentQuestion < quizData.questions.length - 1
        ? `<button class="btn btn-next" onclick="window.quizInstance.nextQuestion()">Câu kế tiếp →</button>`
        : `<button class="btn btn-submit" onclick="window.quizInstance.submitQuiz()">Nộp bài</button>`;

    container.innerHTML = `
      <div class="quiz-header">
        <h2>${quizData.title}</h2>
        <p class="quiz-progress">Câu ${currentQuestion + 1}/${quizData.questions.length}</p>
      </div>
      <div class="quiz-content">
        <div class="quiz-question">
          <p>${q.prompt}</p>
        </div>
        <div class="quiz-options">
          ${q.options
            .map(
              (opt, idx) => `
            <label class="quiz-option">
              <input type="radio" name="answer" value="${idx}" ${
                answered[currentQuestion] === idx ? "checked" : ""
              }>
              <span>${opt}</span>
            </label>
          `,
            )
            .join("")}
        </div>
        <div class="quiz-controls">
          ${prevBtnHtml}
          ${nextBtnHtml}
        </div>
      </div>
    `;

    const options = container.querySelectorAll('input[name="answer"]');
    options.forEach((opt) => {
      opt.addEventListener("change", function () {
        answered[currentQuestion] = parseInt(this.value);
      });
    });
  }

  function renderResult() {
    score = Object.keys(answered).filter(
      (idx) => answered[idx] === quizData.questions[idx].answer,
    ).length;

    const percentage = Math.round((score / quizData.questions.length) * 100);
    const resultColor =
      percentage >= 70 ? "#10b981" : percentage >= 50 ? "#f59e0b" : "#ef4444";

    container.innerHTML = `
      <div class="quiz-result">
        <h2>Kết quả</h2>
        <div class="result-score" style="border-color: ${resultColor}">
          <div class="score-number" style="color: ${resultColor}">${score}/${quizData.questions.length}</div>
          <div class="score-percent">${percentage}%</div>
        </div>
        <p class="result-feedback">${
          percentage >= 70
            ? "🎉 Tuyệt vời! Bạn hiểu bài rất tốt."
            : percentage >= 50
              ? "👍 Khá tốt, nhưng cần ôn thêm một chút."
              : "📚 Cần ôn lại bài này thêm chút nữa."
        }</p>
        <div class="result-details">
          ${quizData.questions
            .map(
              (q, idx) => `
            <div class="detail-item ${answered[idx] === q.answer ? "correct" : "wrong"}">
              <h4>Câu ${idx + 1}</h4>
              <p>${q.prompt}</p>
              <p class="detail-your-answer">Câu trả lời của bạn: ${
                answered[idx] !== undefined
                  ? q.options[answered[idx]]
                  : "<em>Chưa trả lời</em>"
              }</p>
              ${
                answered[idx] !== q.answer
                  ? `<p class="detail-correct">Đáp án đúng: ${q.options[q.answer]}</p>`
                  : ""
              }
              <p class="detail-explain">${q.explain}</p>
            </div>
          `,
            )
            .join("")}
        </div>
        <a href="${quizData.lessonUrl}" class="btn btn-lesson">← Quay về bài học</a>
      </div>
    `;
  }

  window.quizInstance = {
    nextQuestion: function () {
      if (currentQuestion < quizData.questions.length - 1) {
        currentQuestion++;
        renderQuestion();
      }
    },
    previousQuestion: function () {
      if (currentQuestion > 0) {
        currentQuestion--;
        renderQuestion();
      }
    },
    submitQuiz: function () {
      renderResult();
    },
  };

  renderQuestion();
}

function renderFullQuiz(container) {
  const allQuizzes = Object.keys(QUIZ_BANK).filter((k) => k !== "full-quiz");
  let currentQuizIdx = 0;
  let globalAnswers = {};
  let allResults = {};

  function startNextQuiz() {
    if (currentQuizIdx >= allQuizzes.length) {
      renderFinalResult();
      return;
    }

    const quizId = allQuizzes[currentQuizIdx];
    const quizData = QUIZ_BANK[quizId];
    currentQuizIdx++;

    let currentQ = 0;
    let answered = {};

    function renderQ() {
      const q = quizData.questions[currentQ];
      const nextBtn =
        currentQ < quizData.questions.length - 1
          ? `<button class="btn btn-next" onclick="window.fullQuizInstance.nextQ()">Câu kế tiếp →</button>`
          : `<button class="btn btn-submit" onclick="window.fullQuizInstance.submitQuiz()">Câu tiếp theo →</button>`;

      container.innerHTML = `
        <div class="quiz-header">
          <h2>${quizData.title}</h2>
          <p class="quiz-progress">Câu ${currentQ + 1}/${quizData.questions.length}</p>
        </div>
        <div class="quiz-content">
          <div class="quiz-question">
            <p>${q.prompt}</p>
          </div>
          <div class="quiz-options">
            ${q.options
              .map(
                (opt, idx) => `
              <label class="quiz-option">
                <input type="radio" name="answer" value="${idx}" ${
                  answered[currentQ] === idx ? "checked" : ""
                }>
                <span>${opt}</span>
              </label>
            `,
              )
              .join("")}
          </div>
          <div class="quiz-controls">
            ${nextBtn}
          </div>
        </div>
      `;

      const inputs = container.querySelectorAll('input[name="answer"]');
      inputs.forEach((inp) => {
        inp.addEventListener("change", function () {
          answered[currentQ] = parseInt(this.value);
        });
      });
    }

    window.fullQuizInstance = {
      nextQ: function () {
        if (currentQ < quizData.questions.length - 1) {
          currentQ++;
          renderQ();
        }
      },
      submitQuiz: function () {
        const score = Object.keys(answered).filter(
          (idx) => answered[idx] === quizData.questions[idx].answer,
        ).length;
        allResults[quizId] = { score, total: quizData.questions.length };
        for (let i = 0; i < quizData.questions.length; i++) {
          globalAnswers[quizId + "_" + i] = answered[i];
        }
        startNextQuiz();
      },
    };

    renderQ();
  }

  function renderFinalResult() {
    const totalScore = Object.values(allResults).reduce(
      (sum, r) => sum + r.score,
      0,
    );
    const totalQuestions = Object.values(allResults).reduce(
      (sum, r) => sum + r.total,
      0,
    );
    const percentage = Math.round((totalScore / totalQuestions) * 100);

    container.innerHTML = `
      <div class="quiz-result">
        <h2>Kết quả Toàn bộ Tin 12</h2>
        <div class="result-score">
          <div class="score-number">${totalScore}/${totalQuestions}</div>
          <div class="score-percent">${percentage}%</div>
        </div>
        <p class="result-feedback">${
          percentage >= 80
            ? "🏆 Xuất sắc! Bạn đã làm chủ toàn bộ kiến thức."
            : percentage >= 60
              ? "👍 Tốt! Hãy ôn thêm một chút."
              : "📚 Cần học lại toàn bộ."
        }</p>
        <div style="margin-top: 14px;">
          <p style="color: var(--muted); font-weight: 600; margin: 0 0 10px;">Chi tiết từng bộ quiz:</p>
          ${Object.entries(allResults)
            .map(
              ([qid, res]) =>
                `<p style="margin: 4px 0; color: #3f454b;">
                  <strong>${QUIZ_BANK[qid].title}:</strong> ${res.score}/${res.total}
                </p>`,
            )
            .join("")}
        </div>
        <a href="index.html" class="btn btn-lesson" style="margin-top: 18px;">← Quay về trang chính</a>
      </div>
    `;
  }

  startNextQuiz();
}

const LESSONS = [
  {
    id: "html-tags",
    title: "Thẻ HTML Cơ bản",
    type: "lesson",
    url: "html-tags.html",
    icon: "📄",
    keywords: ["html", "tag", "thẻ", "cơ bản"],
  },
  {
    id: "html-advanced",
    title: "HTML Nâng cao",
    type: "lesson",
    url: "html-advanced.html",
    icon: "📄",
    keywords: ["html", "semantic", "nâng cao", "accessibility"],
  },
  {
    id: "css-layout",
    title: "CSS Cơ bản",
    type: "lesson",
    url: "css-layout.html",
    icon: "🎨",
    keywords: ["css", "color", "padding", "margin", "cơ bản"],
  },
  {
    id: "css-advanced",
    title: "CSS Nâng cao",
    type: "lesson",
    url: "css-advanced.html",
    icon: "🎨",
    keywords: ["css", "flexbox", "grid", "nâng cao", "responsive"],
  },
  {
    id: "javascript-basics",
    title: "JavaScript Cơ bản",
    type: "lesson",
    url: "javascript-basics.html",
    icon: "⚙️",
    keywords: ["javascript", "js", "biến", "hàm", "dom"],
  },
  {
    id: "python-basics",
    title: "Python Cơ bản",
    type: "lesson",
    url: "python-basics.html",
    icon: "🐍",
    keywords: ["python", "print", "input", "vòng lặp"],
  },
  {
    id: "sql-database",
    title: "SQL & Database",
    type: "lesson",
    url: "sql-database.html",
    icon: "💾",
    keywords: ["sql", "database", "select", "insert", "query"],
  },
  {
    id: "network",
    title: "Mạng máy tính",
    type: "lesson",
    url: "network.html",
    icon: "🌐",
    keywords: [
      "network",
      "mạng",
      "dns",
      "http",
      "tcp",
      "ip",
      "switch",
      "router",
    ],
  },
  {
    id: "informatics",
    title: "Kiến thức Tin 12 trọng tâm",
    type: "lesson",
    url: "informatics.html",
    icon: "💡",
    keywords: ["tin", "website", "url", "hosting"],
  },
  {
    id: "exam-review",
    title: "Ôn thi Tin 12",
    type: "lesson",
    url: "exam-review.html",
    icon: "📝",
    keywords: ["ôn thi", "exam", "review"],
  },
  {
    id: "summary",
    title: "Ghi nhớ nhanh",
    type: "lesson",
    url: "summary.html",
    icon: "⭐",
    keywords: ["ghi nhớ", "summary", "tóm tắt"],
  },
];

const AI_RESPONSES = [
  {
    terms: [
      "html",
      "the",
      "tag",
      "a",
      "div",
      "span",
      "form",
      "input",
      "button",
    ],
    answer:
      "HTML là ngôn ngữ đánh dấu để tạo cấu trúc trang web. Các thẻ như <p>, <a>, <img>, <div>, <span>, <form> giúp bạn tổ chức nội dung và liên kết trang.",
    link: "html-tags.html",
  },
  {
    terms: [
      "semantic",
      "semantic tags",
      "header",
      "footer",
      "section",
      "article",
      "nav",
      "aside",
    ],
    answer:
      "Thẻ semantic như <header>, <nav>, <section>, <article>, <footer> giúp cấu trúc nội dung rõ ràng hơn cho người đọc và công cụ tìm kiếm.",
    link: "html-advanced.html",
  },
  {
    terms: [
      "css",
      "margin",
      "padding",
      "border",
      "color",
      "font",
      "display",
      "width",
      "height",
    ],
    answer:
      "CSS giúp tạo kiểu cho trang web. Margin tạo khoảng cách ngoài, padding tạo khoảng cách bên trong, còn border là viền quanh phần tử.",
    link: "css-layout.html",
  },
  {
    terms: [
      "flex",
      "grid",
      "responsive",
      "align-items",
      "justify-content",
      "grid-template",
    ],
    answer:
      "Flexbox và Grid là hai cách mạnh để xếp bố cục. Dùng display: flex khi cần hàng/cột đơn giản và display: grid khi cần lưới phức tạp.",
    link: "css-advanced.html",
  },
  {
    terms: [
      "javascript",
      "js",
      "bien",
      "ham",
      "function",
      "vong lap",
      "if",
      "else",
      "event",
      "dom",
      "addEventListener",
    ],
    answer:
      "JavaScript dùng để tạo tương tác: khai báo biến với let/const, viết hàm bằng function hoặc =>, dùng if/else để quyết định và addEventListener để lắng nghe sự kiện.",
    link: "javascript-basics.html",
  },
  {
    terms: [
      "python",
      "input",
      "print",
      "vong lap",
      "list",
      "ham",
      "ifelif",
      "elif",
      "while",
      "for",
    ],
    answer:
      "Python dùng cú pháp thụt lề để phân chia khối lệnh. Dùng print() để in, input() để nhập, if/elif/else cho điều kiện và for/while cho vòng lặp.",
    link: "python-basics.html",
  },
  {
    terms: [
      "sql",
      "select",
      "from",
      "where",
      "insert",
      "update",
      "delete",
      "join",
      "group by",
      "order by",
    ],
    answer:
      "SQL dùng SELECT ... FROM ... WHERE ... để truy vấn dữ liệu. INSERT thêm hàng, UPDATE sửa, DELETE xóa và JOIN nối bảng.",
    link: "sql-database.html",
  },
  {
    terms: [
      "mang",
      "network",
      "ip",
      "tcp",
      "http",
      "https",
      "dns",
      "router",
      "switch",
      "url",
      "port",
    ],
    answer:
      "Mạng máy tính dùng địa chỉ IP để nhận diện, DNS để dịch tên miền thành IP, và HTTP/HTTPS để truyền nội dung web. Router và switch giúp điều phối đường truyền.",
    link: "network.html",
  },
  {
    terms: ["on thi", "thi", "cau hoi", "on tap", "review"],
    answer:
      "Đây là trợ lý AI hẹp: chỉ trả lời nhanh nội dung trực tiếp trong app. Nếu cần ôn thi, mở phần 'Ôn thi Tin 12' hoặc 'Ghi nhớ nhanh'.",
    link: "exam-review.html",
  },
];

const AI_PATTERNS = [
  {
    regex:
      /margin.*padding|padding.*margin|margin khac padding|padding khac margin|margin vs padding|khac nhau gi/,
    answer:
      "Margin tạo khoảng cách ngoài phần tử còn padding tạo khoảng cách bên trong. Nhớ là margin nằm ngoài border, padding nằm giữa content và border.",
    link: "css-layout.html",
  },
  {
    regex:
      /div.*span|span.*div|div vs span|phan biet div span|span.*div|div.*span/,
    answer:
      "<div> là thẻ khối để nhóm các phần tử, <span> là thẻ nội dòng dùng cho văn bản hoặc thay đổi kiểu nhỏ. Dùng div cho layout, span cho nội dung bên trong.",
    link: "html-tags.html",
  },
  {
    regex: /the a|link.*html|anchor|a .* dung|href|dang link|lien ket/,
    answer:
      "Thẻ <a> tạo liên kết. Thuộc tính href cho đường dẫn đến trang khác hoặc phần tử khác trên cùng trang.",
    link: "html-tags.html",
  },
  {
    regex: /form|input type|submit|button|action|method|gui du lieu/,
    answer:
      "Form HTML dùng để gửi dữ liệu. Các thẻ input, select, button nằm trong form, action định URL nhận dữ liệu và method chỉ kiểu gửi.",
    link: "html-tags.html",
  },
  {
    regex:
      /javascript.*dom|dom.*javascript|event.*dom|su kien|addeventlistener|queryselector|document\.|window\./,
    answer:
      "DOM là cách JavaScript tương tác với trang web. Dùng document.querySelector() để lấy phần tử, và addEventListener() để lắng nghe sự kiện.",
    link: "javascript-basics.html",
  },
  {
    regex: /if else|if.*else|else.*if|elif|if\(|else\(|\bif\b/,
    answer:
      "If/else dùng kiểm tra điều kiện trong JavaScript và Python. Nếu điều kiện đúng thì thực hiện if, nếu sai thì thực hiện else.",
    link: "javascript-basics.html",
  },
  {
    regex: /for .* loop|while .* loop|vong lap|for\(|while\(|for\b|while\b/,
    answer:
      "Vòng lặp giúp làm đi làm lại lệnh. For dùng khi biết số lần lặp, while lặp theo điều kiện, cả JavaScript và Python đều hỗ trợ.",
    link: "python-basics.html",
  },
  {
    regex:
      /select .* from|from .* where|sql .*select|insert .* into|update .* set|delete .* from|join .* on|group by|order by/,
    answer:
      "SQL dùng SELECT để lấy dữ liệu, INSERT thêm, UPDATE sửa, DELETE xóa. WHERE lọc dữ liệu, JOIN nối bảng và ORDER BY sắp xếp.",
    link: "sql-database.html",
  },
  {
    regex: /ip|dns|http|https|url|router|switch|tcp|udp|port|may chu/,
    answer:
      "IP định danh thiết bị, DNS dịch tên miền, HTTP/HTTPS là giao thức web. Router và switch giúp chuyển dữ liệu trong mạng.",
    link: "network.html",
  },
  {
    regex:
      /css.*background|background.*css|anh nen|color|font-size|padding|margin|display/,
    answer:
      "CSS điều khiển hiển thị: màu, font, padding, margin, display. Dùng background để đặt nền, font-size để cỡ chữ.",
    link: "css-layout.html",
  },
  {
    regex:
      /python.*list|list.*python|string.*python|chuoi.*python|ham.*python|function.*python/,
    answer:
      "Python có kiểu dữ liệu list để chứa nhiều giá trị, string để chứa chuỗi. Dùng vòng lặp và hàm để xử lý dữ liệu.",
    link: "python-basics.html",
  },
];

function normalizeText(text) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\u0111/g, "d")
    .replace(/\u0110/g, "d");
}

function getAiAnswer(query) {
  if (!query || !query.trim()) {
    return {
      text: "Hãy đặt câu hỏi đơn giản về HTML, CSS, JavaScript, Python, SQL hoặc Mạng.",
    };
  }

  const normalized = normalizeText(query);

  const patternMatch = AI_PATTERNS.find((item) => item.regex.test(normalized));
  if (patternMatch) {
    return {
      text: `${patternMatch.answer} Xem thêm: ${patternMatch.link}`,
      link: patternMatch.link,
    };
  }

  const scored = AI_RESPONSES.map((item) => {
    const score = item.terms.reduce(
      (sum, term) => sum + (normalized.includes(term) ? 1 : 0),
      0,
    );
    return { item, score };
  });

  scored.sort((a, b) => b.score - a.score);
  if (scored[0] && scored[0].score > 0) {
    return {
      text: `${scored[0].item.answer} Xem thêm: ${scored[0].item.link}`,
      link: scored[0].item.link,
    };
  }

  if (/html/.test(normalized)) {
    return {
      text: "HTML dùng thẻ để cấu trúc nội dung trang web. Bạn có thể mở phần 'Thẻ HTML Cơ bản' để xem ví dụ và cú pháp.",
      link: "html-tags.html",
    };
  }

  if (/css/.test(normalized)) {
    return {
      text: "CSS dùng để định dạng giao diện: màu, lề, padding, bố cục. Mở phần CSS Cơ bản hoặc CSS Nâng cao để xem ví dụ.",
      link: "css-layout.html",
    };
  }

  if (/python|py/.test(normalized)) {
    return {
      text: "Python dùng cú pháp dễ đọc và thụt lề. Dùng print() để in, input() để nhập, vòng lặp for/while để lặp.",
      link: "python-basics.html",
    };
  }

  if (/sql/.test(normalized)) {
    return {
      text: "SQL dùng SELECT ... FROM ... WHERE ... để truy vấn dữ liệu. Mở phần SQL & Database để xem thêm câu ví dụ.",
      link: "sql-database.html",
    };
  }

  if (/mang|network|ip|dns|http|https/.test(normalized)) {
    return {
      text: "Mạng máy tính dùng địa chỉ IP, DNS và HTTP để truy cập web. Mở phần Mạng máy tính để ôn lại các khái niệm này.",
      link: "network.html",
    };
  }

  return {
    text: "Mình chưa hiểu câu hỏi này rõ. Hãy hỏi lại bằng từ khóa đơn giản như HTML, CSS, JavaScript, Python, SQL hoặc Mạng.",
  };
}

function renderAiResponse() {
  const questionInput = document.getElementById("ai-question-input");
  const answerBox = document.getElementById("ai-answer");
  if (!questionInput || !answerBox) {
    return;
  }

  const response = getAiAnswer(questionInput.value);
  const linkHtml = response.link
    ? `<p class="ai-answer-link"><a href="${response.link}">Xem thêm bài học liên quan</a></p>`
    : "";

  answerBox.innerHTML = `<p>${response.text}</p>${linkHtml}`;
}

function initializeSearch() {
  const searchInput = document.getElementById("search-input");
  const searchResults = document.getElementById("search-results");

  if (!searchInput || !searchResults) {
    return;
  }

  searchInput.addEventListener("input", function () {
    const query = this.value.toLowerCase().trim();

    if (query.length < 2) {
      searchResults.classList.remove("active");
      return;
    }

    const results = [];

    // Tìm kiếm trong bài học
    LESSONS.forEach((lesson) => {
      const titleMatch = lesson.title.toLowerCase().includes(query);
      const keywordMatch = lesson.keywords.some((kw) =>
        kw.toLowerCase().includes(query),
      );

      if (titleMatch || keywordMatch) {
        results.push(lesson);
      }
    });

    // Tìm kiếm trong quiz
    if (typeof QUIZ_BANK !== "undefined") {
      Object.entries(QUIZ_BANK).forEach(([quizId, quizData]) => {
        if (!quizData || quizId === "full-quiz") return;

        const titleMatch = quizData.title.toLowerCase().includes(query);
        const descMatch =
          quizData.description &&
          quizData.description.toLowerCase().includes(query);

        if (titleMatch || descMatch) {
          results.push({
            id: quizId,
            title: quizData.title,
            type: "quiz",
            url: `quiz-${quizId}.html`,
            icon: "❓",
          });
        }

        // Tìm kiếm trong câu hỏi
        if (quizData.questions) {
          quizData.questions.forEach((q, idx) => {
            if (q.prompt.toLowerCase().includes(query)) {
              results.push({
                id: `${quizId}-q${idx}`,
                title: `${quizData.title} - Câu ${idx + 1}`,
                type: "question",
                url: `quiz-${quizId}.html`,
                icon: "❓",
              });
            }
          });
        }
      });
    }

    // Hiển thị kết quả
    if (results.length === 0) {
      searchResults.innerHTML =
        '<div class="search-empty">Không tìm thấy kết quả nào phù hợp.</div>';
    } else {
      searchResults.innerHTML = results
        .slice(0, 12)
        .map(
          (result) => `
        <a href="${result.url}" class="search-result-item">
          <span class="search-result-icon">${result.icon}</span>
          <div class="search-result-content">
            <span class="search-result-title">${result.title}</span>
            <span class="search-result-desc">${
              result.type === "lesson"
                ? "Bài học"
                : result.type === "quiz"
                  ? "Trắc nghiệm"
                  : "Câu hỏi"
            }</span>
          </div>
        </a>
      `,
        )
        .join("");
    }

    searchResults.classList.add("active");
  });

  // Đóng kết quả khi click ra ngoài
  document.addEventListener("click", function (e) {
    if (!e.target.closest(".search-section")) {
      searchResults.classList.remove("active");
    }
  });
}

document.addEventListener("DOMContentLoaded", function () {
  injectIconSprite();
  initializePromoSliders();
  initializeQuizPage();
  initializeSearch();

  const demoInput = document.getElementById("example-input");
  if (demoInput) {
    demoInput.addEventListener("input", function () {
      updateOutput(this.value);
    });
  }

  const demoButton = document.getElementById("demo-button");
  if (demoButton) {
    demoButton.addEventListener("click", showAlert);
  }

  const aiSubmit = document.getElementById("ai-question-submit");
  const aiInput = document.getElementById("ai-question-input");
  if (aiSubmit) {
    aiSubmit.addEventListener("click", renderAiResponse);
  }
  if (aiInput) {
    aiInput.addEventListener("keypress", function (event) {
      if (event.key === "Enter") {
        event.preventDefault();
        renderAiResponse();
      }
    });
  }
});
