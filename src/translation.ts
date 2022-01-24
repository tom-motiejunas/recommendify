interface contentInt {
  [key: string]: any;
}

export const pageContent: contentInt = {
  Lithuanian: {
    aboutMe: {
      title: "Apie Mane",
      statistic: {
        header: "Statistika",
        companies: "Aptarnautų įmonių",
        people: "Aptarnautų klientų",
      },
      experience: {
        header: "Patirtis",
        content: `Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Ab,repudiandae? Obcaecati, voluptate!
         Minus veniam autem repudiandae  debitis, rerum non at ullam 
         tempora minima nemo? Dolorum harum nemo consequuntur, assumenda 
         quos laborum sequi rem non esse corrupti consequatur porro 
         dignissimos laboriosam cumque explicabo eveniet provident, 
         velit maiores, magni facilis possimus recusandae!`,
      },
    },
    contact: {
      title: "Susisiek su manim",
      socialNetworks: "Socialiniai Tinklai",
      phoneNumber: "Telefono Numeris",
      or: "Arba",
    },
    error: {
      info: "Užsakymas nebuvo išsiųstas",
      button: "Grįžti į pradžią",
    },
    home: {
      title: "Gaukite Paslaugas",
      summary:
        "Siūlome tinklinio marketingo bei asmeninių rekomendacijų pagalbą.",
      links: {
        service: "Paslaugos",
        contacts: "Kontaktai",
      },
    },
    recommendation: {
      title: "Užpildykite trumpą klausimyną",
    },
    success: {
      info: "Užsakymas sėkmingai išsiųstas",
      button: "Grįžti į pradžią",
    },
    volleyball: {
      title: "Užpildykite trumpą klausimyną",
    },
  },
  English: {
    aboutMe: {
      title: "About Me",
      statistic: {
        header: "Statistics",
        companies: "Companies Serviced",
        people: "Clients Serviced",
      },
      experience: {
        header: "Experience",
        content: `Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Ab,repudiandae? Obcaecati, voluptate!
           Minus veniam autem repudiandae  debitis, rerum non at ullam 
           tempora minima nemo? Dolorum harum nemo consequuntur, assumenda 
           quos laborum sequi rem non esse corrupti consequatur porro 
           dignissimos laboriosam cumque explicabo eveniet provident, 
           velit maiores, magni facilis possimus recusandae!`,
      },
    },
    contact: {
      title: "Contact Me",
      socialNetworks: "Social Networks",
      phoneNumber: "Phone Number",
      or: "or",
    },
    error: {
      info: "Order was not send",
      button: "Goto homepage",
    },
    home: {
      title: "Get Services",
      summary:
        "We offer volleyball marketing help and personal recommendations",
      links: {
        service: "Services",
        contacts: "Contacts",
      },
    },
    recommendation: {
      title: "Fill out short quiz",
    },
    success: {
      info: "Order succesfully sent",
      button: "Goto homepage",
    },
    volleyball: {
      title: "Fill out short quiz",
    },
  },
};
export const componentContent: contentInt = {
  Lithuanian: {
    form: {
      contact: {
        title: "Susisiekti",
        choises: {
          email: "Elektroniniu paštu",
          phone: "Telefonu",
        },
        email: "Elektroninis paštas",
        phone: "Telefono numeris",
      },
      details: {
        title: "Detaliau apibūdinkite problemą",
      },
      firstName: {
        title: "Vardas",
      },
      formParent: {
        validateInput: {
          letterLimit(limit: number) {
            return `Įveskite iki ${limit} simbolių`;
          },
          regMatch: "Blogai įvestas laukelis",
          required: "Laukelis privalomas",
        },
        validateProblemArea: {
          problem: "Pasirinkite vieną iš nurodytų",
        },
      },
      groupSize: {
        title: "Tinklinio grupės dydis",
        upToFifty: "Iki 50 narių",
        upToOneHundred: "Iki 100 narių",
        moreThanOneHundred: "Virš 100 narių",
      },
      lastName: {
        title: "Pavardė",
      },
      problemArea: {
        title: "Probleminė sritis",
        economic: "Ekonominė",
        regulations: "Reguliavimas, juridiniai aktai",
        companyImage: "Kompanijos įvaizdis",
        advertisement: "Reklamavimas",
        other: "Kita",
      },
    },
    footer: {
      socialNetworks: "Sekite mane socialiniame tinkle!",
      platforms: "Susisiekite vienoje iš šių platformų su manimi",
      links: {
        title: "Nuorodos",
        services: "Paslaugos",
        aboutMe: "Apie Mane",
        contacts: "Kontaktai",
      },
    },
    formSubmit: {
      required: "Laukelis privalomas",
      chooseOne: "Pasirinkite vieną iš nurodytų",
      fillOutOne: "Pasirinkite bent vieną laukelį ir užpildykite",
      send: "Siųsti",
    },
    navBar: {
      home: "Pradža",
      services: "Paslaugos",
      aboutMe: "Apie Mane",
      contacts: "Kontaktai",
    },
    serviceHome: {
      title: "Siūlomos paslaugos",
      volleyball: "Tinklinio Marketingas",
      recommendations: "Asmeninės Rekomendacijos",
    },
    startClients: {
      title: "Mano klientai patenkinti",
      summary: `Esu dirbęs su daugybė skirtingų reikalavimų turinčių žmonių bei įmonių, 
                todėl žinau kaip atsakyti net į sunkiausius klausimus.`,
    },
    startFaq: {
      title: "Dažniausiai užduodami klausimai",
    },
    startFeatures: {
      quickTitle: "Greitas Atsakymas",
      quickSummary: "Užsisakę paslaugą gausite atsakymą per 2-3 darbo dienas.",
      registrationTitle: "Paprasta Registracija",
      registrationSummary: `Užpildykite trumpa klausymą ir 
                            gaukite atsakyma per kelias darbo dienas`,
      informationTitle: "Tikslinga Informacija",
      informationSummary:
        "Parūpinu atsakymus, kurie tiksliai atsako į probleminę sritį.",
    },
  },
  English: {
    form: {
      contact: {
        title: "Contact",
        choises: {
          email: "By Email",
          phone: "By Phone",
        },
        email: "Email",
        phone: "Phone Number",
      },
      details: {
        title: "Give more details about your problem",
      },
      firstName: {
        title: "First name",
      },
      formParent: {
        validateInput: {
          letterLimit(limit: number) {
            return `Enter up to ${limit} symbols`;
          },
          regMatch: "Field entered incorrectly",
          required: "Field required",
        },
        validateProblemArea: {
          problem: "Please select one",
        },
      },
      groupSize: {
        title: "Volleyball group size",
        upToFifty: "Up to 50 people",
        upToOneHundred: "Up to 100 people",
        moreThanOneHundred: "More than 100 people",
      },
      lastName: {
        title: "Last name",
      },
      problemArea: {
        title: "Problem area",
        economic: "Economic",
        regulations: "Regulation, legal acts",
        companyImage: "Company image",
        advertisement: "Advertisement",
        other: "Other",
      },
    },
    footer: {
      socialNetworks: "Follow me on social networks",
      platforms: "Contact me on one of these platforms",
      links: {
        title: "Links",
        services: "Services",
        aboutMe: "About Me",
        contacts: "Contacts",
      },
    },
    formSubmit: {
      required: "Field required",
      chooseOne: "Please select one",
      fillOutOne: "Select at least one field and fill it out ",
      send: "Send",
    },
    navBar: {
      home: "Home",
      services: "Services",
      aboutMe: "About Me",
      contacts: "Contacts",
    },
    serviceHome: {
      title: "Services we offer",
      volleyball: "Volleyball Marketing",
      recommendations: "Personal Recommendations",
    },
    startClients: {
      title: "My customers are satisfied",
      summary: `I have worked with many people and companies with different
                requirements, so I know how to answer even the most
                difficult questions.`,
    },
    startFaq: {
      title: "Frequently asked questions",
    },
    startFeatures: {
      quickTitle: "Quick Answer",
      quickSummary:
        "After ordering the service, you will receive a response within 2-3 working days.",
      registrationTitle: "Simple Registration",
      registrationSummary: `
      Complete a short quiz and get an answer within a few business days`,
      informationTitle: "Appropriate Information",
      informationSummary:
        "Providing answers that accurately answer the problem area.",
    },
  },
};
