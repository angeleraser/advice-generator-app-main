const adviceCardEl = document.getElementById("advice-card");
const adviceIdEl = document.getElementById("advice-id");
const adviceTextEl = document.getElementById("advice-text");
const newAdviceBtn = document.getElementById("new-advice-btn");

const defaultAdvice = {
  text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis odit minus laboriosam omnis.",
  id: "lorem",
};

const getRandomAdvice = async () => {
  try {
    const response = await fetch(`https://api.adviceslip.com/advice`);
    const data = await response.json();

    if (!data.slip) return defaultAdvice;

    return {
      text: data.slip.advice,
      id: data.slip.id,
    };
  } catch {
    return defaultAdvice;
  }
};

const handleGenerateAdvice = async () => {
  adviceCardEl.classList.add("loading");

  const data = await getRandomAdvice();

  adviceCardEl.classList.remove("loading");

  adviceTextEl.textContent = `"${data.text}"`;
  adviceIdEl.textContent = `ADVICE #${data.id}`;
};

handleGenerateAdvice();
newAdviceBtn.addEventListener("click", handleGenerateAdvice);
