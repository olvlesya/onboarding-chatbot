export type stepsOptions =
  | "greeting"
  | "intro"
  | "introCourse"
  | "rateCourse1"
  | "rateCourse2"
  | "rateCourse3"
  | "answer"
  | "end";
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
          <iframe
            title="gfd-training"
            src="./trainings/gfd/index.html"
          ></iframe>
        ),
        type: "iframe",
      },
    ],
    options: [
      {
        text: "Оценить курс",
        next: "rateCourse1",
      },
    ],
  },
  rateCourse1: {
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
    options: [...Array(11)].map((_c, id) => ({
      text: String(id),
      next: "rateCourse2",
    })),
  },
  rateCourse2: {
    messages: [
      {
        jsx: () => (
          <span>
            2. Оцените, пожалуйста, по шкале от 1 до 10 - насколько понятно для
            Вас была донесена информация о Компании и сфере её деятельности. Где
            0 – совсем не понятно, а 10 – понятно полностью.
          </span>
        ),
      },
    ],
    options: [...Array(11)].map((_c, id) => ({
      text: String(id),
      next: "rateCourse3",
    })),
  },
  rateCourse3: {
    messages: [
      {
        jsx: () => (
          <span>
            3. Оцените, пожалуйста, по шкале от 1 до 5, посоветовали бы Вы этот
            курс своему коллеге новичку . Где 0 – точно нет, а 5 – конечно да!
          </span>
        ),
      },
    ],
    options: [...Array(11)].map((_c, id) => ({
      text: String(id),
      next: "answer",
    })),
  },
  answer: {
    messages: [
      {
        jsx: () => <span>Спасибо за ваши ответы!</span>,
      },
    ],
    options: [
      {
        text: "Курс окончен",
        next: "end",
      },
    ],
  },
  end: {
    messages: [],
    options: [],
  },
};

export const userData = {
  name: "Олеся",
} as const;
