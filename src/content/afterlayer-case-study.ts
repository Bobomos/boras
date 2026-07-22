import type { Project } from "./types";

type AfterlayerCaseStudy = Required<Pick<Project, "summary" | "description" | "sections">>;

export const afterlayerCaseStudy: AfterlayerCaseStudy = {
  summary: "Designing the product experience that begins after checkout.",
  description: "A product platform that turns fragmented manuals, warranty information and support journeys into a useful, branded aftercare experience.",
  sections: [
    {
      eyebrow: "01 — The opportunity",
      title: "The missing product layer begins after the sale.",
      paragraphs: [
        "A customer buys a new product. Inside the box, they find the product, protective cardboard and a small booklet printed in eight languages. The booklet goes into a drawer. The warranty card goes somewhere ‘safe.’ A QR code may exist, although nobody is entirely sure whether it leads to a manual, the homepage or an expired campaign.",
        "Everything is fine until the customer needs something: how should the product be cleaned, is a part replaceable, where is the serial number and does the warranty cover the problem? At that moment, the relationship becomes a search through PDFs, old emails, support forms and product pages that may no longer exist.",
        "Afterlayer gives every product a persistent digital destination for setup guidance, care instructions, repair information, warranty support, replacement parts and product passport data. For brands, it transforms scattered documentation into structured, maintainable and measurable customer experiences."
      ],
      quote: "The goal was not to create a better PDF reader. It was to design the missing product layer between the sale and the end of the product’s life."
    },
    {
      eyebrow: "02 — My role",
      title: "Founder, Product Designer and Product Strategist.",
      paragraphs: [
        "I worked independently across product strategy and positioning, market and competitor analysis, information architecture, customer and brand-side flows, product taxonomy, UX and interaction design, responsive interfaces, AI-assisted content workflows, Digital Product Passports, prototyping, MVP prioritisation, the design system, and the business model and pilot structure.",
        "Timeline: 2026–ongoing. Platform: responsive web application and mobile product pages. Primary users: product brands and their customers. Initial market: European premium and design-led brands."
      ],
      list: ["Product strategy and positioning", "Information architecture and content structure", "Customer and brand-side experience design", "AI-assisted content workflows", "MVP, design system and pilot structure"]
    },
    {
      eyebrow: "03 — The starting point",
      title: "The sale was not the end of the experience.",
      paragraphs: [
        "Before purchase, almost every interaction is carefully designed: product pages, comparison tools, campaigns, photography, reviews, retargeting and checkout. After purchase, information arrives through printed manuals, PDF downloads, warranty cards, emails, packaging, support pages, distributor sites and separate repair portals.",
        "The information may exist, but it does not behave like a product. It is static, duplicated and difficult to maintain. Instructions change, products receive revisions and support knowledge grows while the original PDF remains quietly unchanged.",
        "Customers cannot easily find what they need. Support teams repeatedly answer questions the product should already explain. Brands lose visibility after the sale, repair and replacement services remain disconnected, and regulatory information becomes an isolated compliance task."
      ],
      quote: "What would the post-purchase experience look like if it were designed with the same care as the purchase?"
    },
    {
      eyebrow: "04 — Reframing the problem",
      title: "The visible problem was a manual. The deeper problem was fragmented product knowledge.",
      paragraphs: [
        "The first concept was straightforward: scan a QR code and open a mobile-friendly manual. But digitising the manual would only reproduce the existing document structure on a smaller screen.",
        "A manual is organised around documentation. A customer is organised around a problem. They want to set up, clean, repair or identify the product—not read Chapter Four.",
        "The product therefore needed to translate product knowledge into specific, actionable journeys. This reframed Afterlayer from a digital manual tool into a broader aftercare platform."
      ],
      list: ["How do I set this up?", "Can I wash it?", "Which replacement part do I need?", "Is this covered by warranty?", "Can it be repaired?", "What happens at the end of its life?"]
    },
    {
      eyebrow: "05 — Product model",
      title: "The physical product became the organising object.",
      paragraphs: [
        "Afterlayer was designed around a persistent digital identity for each product or SKU, accessible through a QR code, NFC, product URL, purchase email, customer account or support communication.",
        "The customer does not arrive at a generic brand website. They arrive at the experience for the specific product already in their hands. The category, collection and model context are already known.",
        "That small distinction changes the interaction. Setup, care, troubleshooting, repair, warranty, parts, safety, support, materials, origin and end-of-life guidance become parts of one product relationship."
      ],
      list: ["Getting started", "Care and maintenance", "Troubleshooting and repair", "Warranty and replacement parts", "Product passport information", "End-of-life guidance"]
    },
    {
      eyebrow: "06 — Service architecture",
      title: "Two connected experiences had to work as one system.",
      paragraphs: [
        "The customer needed a fast, mobile-first answer to a specific question. They did not want to learn another platform, create an account before discovering how to clean a chair or download an app for a product they use twice a year.",
        "The brand needed a system for creating, maintaining and publishing these experiences across many products. Its information might live in manuals, specification sheets, warranty documents, spreadsheets, websites and the memory of someone in the product department who was unfortunately on holiday.",
        "The customer experience could remain simple only if the operational experience behind it was carefully structured."
      ],
      list: ["Product and SKU creation", "Document upload and extraction", "Review, editing and approval", "Translation and publishing", "Version management", "Customer requests and analytics"]
    },
    {
      eyebrow: "07 — Customer experience",
      title: "The interface was organised around moments of need.",
      paragraphs: [
        "A customer opening the page just after purchase may need setup instructions. Months later, they may return for care guidance. Years later, they may need a replacement part or repair information. The page needed to remain useful throughout the product’s life.",
        "The hierarchy prioritised actions rather than document sections. Get started covered essential setup; Care covered cleaning, maintenance and storage; Repair provided diagnostics and next steps; Parts identified compatible components; Warranty clarified coverage; Support preserved product context; and Product information exposed passport data.",
        "A light, a leather bag and a child’s stroller do not require the same content, but they can share a common product logic."
      ]
    },
    {
      eyebrow: "08 — Information design",
      title: "Progressive disclosure prevented another information wall.",
      paragraphs: [
        "Digital Product Passports introduce more information about materials, provenance, repairability and end-of-life handling. Placing all of it on one extremely long page is not the same as transparency.",
        "The main page surfaced common actions and urgent information. Detailed technical, regulatory and material data remained accessible when required. A customer cleaning a fabric product first needs the correct care method; composition, certification and recycling guidance can follow.",
        "The objective was not to hide complexity. It was to organise it around use."
      ]
    },
    {
      eyebrow: "09 — Content operations",
      title: "Existing documentation became structured product content.",
      paragraphs: [
        "Brands already had much of the information Afterlayer required. The problem was its form: long manuals, technical PDFs, care sheets, warranty policies, specifications, certificates, website copy and internal spreadsheets.",
        "Manually converting these materials into structured mobile pages for every SKU would create an expensive content operation. A brand could instead upload its documentation and receive proposed content blocks for setup, care, safety, warranty, parts, materials, repair and product identifiers.",
        "The result did not publish automatically. It became an editable draft. AI reduced the effort required to structure the information without becoming the final authority on what customers should see."
      ]
    },
    {
      eyebrow: "10 — AI interaction model",
      title: "AI worked as a content operations assistant, not a spectacle.",
      paragraphs: [
        "The product information already existed; it was scattered, inconsistent and hard to maintain. AI’s job was to detect document sections, extract product-specific information, propose categories, improve readability, identify gaps, support translation and suggest reusable blocks.",
        "The brand team remained responsible for review and approval. An incorrect care instruction can damage a product. An invented warranty condition can create legal and service problems. A missing safety warning can create considerably worse problems than a disappointing chatbot conversation.",
        "The interface therefore needed to make AI output inspectable."
      ],
      list: ["Detect and extract", "Structure and rewrite", "Identify missing information", "Support translation", "Connect every proposal to its source", "Keep approval with the brand"]
    },
    {
      eyebrow: "11 — Trust and provenance",
      title: "Every extracted instruction needed a clear origin.",
      paragraphs: [
        "Afterlayer was not designed to produce free-floating product copy that merely sounded plausible. Generated content remained connected to the source document and section from which it was derived wherever possible.",
        "Reviewers could verify proposed content, trace updates, identify conflicts, reprocess new document versions and understand why a particular instruction appeared.",
        "The product distinguished original source material, AI-extracted content, AI-rewritten content, brand-edited content and published customer information. The aim was not to remove human review, but to make it manageable across many products."
      ]
    },
    {
      eyebrow: "12 — Brand workspace",
      title: "Documents were sources. The product record was the persistent object.",
      paragraphs: [
        "The primary workflow moved from product import and identity data through document upload, structuring, review, approval, language and brand configuration, preview, publishing and monitoring.",
        "Several documents could contribute to one experience: a manual supplied setup information, a care sheet supplied maintenance instructions, a warranty document defined coverage and a parts catalogue supplied compatible components.",
        "The customer never needed to know which internal file contained the answer."
      ],
      list: ["Create or import the product", "Upload source documents", "Structure the information", "Review and approve content blocks", "Preview and publish", "Monitor usage and requests"]
    },
    {
      eyebrow: "13 — Content model",
      title: "Reusable blocks connected editing, publishing and the customer interface.",
      paragraphs: [
        "Pages were built from structured blocks rather than fixed templates or unstructured rich text. Blocks could represent instruction steps, warnings, care guidance, materials, warranty summaries, repair actions, parts, downloads, contacts, certifications and passport fields.",
        "The model made content easier to reorder, maintain, translate and adapt by category. It gave AI a defined output format and allowed future capabilities to enter without redesigning the entire page.",
        "A new repairability block could be added to the system without becoming a separate product area."
      ]
    },
    {
      eyebrow: "14 — Digital Product Passport",
      title: "Compliance did not need its own graveyard.",
      paragraphs: [
        "It would have been easy to isolate Digital Product Passport data behind a large table and a button labelled ‘Product Passport.’ Customers would open it once, perhaps by accident, and leave.",
        "Much of the required information can improve aftercare. Materials support care and recycling; identification supports warranty and parts; repair data extends product life; origin improves transparency; and end-of-life guidance helps customers later.",
        "Compliance and usefulness are not identical, but they can share the same information foundation. Brands should not need one system for customers and another for regulation, each holding a slightly different version of the same product."
      ]
    },
    {
      eyebrow: "15 — Repair and warranty",
      title: "Repair became a journey, and warranty stopped requiring archaeology.",
      paragraphs: [
        "‘Repairable’ is not useful on its own. Customers still need to diagnose the issue, understand what is safe, identify the correct part or service, begin a request and preserve product context throughout the process.",
        "The customer should not need to begin a generic form with, ‘I bought one of your products a few years ago. It is the blue one.’ The system already knows which product they are viewing.",
        "Warranty information clarified whether the product was covered, what coverage included, which evidence was required, how to begin and what would happen next. The longer-term opportunity was to connect the physical product, purchase record and request without asking customers to reconstruct the relationship."
      ]
    },
    {
      eyebrow: "16 — Measurement",
      title: "Aftercare could become product insight, not only a service cost.",
      paragraphs: [
        "Traditional manuals provide almost no feedback. Brands do not know whether customers opened them, which sections helped, where confusion appeared, which products generated questions or which instructions failed to prevent support tickets.",
        "A digital layer made product-page visits, content use, care and repair interest, warranty starts, parts interactions, support escalation, language usage and repeat visits visible.",
        "The objective was not to turn every instruction into an engagement metric. It was to improve documentation, product design, packaging, support, parts planning, warranty operations and future development."
      ]
    },
    {
      eyebrow: "17 — Brand expression",
      title: "The system supported the brand without replacing its identity.",
      paragraphs: [
        "The customer was interacting with the product brand, not Afterlayer. Too much standardisation would make premium products feel generic; too much customisation would make the platform difficult to maintain and force customers to relearn navigation for every brand.",
        "A controlled branding system allowed typography, colour, logo, imagery, tone of voice and selected layout treatments to change while the underlying hierarchy and interaction patterns remained consistent.",
        "Customers could recognise the brand without solving a new navigation puzzle."
      ]
    },
    {
      eyebrow: "18 — Localisation",
      title: "Multilingual by structure, not duplication.",
      paragraphs: [
        "For European brands, multilingual support could not be added as an afterthought. Separate pages for every language would duplicate content and create difficult update workflows.",
        "The block model kept translations connected to the same source structure. Teams could identify changed care instructions, surface missing translations and review language-specific versions without maintaining separate product pages.",
        "AI could assist, but safety, legal and technical content still required approval. Language was treated as product data rather than a layer applied after publishing."
      ]
    },
    {
      eyebrow: "19 — MVP",
      title: "The first release needed to prove one central loop.",
      paragraphs: [
        "The long-term vision covered passports, repair, parts, warranty, support, analytics and personalised ownership. Building it all at once would have created a comprehensive product nobody had yet used.",
        "The MVP asked whether a brand could turn existing product information into a useful post-purchase experience without creating a large new content operation.",
        "The scope connected both sides: the brand could create and publish the experience, and the customer could access and use it. More advanced capabilities could follow after validating this loop."
      ],
      list: ["Product and SKU creation", "Document upload and AI-assisted extraction", "Structured block editor", "Mobile product page", "Care, warranty and parts journeys", "Multilingual support, analytics and offline guides"]
    },
    {
      eyebrow: "20 — Product principles",
      title: "The physical product provided the strongest context.",
      paragraphs: [
        "Start with the item the customer owns. Answer common questions before escalating, and preserve product context when support is necessary. Build reliable structure before personalisation.",
        "AI proposes; brands approve. Customer-friendly content remains traceable to official documentation. The experience is designed for the product’s life rather than the campaign around its launch.",
        "Regulatory information should strengthen ownership where possible instead of becoming an isolated database."
      ],
      list: ["Start with the product", "Answer before escalating", "Structure before personalisation", "AI proposes, brands approve", "Preserve the source", "Make compliance useful"]
    },
    {
      eyebrow: "21 — Trade-offs",
      title: "The product balanced speed with reliability and depth with attention.",
      paragraphs: [
        "Document ingestion reduced setup effort, while validation and missing-information states kept data quality visible. Assisted publishing was slower than full automation but appropriate for safety, warranty, care and repair information.",
        "The experience standardised behaviour and hierarchy while allowing controlled brand expression. It prioritised task-relevant content and revealed comprehensive passport data progressively.",
        "Accounts could support registration and history, but requiring one before showing instructions created unnecessary friction. The initial experience therefore worked without mandatory registration."
      ],
      list: ["Setup effort vs data quality", "Automation vs reliability", "Standardisation vs brand expression", "Comprehensive data vs customer attention", "Customer accounts vs immediate access"]
    },
    {
      eyebrow: "22 — Outcome",
      title: "From digital manual to a testable aftercare system.",
      paragraphs: [
        "Afterlayer evolved into a system connecting product information, customer needs and brand operations. The model established a persistent product identity, a mobile-first customer experience, structured aftercare content, an AI-assisted document workflow, brand review and approval, reusable publishing blocks, multilingual architecture and measurable post-purchase interactions.",
        "At this stage, the project has established the product strategy, core experience and MVP architecture. It would be inaccurate to claim improvements in support cost, repeat purchase or product longevity before pilot data exists.",
        "The immediate outcome is not a percentage. It is a testable product system. The next validation must determine whether brands can publish efficiently and customers can resolve post-purchase needs more easily."
      ]
    },
    {
      eyebrow: "23 — What I learned",
      title: "Post-purchase is an information design problem.",
      paragraphs: [
        "Many aftercare failures look like customer service problems but begin earlier: information exists, yet it is fragmented, inaccessible or organised around internal documents instead of customer needs.",
        "AI becomes useful when it has a defined operational job. Clear schemas, source references and review states mattered more than making the interface appear intelligent. Regulation exposed a weakness that already existed: many companies lack one reliable, customer-usable product record after sale.",
        "A QR code or NFC tag is valuable when it preserves context. Customers should not scan a product and arrive at the homepage; they should arrive at the next useful action for that specific item."
      ]
    },
    {
      eyebrow: "24 — Next steps",
      title: "Validate the core loop through focused product pilots.",
      paragraphs: [
        "The next phase will test whether brands can publish structured aftercare from existing documentation, how much review AI extraction requires, which modules matter by category, whether customers return, and which needs can be resolved before reaching support.",
        "Future development may include ownership history, advanced warranty, repair-provider integrations, replacement-parts commerce, customer-specific guidance, expanded passport schemas, lifecycle notifications, support integrations, issue detection, resale and ownership transfer.",
        "The long-term goal is not to place more information behind a QR code. It is to give every product a useful life after the sale—and give customers somewhere better to go than a PDF called manual_final_v7_updated.pdf."
      ]
    }
  ]
};
