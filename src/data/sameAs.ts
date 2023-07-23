export interface SameAs {
  href: string
  title: string
  icon: string
}


export const github: SameAs = {
  href: "https://github.com/SSbit01",
  title: "GitHub",
  icon: "line-md:github-twotone"
}

export const replit: SameAs = {
  href: "https://replit.com/@SSbit01",
  title: "Replit",
  icon: "simple-icons:replit"
}

export const codepen: SameAs = {
  href: "https://codepen.io/ssbit01",
  title: "CodePen",
  icon: "teenyicons:codepen-solid"
}

export const freecododecamp: SameAs = {
  href: "https://www.freecodecamp.org/ssbit01",
  title: "freeCodeCamp",
  icon: "simple-icons:freecodecamp"
}

export const linkedin: SameAs = {
  href: "https://www.linkedin.com/in/ssbit01/",
  title: "LinkedIn",
  icon: "ri:linkedin-fill"
}

export const email: SameAs = {
  title: "ss42701@outlook.com",
  icon: "clarity:email-solid",
  get href() {
    return `mailto:${this.title}`
  }
}

export const resume: SameAs = {
  href: "/resume-fullstackdev-phone-censored.pdf",
  title: "Résumé",
  icon: "pepicons-print:cv"
}