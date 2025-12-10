export interface Social {
  href: string
  title: string
  icon: string
}


export const github: Social = {
  href: "https://github.com/SSbit01",
  title: "GitHub",
  icon: "line-md:github-twotone"
}

export const replit: Social = {
  href: "https://replit.com/@SSbit01",
  title: "Replit",
  icon: "simple-icons:replit"
}

export const codepen: Social = {
  href: "https://codepen.io/ssbit01",
  title: "CodePen",
  icon: "teenyicons:codepen-solid"
}

export const freecododecamp: Social = {
  href: "https://www.freecodecamp.org/ssbit01",
  title: "freeCodeCamp",
  icon: "simple-icons:freecodecamp"
}

export const linkedin: Social = {
  href: "https://www.linkedin.com/in/ssbit01/",
  title: "LinkedIn",
  icon: "ri:linkedin-fill"
}

export const email: Social = {
  title: "ss42701@outlook.com",
  icon: "clarity:email-solid",
  get href() {
    return `mailto:${this.title}`
  }
}