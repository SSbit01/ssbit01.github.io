export interface Social {
  href: string;
  title: string;
  icon: string;
}

export const github: Social = {
  href: "https://github.com/SSbit01",
  title: "GitHub",
  icon: "bi:github"
};

export const codepen: Social = {
  href: "https://codepen.io/ssbit01",
  title: "CodePen",
  icon: "teenyicons:codepen-solid"
};

export const email: Social = {
  title: "ss42701@outlook.com",
  icon: "clarity:email-solid",
  get href() {
    return `mailto:${this.title}`;
  }
};
