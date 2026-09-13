export interface SuburbFaq {
  q: string;
  a: string;
}

export interface Suburb {
  slug: string;
  name: string;
  region: string;
  intro: string;
  whyUs: string;
  nearby: string[];
  faqs: SuburbFaq[];
}

export const suburbs: Record<string, Suburb> = {
  preston: {
    slug: "digital-marketing-preston",
    name: "Preston",
    region: "Melbourne's North",
    intro:
      "Preston's High Street and Bell Street strips are packed with independent businesses competing for the same local customers. If your business doesn't show up when someone in Preston searches on Google, they're calling the competitor who does.",
    whyUs:
      "Preston is one of Melbourne's most diverse and fast-growing northern suburbs, with a mix of long-established trades businesses and newer cafes, retailers, and services opening along Plenty Road and around Northland. We help Preston businesses get found by the locals actually searching for what they offer.",
    nearby: ["Reservoir", "Thornbury", "Northcote"],
    faqs: [
      {
        q: "Do you work with businesses in Preston?",
        a: "Yes. We work with businesses throughout Preston and neighbouring suburbs like Reservoir, Thornbury, and Northcote. Whether you're on High Street, Bell Street, or anywhere in between, we can help you get found on Google.",
      },
      {
        q: "What digital marketing services do you offer in Preston?",
        a: "We offer SEO, Google Ads management, website design, and Google Business Profile optimisation for Preston businesses — either as standalone services or as a combined package tailored to your goals.",
      },
      {
        q: "How much does digital marketing cost for a Preston business?",
        a: "It depends on which services you need and your industry's competitiveness. We offer a free strategy call to assess your current online presence in Preston and give you a tailored quote — no obligation.",
      },
      {
        q: "How fast can I expect results?",
        a: "Google Ads can start generating leads within days. SEO typically takes 3-6 months to show meaningful ranking improvements but keeps generating free leads long after the initial work is done. Most Preston businesses run both together.",
      },
    ],
  },
  coburg: {
    slug: "digital-marketing-coburg",
    name: "Coburg",
    region: "Melbourne's North",
    intro:
      "Sydney Road runs straight through Coburg's commercial heart, and with the Pentridge Village redevelopment bringing more foot traffic to the area, competition for local customers keeps growing. We help Coburg businesses make sure they're the ones showing up first.",
    whyUs:
      "Coburg's multicultural community and busy retail strip make it a suburb where reputation and visibility both matter. We help Coburg businesses build a Google presence that reflects the trust they've already earned locally.",
    nearby: ["Brunswick", "Pascoe Vale", "Fawkner"],
    faqs: [
      {
        q: "Do you work with businesses in Coburg?",
        a: "Yes. We work with businesses across Coburg and surrounding suburbs including Brunswick, Pascoe Vale, and Fawkner, helping them get found by local customers on Google.",
      },
      {
        q: "What digital marketing services do you offer in Coburg?",
        a: "We offer SEO, Google Ads management, website design, and Google Business Profile optimisation for Coburg businesses, tailored to your industry and goals.",
      },
      {
        q: "How much does digital marketing cost for a Coburg business?",
        a: "Pricing depends on your industry, competition, and which services you need. We offer a free, no-obligation strategy call to assess your Coburg business and provide a tailored quote.",
      },
      {
        q: "How fast can I expect results?",
        a: "Google Ads can generate leads within days of launching. SEO takes longer — typically 3-6 months for meaningful movement — but keeps working long-term. Many Coburg businesses use both together.",
      },
    ],
  },
  brunswick: {
    slug: "digital-marketing-brunswick",
    name: "Brunswick",
    region: "Melbourne's North",
    intro:
      "Brunswick's Sydney Road and Lygon Street precincts are some of the most competitive retail and hospitality strips in Melbourne's inner north. Standing out among that many local businesses takes more than a nice shopfront — it takes showing up on Google.",
    whyUs:
      "Brunswick's creative, design-conscious community expects businesses to have a strong online presence to match their reputation on the street. We help Brunswick businesses translate their local following into consistent leads from Google search.",
    nearby: ["Coburg", "Fitzroy North", "Moonee Ponds"],
    faqs: [
      {
        q: "Do you work with businesses in Brunswick?",
        a: "Yes. We work with businesses across Brunswick and nearby suburbs like Coburg, Fitzroy North, and Moonee Ponds, helping them rank higher and generate more local enquiries.",
      },
      {
        q: "What digital marketing services do you offer in Brunswick?",
        a: "We offer SEO, Google Ads management, website design, and Google Business Profile optimisation for Brunswick businesses, built around your specific goals.",
      },
      {
        q: "How much does digital marketing cost for a Brunswick business?",
        a: "It depends on your industry and the services you need. We offer a free strategy call to review your Brunswick business's current online presence and provide a tailored, no-obligation quote.",
      },
      {
        q: "How fast can I expect results?",
        a: "Google Ads can start generating leads within days. SEO is a longer-term play — usually 3-6 months for real movement — but compounds over time. Most successful Brunswick businesses run both.",
      },
    ],
  },
  "box-hill": {
    slug: "digital-marketing-box-hill",
    name: "Box Hill",
    region: "Melbourne's East",
    intro:
      "Box Hill is one of Melbourne's busiest commercial and transport hubs, with a dense concentration of retail, dining, and professional services around Box Hill Central. In a suburb this competitive, ranking on Google is the difference between being found and being invisible.",
    whyUs:
      "Box Hill's major shopping centre and transport interchange bring huge volumes of local foot traffic and search activity every day. We help Box Hill businesses capture that demand with SEO, Google Ads, and a Google Business Profile built to convert searches into customers.",
    nearby: ["Blackburn", "Mont Albert", "Surrey Hills"],
    faqs: [
      {
        q: "Do you work with businesses in Box Hill?",
        a: "Yes. We work with businesses throughout Box Hill and surrounding suburbs including Blackburn, Mont Albert, and Surrey Hills, helping them get found by local customers searching on Google.",
      },
      {
        q: "What digital marketing services do you offer in Box Hill?",
        a: "We offer SEO, Google Ads management, website design, and Google Business Profile optimisation for Box Hill businesses, tailored to a competitive local market.",
      },
      {
        q: "How much does digital marketing cost for a Box Hill business?",
        a: "Pricing depends on your industry's competitiveness and which services you need. We offer a free strategy call to assess your Box Hill business and provide a tailored quote — no obligation.",
      },
      {
        q: "How fast can I expect results?",
        a: "Google Ads can generate leads within days of launching. SEO typically takes 3-6 months to show meaningful results in a competitive suburb like Box Hill, but keeps compounding long-term.",
      },
    ],
  },
  doncaster: {
    slug: "digital-marketing-doncaster",
    name: "Doncaster",
    region: "Melbourne's East",
    intro:
      "Doncaster's families and homeowners are often searching on Google before they call anyone — whether they're comparing trades, planning a renovation, or choosing a local service. If your business isn't visible in those searches, you're losing work to whoever is.",
    whyUs:
      "Doncaster's affluent, family-oriented community around Westfield Doncaster and the surrounding residential streets means strong demand for trusted local trades and services. We help Doncaster businesses build the online visibility and reputation that this market expects.",
    nearby: ["Templestowe", "Bulleen", "Box Hill North"],
    faqs: [
      {
        q: "Do you work with businesses in Doncaster?",
        a: "Yes. We work with businesses across Doncaster and nearby areas including Templestowe, Bulleen, and Box Hill North, helping them get found by local customers on Google.",
      },
      {
        q: "What digital marketing services do you offer in Doncaster?",
        a: "We offer SEO, Google Ads management, website design, and Google Business Profile optimisation for Doncaster businesses, built around your goals and budget.",
      },
      {
        q: "How much does digital marketing cost for a Doncaster business?",
        a: "It depends on your industry and which services you need. We offer a free, no-obligation strategy call to review your Doncaster business and provide a tailored quote.",
      },
      {
        q: "How fast can I expect results?",
        a: "Google Ads can start generating leads within days. SEO takes longer — usually 3-6 months for meaningful ranking improvements — but keeps generating free leads long-term. Many Doncaster businesses run both.",
      },
    ],
  },
  camberwell: {
    slug: "digital-marketing-camberwell",
    name: "Camberwell",
    region: "Melbourne's East",
    intro:
      "Camberwell Junction and the famous Sunday Market draw steady foot traffic, but most customers now start their search for a local business on Google, not on the street. We help Camberwell businesses make sure they're the ones being found.",
    whyUs:
      "Camberwell's established, high-value residential community expects a certain level of professionalism and trust from the businesses they use. We help Camberwell businesses build a Google presence that matches that standard and turns searches into paying customers.",
    nearby: ["Hawthorn", "Canterbury", "Balwyn"],
    faqs: [
      {
        q: "Do you work with businesses in Camberwell?",
        a: "Yes. We work with businesses across Camberwell and surrounding suburbs like Hawthorn, Canterbury, and Balwyn, helping them rank higher and generate more local enquiries.",
      },
      {
        q: "What digital marketing services do you offer in Camberwell?",
        a: "We offer SEO, Google Ads management, website design, and Google Business Profile optimisation for Camberwell businesses, tailored to your specific goals.",
      },
      {
        q: "How much does digital marketing cost for a Camberwell business?",
        a: "Pricing depends on your industry and which services you need. We offer a free strategy call to assess your Camberwell business and provide a tailored, no-obligation quote.",
      },
      {
        q: "How fast can I expect results?",
        a: "Google Ads can generate leads within days of launching. SEO typically takes 3-6 months for meaningful movement but keeps compounding over time. Most successful Camberwell businesses run both.",
      },
    ],
  },
  footscray: {
    slug: "digital-marketing-footscray",
    name: "Footscray",
    region: "Melbourne's West",
    intro:
      "Footscray's market, food scene, and multicultural business community make it one of Melbourne's most dynamic western suburbs. With so many local businesses competing for the same customers, showing up first on Google matters more than ever.",
    whyUs:
      "Footscray's mix of long-standing family businesses and a growing wave of new cafes, retailers, and services means the competition for local search visibility keeps intensifying. We help Footscray businesses build the online presence needed to keep winning local customers.",
    nearby: ["Yarraville", "Seddon", "West Footscray"],
    faqs: [
      {
        q: "Do you work with businesses in Footscray?",
        a: "Yes. We work with businesses throughout Footscray and nearby suburbs including Yarraville, Seddon, and West Footscray, helping them get found by local customers on Google.",
      },
      {
        q: "What digital marketing services do you offer in Footscray?",
        a: "We offer SEO, Google Ads management, website design, and Google Business Profile optimisation for Footscray businesses, tailored to your industry and goals.",
      },
      {
        q: "How much does digital marketing cost for a Footscray business?",
        a: "It depends on your industry and which services you need. We offer a free, no-obligation strategy call to assess your Footscray business and provide a tailored quote.",
      },
      {
        q: "How fast can I expect results?",
        a: "Google Ads can start generating leads within days. SEO takes longer — typically 3-6 months for real movement — but keeps generating free leads long-term. Many Footscray businesses run both together.",
      },
    ],
  },
  werribee: {
    slug: "digital-marketing-werribee",
    name: "Werribee",
    region: "Melbourne's West",
    intro:
      "Werribee is one of Melbourne's fastest-growing outer suburbs, with new housing estates bringing a steady stream of new residents and new demand for local trades and services. The businesses that show up on Google now are the ones capturing that growth.",
    whyUs:
      "With Werribee's population still expanding rapidly around Werribee Plaza and the surrounding growth corridor, local businesses that invest in visibility now have a real head start over competitors who wait. We help Werribee businesses claim that advantage.",
    nearby: ["Hoppers Crossing", "Point Cook", "Tarneit"],
    faqs: [
      {
        q: "Do you work with businesses in Werribee?",
        a: "Yes. We work with businesses across Werribee and surrounding growth suburbs including Hoppers Crossing, Point Cook, and Tarneit, helping them get found by local customers on Google.",
      },
      {
        q: "What digital marketing services do you offer in Werribee?",
        a: "We offer SEO, Google Ads management, website design, and Google Business Profile optimisation for Werribee businesses, built around a fast-growing local market.",
      },
      {
        q: "How much does digital marketing cost for a Werribee business?",
        a: "Pricing depends on your industry and which services you need. We offer a free strategy call to assess your Werribee business and provide a tailored, no-obligation quote.",
      },
      {
        q: "How fast can I expect results?",
        a: "Google Ads can generate leads within days of launching. SEO typically takes 3-6 months for meaningful ranking improvements, which compounds well in a growing suburb like Werribee.",
      },
    ],
  },
  "point-cook": {
    slug: "digital-marketing-point-cook",
    name: "Point Cook",
    region: "Melbourne's West",
    intro:
      "Point Cook's rapid growth around Sanctuary Lakes and its new housing estates means a constant flow of young families looking for local trades, services, and businesses they can trust. Being visible on Google is how you become their first call.",
    whyUs:
      "Point Cook is one of Melbourne's fastest-growing suburbs, and local search demand is growing right alongside it. We help Point Cook businesses build the SEO, Google Ads, and Google Business Profile presence needed to capture new residents before competitors do.",
    nearby: ["Werribee", "Sanctuary Lakes", "Williams Landing"],
    faqs: [
      {
        q: "Do you work with businesses in Point Cook?",
        a: "Yes. We work with businesses across Point Cook and nearby areas including Werribee, Sanctuary Lakes, and Williams Landing, helping them get found by local customers on Google.",
      },
      {
        q: "What digital marketing services do you offer in Point Cook?",
        a: "We offer SEO, Google Ads management, website design, and Google Business Profile optimisation for Point Cook businesses, tailored to a fast-growing local market.",
      },
      {
        q: "How much does digital marketing cost for a Point Cook business?",
        a: "It depends on your industry and which services you need. We offer a free, no-obligation strategy call to review your Point Cook business and provide a tailored quote.",
      },
      {
        q: "How fast can I expect results?",
        a: "Google Ads can start generating leads within days. SEO takes longer — usually 3-6 months for real movement — but keeps generating free leads as Point Cook continues to grow.",
      },
    ],
  },
  "st-kilda": {
    slug: "digital-marketing-st-kilda",
    name: "St Kilda",
    region: "Melbourne's South",
    intro:
      "St Kilda's Fitzroy Street and Acland Street precincts are among the most visited hospitality and lifestyle strips in Melbourne, which means fierce competition for the attention of both locals and visitors searching on Google.",
    whyUs:
      "St Kilda's mix of tourism, nightlife, and a strong local community means businesses need to rank well for both everyday local searches and visitor-driven demand. We help St Kilda businesses capture both with SEO, Google Ads, and Google Business Profile optimisation.",
    nearby: ["Elwood", "Balaclava", "Albert Park"],
    faqs: [
      {
        q: "Do you work with businesses in St Kilda?",
        a: "Yes. We work with businesses throughout St Kilda and surrounding suburbs including Elwood, Balaclava, and Albert Park, helping them get found by local customers and visitors on Google.",
      },
      {
        q: "What digital marketing services do you offer in St Kilda?",
        a: "We offer SEO, Google Ads management, website design, and Google Business Profile optimisation for St Kilda businesses, tailored to a highly competitive market.",
      },
      {
        q: "How much does digital marketing cost for a St Kilda business?",
        a: "Pricing depends on your industry's competitiveness and which services you need. We offer a free strategy call to assess your St Kilda business and provide a tailored, no-obligation quote.",
      },
      {
        q: "How fast can I expect results?",
        a: "Google Ads can generate leads within days of launching. SEO typically takes 3-6 months to show meaningful results in a competitive suburb like St Kilda, but keeps compounding long-term.",
      },
    ],
  },
  brighton: {
    slug: "digital-marketing-brighton",
    name: "Brighton",
    region: "Melbourne's South",
    intro:
      "Brighton's Church Street precinct and bayside streets are home to some of Melbourne's most affluent customers — and their expectations for the businesses they choose are just as high. Ranking on Google is how you earn the first look.",
    whyUs:
      "Brighton's established, high-value community rewards businesses that present professionally online as much as they do in person. We help Brighton businesses build the SEO, Google Ads, and Google Business Profile presence that matches the standard locals expect.",
    nearby: ["Elwood", "Hampton", "Brighton East"],
    faqs: [
      {
        q: "Do you work with businesses in Brighton?",
        a: "Yes. We work with businesses across Brighton and nearby suburbs including Elwood, Hampton, and Brighton East, helping them rank higher and generate more local enquiries.",
      },
      {
        q: "What digital marketing services do you offer in Brighton?",
        a: "We offer SEO, Google Ads management, website design, and Google Business Profile optimisation for Brighton businesses, tailored to an affluent local market.",
      },
      {
        q: "How much does digital marketing cost for a Brighton business?",
        a: "It depends on your industry and which services you need. We offer a free, no-obligation strategy call to assess your Brighton business and provide a tailored quote.",
      },
      {
        q: "How fast can I expect results?",
        a: "Google Ads can start generating leads within days. SEO takes longer — typically 3-6 months for meaningful movement — but keeps generating free leads long-term. Many Brighton businesses run both.",
      },
    ],
  },
  frankston: {
    slug: "digital-marketing-frankston",
    name: "Frankston",
    region: "Melbourne's South",
    intro:
      "Frankston is the commercial gateway to the Mornington Peninsula, with a growing mix of retail, trades, and professional services around Bayside Shopping Centre. Businesses that rank well on Google are capturing customers from across the wider region, not just the suburb itself.",
    whyUs:
      "As Frankston continues to grow as a regional hub, local search competition is growing with it. We help Frankston businesses build the SEO, Google Ads, and Google Business Profile presence needed to stand out across the suburb and the surrounding Peninsula catchment.",
    nearby: ["Seaford", "Carrum Downs", "Mount Eliza"],
    faqs: [
      {
        q: "Do you work with businesses in Frankston?",
        a: "Yes. We work with businesses across Frankston and surrounding areas including Seaford, Carrum Downs, and Mount Eliza, helping them get found by local customers on Google.",
      },
      {
        q: "What digital marketing services do you offer in Frankston?",
        a: "We offer SEO, Google Ads management, website design, and Google Business Profile optimisation for Frankston businesses, tailored to a growing regional market.",
      },
      {
        q: "How much does digital marketing cost for a Frankston business?",
        a: "Pricing depends on your industry and which services you need. We offer a free strategy call to assess your Frankston business and provide a tailored, no-obligation quote.",
      },
      {
        q: "How fast can I expect results?",
        a: "Google Ads can generate leads within days of launching. SEO typically takes 3-6 months for meaningful ranking improvements but keeps working long after, which matters in a growing hub like Frankston.",
      },
    ],
  },
};

export const suburbList = Object.values(suburbs);
