const sourceButtons = document.querySelectorAll(".source-tabs button");
const sourceContent = document.getElementById("sourceContent");

const templates = {
  title: `
    <div class="hint-box">
      💡 سينشئ الذكاء الاصطناعي الخطة الكاملة بناءً على عنوان الدرس والمادة والصف فقط.
    </div>
  `,

  text: `
    <div class="input-section">
      <label class="section-label">نص الدرس</label>
      <textarea class="lesson-textarea" placeholder="الصق أو اكتب نص الدرس هنا..."></textarea>
    </div>
  `,

  images: `
    <div class="upload-box">
      <input type="file" id="imagesInput" accept="image/*" multiple hidden>
      <label for="imagesInput" class="upload-label">
        <span class="upload-icon">🖼️</span>
        <strong>اضغط لرفع صور الدرس</strong>
        <small>يمكنك اختيار أكثر من صورة</small>
      </label>
      <div id="imagesPreview" class="preview-list"></div>
    </div>
  `,

  word: `
    <div class="upload-box">
      <input type="file" id="wordInput" accept=".doc,.docx" hidden>
      <label for="wordInput" class="upload-label">
        <span class="upload-icon">📄</span>
        <strong>اضغط لرفع ملف Word</strong>
        <small>الصيغ المدعومة: doc و docx</small>
      </label>
      <p id="wordFileName" class="file-name"></p>
    </div>
  `,

  content: `
    <div class="content-options">
      <button type="button" class="content-option">
        📖 اختيار من المكتبة
      </button>

      <button type="button" class="content-option">
        🗄️ اختيار من المستودع
      </button>
    </div>
  `
};

sourceButtons.forEach((button) => {
  button.addEventListener("click", () => {
    sourceButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    const source = button.dataset.source;
    sourceContent.innerHTML = templates[source];

    activateUploads(source);
  });
});

function activateUploads(source) {
  if (source === "images") {
    const imagesInput = document.getElementById("imagesInput");
    const imagesPreview = document.getElementById("imagesPreview");

    imagesInput.addEventListener("change", () => {
      imagesPreview.innerHTML = "";

      Array.from(imagesInput.files).forEach((file) => {
        const item = document.createElement("div");
        item.className = "preview-item";
        item.textContent = `🖼️ ${file.name}`;
        imagesPreview.appendChild(item);
      });
    });
  }

  if (source === "word") {
    const wordInput = document.getElementById("wordInput");
    const wordFileName = document.getElementById("wordFileName");

    wordInput.addEventListener("change", () => {
      if (wordInput.files.length > ) {
        wordFileName.textContent = `📄 الملف المختار: ${wordInput.files[].name}`;
      }
    });
  }
}
