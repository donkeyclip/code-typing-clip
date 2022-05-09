export const initParamsValidationRules = {
  code: {
    label: "Code",
    type: "string",
    optional: false,
  },
};

export const initParams = [
  {
    name: "Default",
    value: {
      code: `const welcome = {
        from:"Donkeyclip",
        to:"Claudio Holanda",
        reason:"Introduce MotorCortexjs",
        whatItIs:"Animation Framework",
        opensource:true,
        whatYouCanDoWith:"Create dynamic clips and plugins",
        easyToUse:true,
        simpleStepsToFollow:{
            step1:"create a clip with motorcortex-cli",
            step2:"create Incidents for your clip",
            step3:"put them in the timeline of your clip",
            step4:"add a player if you want",
            readyClip:true
        },
        extra:"You can use our plugins, " + " create yours, " + " or use HTML and CSS.",
        whereYouCanFindMoreInfo:"https://motorcortexjs.com/",
        getInTouchWithUs:{
          email:"social@donkeyclip.com",
          github:"https://github.com/donkeyclip",
          twitter:"https://twitter.com/Donkeyclip1",
          instagram:"https://www.instagram.com/donkeyclip"
        },
        thankYouForYourTime: true
       }`,
    },
  },
];
