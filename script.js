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

document.addEventListener("DOMContentLoaded", function () {
  injectIconSprite();
  initializePromoSliders();
  initializeQuizPage();

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
});
