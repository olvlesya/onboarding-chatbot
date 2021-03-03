export type stepsOptions = "greeting" | "intro" | "introCourse" | "rateCourse";
export type messageType = {
  jsx: () => JSX.Element;
  type?: "message" | "iframe";
  me?: boolean;
};

export type stepsType = {
  [key in stepsOptions]: {
    messages: Array<messageType>;
    options: Array<{ text: string; next: stepsOptions }>;
  };
};

export const steps: stepsType = {
  greeting: {
    messages: [
      {
        jsx: () => (
          <span>
            Привет, {userData.name}! Меня зовут ... я автоматический бот и
            помогаю сотрудникам лидертим в их ежедневной работе. Рад что ты
            присоединяешься к нашей команде.
          </span>
        ),
      },
      {
        jsx: () => <span>Рассказать подробнее о компании?</span>,
      },
    ],
    options: [
      {
        text: "Привет, давай!",
        next: "intro",
      },
    ],
  },
  intro: {
    messages: [
      {
        jsx: () => <span>Вводный курс о Компании</span>,
      },
    ],
    options: [
      {
        text: "Запустить курс!",
        next: "introCourse",
      },
    ],
  },
  introCourse: {
    messages: [
      {
        jsx: () => (
          <iframe title="gfd-training" src="trainings/gfd/index.html"></iframe>
        ),
        type: "iframe",
      },
    ],
    options: [
      {
        text: "Оценить курс",
        next: "rateCourse",
      },
    ],
  },
  rateCourse: {
    messages: [
      {
        jsx: () => (
          <span>
            1. Оцените, пожалуйста, по шкале от 1 до 10 - насколько Вам
            понравился welcome курс. Где 0 – совсем не понравился, а 10 – очень
            понравился.
          </span>
        ),
      },
    ],
    options: [],
  },
};

export const userData = {
  name: "Олеся",
} as const;
