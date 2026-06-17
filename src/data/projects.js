import remi1 from '@/assets/project/remi1.png'
import remi2 from '@/assets/project/remi2.png'
import remi3 from '@/assets/project/remi3.png'
import remi4 from '@/assets/project/remi4.png'

export const projects = [
  {
    slug: 'dwp-digital-workplace',
    title: 'DWP - Digital Workplace',
    category: 'enterprise',
    categoryLabel: 'Key Project',
    role: 'Frontend Developer',
    status: 'Internal system',
    organization: 'Bank Indonesia',
    description: 'An internal information system supporting strategic decision-making for the Board of Governors of Bank Indonesia.',
    problem: 'Executive users needed a centralized platform for real-time economic and monetary indicators, policy documents, meeting minutes, collaboration, and approval workflows.',
    solution: 'Built dashboard, document, collaboration, and workflow interfaces with reusable Vue components and API-connected screens.',
    contribution: 'Built responsive Vue.js interfaces, integrated RESTful APIs, optimized frontend performance, and supported document/editor-related workflows.',
    results: [
      'Supported faster access to strategic information and policy documents.',
      'Improved consistency across dashboard, document, and approval workflow screens.',
      'Helped maintain responsive, cross-browser enterprise frontend behavior.'
    ],
    features: [
      'Executive dashboard for real-time economic and monetary indicators',
      'Digital document management for policies and meeting minutes',
      'Cross-department collaboration and automated approval workflow screens',
      'Frontend optimization for speed, scalability, and cross-browser compatibility'
    ],
    tags: ['Vue.js', 'Vuex', 'Vuetify', 'Bootstrap', 'CKEditor', 'Aspose', 'JavaScript', 'HTML', 'CSS'],
    metrics: ['Internal System', 'Dashboard', 'Workflow', 'Bank Indonesia', 'API Integration'],
    systemFlow: ['Authorized User', 'Vue Frontend', 'REST API', 'Document Workflow', 'Approval Dashboard'],
    process: ['Requirement mapping', 'UI implementation', 'API integration', 'Review and maintenance'],
    codeSnippet: [
      'const indicators = await dashboardService.getIndicators()',
      'store.commit("dashboard/setItems", indicators)',
      'const approvalPayload = mapFormToWorkflow(formState)',
      'await workflowService.submitApproval(approvalPayload)'
    ],
    images: [],
    visualLabel: 'DWP',
    visualCaption: 'Digital Workplace key project',
    demoLink: '',
    githubLink: ''
  },
  {
    slug: 'dbp-opex-mapp',
    title: 'DBP Opex MAPP',
    category: 'enterprise',
    categoryLabel: 'Key Project',
    role: 'Frontend Developer',
    status: 'Internal system',
    organization: 'Bank Indonesia',
    description: 'An IT procurement project for Bank Indonesia focused on developing and maintaining operational application management for efficiency.',
    problem: 'Operational teams needed a more efficient system to support application management, procurement-related workflows, and structured operational data handling.',
    solution: 'Developed frontend modules for operational workflows with responsive views, structured forms, and integration-ready UI.',
    contribution: 'Developed frontend modules, maintained application UI consistency, and supported API-connected flows across the MAPP system.',
    results: [
      'Helped improve operational application management workflows.',
      'Delivered responsive screens for procurement and operational data handling.',
      'Supported maintainable frontend implementation for internal users.'
    ],
    features: [
      'Operational application management interface',
      'Procurement-oriented frontend workflows',
      'Responsive application screens with structured forms and data views',
      'Frontend maintenance and integration support for operational efficiency'
    ],
    tags: ['Vue.js', 'TypeScript', 'JavaScript', 'Quill', 'Vuetify', 'Bootstrap', 'HTML', 'CSS'],
    metrics: ['Procurement', 'Operations', 'Internal Tool', 'TypeScript', 'Workflow'],
    systemFlow: ['Operations User', 'Vue Module', 'REST API', 'Procurement Data', 'Operational Report'],
    process: ['Workflow analysis', 'Form and table UI', 'TypeScript implementation', 'Maintenance support'],
    codeSnippet: [
      'const payload = buildProcurementPayload(form)',
      'await mappService.saveOperationalRequest(payload)',
      'const rows = normalizeTableResponse(response.data)',
      'state.requests = rows'
    ],
    images: [],
    visualLabel: 'MAPP',
    visualCaption: 'DBP Opex key project',
    demoLink: '',
    githubLink: ''
  },
  {
    slug: 'kks-cybersecurity-compliance',
    title: 'KKS - Keamanan & Ketahanan Siber',
    category: 'enterprise',
    categoryLabel: 'Key Project',
    role: 'Frontend Developer',
    status: 'Internal compliance system',
    organization: 'Bank Indonesia',
    description: 'A mandatory cybersecurity compliance system for payment system operators and financial institutions under Bank Indonesia supervision.',
    problem: 'Regulated institutions needed a digital system for cybersecurity compliance, threat prevention, incident response, and annual audit reporting.',
    solution: 'Created frontend screens for compliance submission, incident reporting, audit reporting, and structured regulatory workflows.',
    contribution: 'Built frontend screens for compliance workflows, reporting flows, and structured cybersecurity-related data submission.',
    results: [
      'Supported digital compliance reporting for supervised institutions.',
      'Improved structure for cybersecurity audit and incident reporting flows.',
      'Helped translate regulatory workflows into usable frontend pages.'
    ],
    features: [
      'Cybersecurity compliance reporting interface',
      'Incident response and audit reporting flows',
      'Structured data submission for supervised institutions',
      'Responsive frontend pages for regulatory workflows'
    ],
    tags: ['Vue.js', 'DevExtreme', 'Razor', 'JavaScript', 'HTML', 'CSS'],
    metrics: ['Compliance', 'Cybersecurity', 'Reporting', 'Regulatory Workflow', 'Bank Indonesia'],
    systemFlow: ['Institution User', 'Compliance UI', 'REST Endpoint', 'Audit Data', 'BI Supervision'],
    process: ['Compliance flow mapping', 'Reporting UI', 'Data submission', 'Cross-browser review'],
    codeSnippet: [
      'const report = mapComplianceForm(values)',
      'await complianceService.submitAnnualReport(report)',
      'const incidents = await complianceService.getIncidents()',
      'state.incidentRows = incidents'
    ],
    images: [],
    visualLabel: 'KKS',
    visualCaption: 'Cybersecurity compliance key project',
    demoLink: '',
    githubLink: ''
  },
  {
    slug: 'rummy-live-score-calculator',
    title: 'Rummy Live Score Calculator',
    category: 'personal',
    categoryLabel: 'Personal product',
    role: 'Frontend Developer',
    status: 'Public demo',
    organization: 'Personal project',
    description: 'A real-time scoring app that helps Rummy players calculate, track, and share game scores.',
    problem: 'Manual scorekeeping slowed down the game and made score history hard to review.',
    solution: 'Designed a mobile-friendly score app with realtime data, simple score entry, and game history.',
    contribution: 'Designed and built the Vue.js frontend, realtime score flow, responsive UI, and game history experience.',
    results: [
      'Reduced manual scorekeeping friction during games.',
      'Made live score sharing easier through a public web link.',
      'Provided a simple mobile-first experience for casual game sessions.'
    ],
    features: [
      'Live score tracking for multiple players',
      'Realtime database integration with Firebase',
      'Game history and score review flow',
      'Mobile-friendly interface for use during live games'
    ],
    tags: ['Vue.js', 'JavaScript', 'Firebase', 'Realtime Database', 'LocalStorage', 'Bootstrap', 'HTML', 'CSS'],
    metrics: ['Realtime App', 'Personal Product', 'Firebase', 'Mobile UI', 'Live Demo'],
    systemFlow: ['Game Host', 'Vue App', 'Firebase Realtime DB', 'Score History', 'Shared Link'],
    process: ['Score flow design', 'Realtime database setup', 'Mobile UI build', 'Live demo deployment'],
    codeSnippet: [
      'const scoreRef = ref(database, `games/${gameId}/scores`)',
      'await update(scoreRef, nextScoreState)',
      'onValue(scoreRef, snapshot => syncScores(snapshot.val()))',
      'localStorage.setItem("lastGame", gameId)'
    ],
    images: [remi1, remi2, remi3, remi4],
    visualLabel: 'RSC',
    visualCaption: 'Realtime score app placeholder',
    demoLink: 'https://aplikasi-remi.netlify.app/',
    githubLink: ''
  }
]

export function getProjectBySlug(slug) {
  return projects.find(project => project.slug === slug)
}
