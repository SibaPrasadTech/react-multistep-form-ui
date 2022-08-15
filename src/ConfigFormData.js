const formData =
  [
    {
      step: 1,
      stepType: "FormWithInputFeilds",
      FormInfoArea: {
        FormPrimaryInfo: "Welcome! First things first...",
        FormSecondaryInfo: "You can always change them later."
      },
      formFeilds: [
        {
          type: "text-input",
          id: "fullname",
          label: "Full Name",
          info: "Elon Musk",
          additionalInfo: ""
        },
        {
          type: "text-input",
          id: "displayname",
          label: "Display Name",
          info: "Elon",
          additionalInfo: ""
        }
      ],
      button: {
        text: "Create Workspace"
      }
    },
    {
      step: 2,
      stepType: "FormWithInputFeilds",
      FormInfoArea: {
        FormPrimaryInfo: "Let's setup a home for all your work",
        FormSecondaryInfo: "You can always create another workspace later."
      },
      formFeilds: [
        {
          type: "text-input",
          id: "workspaceName",
          label: "Workspace Name",
          info: "Cutshort Workspace",
          additionalInfo: ""
        },
        {
          type: "text-input-special",
          id: "workspaceURL",
          label: "Workspace URL",
          info: "Example",
          additionalInfo: "www.cut.com/",
          optional: true
        }
      ],
      button: {
        text: "Create Workspace"
      }
    },
    {
      step: 3,
      stepType: "FormWithSelectCards",
      FormInfoArea: {
        FormPrimaryInfo: "How are you planning to use Cutshort?",
        FormSecondaryInfo: "We'll streamline your setup experience accordingly."
      },
      formFeilds: [
        {
          type: "selection-card",
          id: "forMyself",
          info: "For myself",
          additionalInfo: "Write better. Think more clearly. Stay organized.",
          icon: `${process.env.PUBLIC_URL}/self-icon.png`,
          selected: true
        },
        {
          type: "selection-card",
          id: "withMyTeam",
          info: "With my team",
          additionalInfo: "Wikis, docs, tasks & projects, all in one place.",
          icon: `${process.env.PUBLIC_URL}/team-icon.png`,
          selected: false
        }
      ],
      button: {
        text: "Create Workspace"
      }
    },
    {
      step: 4,
      stepType: "FormCompletion",
      successMessagePrimary: (name) => `Congratulations, ${name}`,
      successMessageSecondary: "You have completed onboarding, you can start using the Eden!",
      icon: `${process.env.PUBLIC_URL}/success-icon.png`,
      button: {
        text: "Launch Cutshort"
      }
    }
  ];
export default formData;