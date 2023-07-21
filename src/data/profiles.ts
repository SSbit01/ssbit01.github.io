export interface Profile {
  href: string
  title: string
  icon: string
}


export const github: Profile = {
  href: "https://github.com/SSbit01",
  title: "GitHub",
  icon: "line-md:github-twotone"
}

export const replit: Profile = {
  href: "https://replit.com/@SSbit01",
  title: "Replit",
  icon: "simple-icons:replit"
}

export const codepen: Profile = {
  href: "https://codepen.io/ssbit01",
  title: "CodePen",
  icon: "teenyicons:codepen-solid"
}

export const freecododecamp: Profile = {
  href: "https://www.freecodecamp.org/ssbit01",
  title: "freeCodeCamp",
  icon: "simple-icons:freecodecamp"
}

export const linkedin: Profile = {
  href: "https://www.linkedin.com/in/ssbit01/",
  title: "LinkedIn",
  icon: "ri:linkedin-fill"
}

export const email: Profile = {
  title: "ss42701@outlook.com",
  icon: "clarity:email-solid",
  get href() {
    return `mailto:${this.title}`
  }
}

export const resume: Profile = {
  href: "/resume-fullstackdev-phone-censored.pdf",
  title: "Résumé (CV)",
  icon: "pepicons-print:cv"
}