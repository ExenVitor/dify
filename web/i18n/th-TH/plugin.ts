const translation = {
  category: {
    extensions: 'นาม สกุล',
    models: 'รุ่น',
    tools: 'เครื่อง มือ',
    agents: 'กลยุทธ์ตัวแทน',
    all: 'ทั้งหมด',
    bundles: 'ชุดรวม',
  },
  categorySingle: {
    tool: 'เครื่องมือ',
    extension: 'การเพิ่ม',
    agent: 'กลยุทธ์ตัวแทน',
    model: 'แบบ',
    bundle: 'มัด',
  },
  list: {
    source: {
      github: 'ติดตั้งจาก GitHub',
      local: 'ติดตั้งจากไฟล์แพ็คเกจในเครื่อง',
      marketplace: 'ติดตั้งจาก Marketplace',
    },
    noInstalled: 'ไม่ได้ติดตั้งปลั๊กอิน',
    notFound: 'ไม่พบปลั๊กอิน',
  },
  source: {
    local: 'ไฟล์แพ็คเกจในเครื่อง',
    github: 'เกวบ',
    marketplace: 'ตลาด',
  },
  detailPanel: {
    categoryTip: {
      debugging: 'ปลั๊กอินการดีบัก',
      local: 'ปลั๊กอินท้องถิ่น',
      marketplace: 'ติดตั้งจาก Marketplace',
      github: 'ติดตั้งจาก Github',
    },
    operation: {
      info: 'ข้อมูลปลั๊กอิน',
      detail: 'ราย ละเอียด',
      install: 'ติดตั้ง',
      update: 'อัพเดต',
      viewDetail: 'ดูรายละเอียด',
      checkUpdate: 'ตรวจสอบการอัปเดต',
      remove: 'ถอด',
    },
    toolSelector: {
      settings: 'การตั้งค่าผู้ใช้',
      placeholder: 'เลือกเครื่องมือ...',
      params: 'การกําหนดค่าเหตุผล',
      paramsTip2: 'เมื่อปิด \'อัตโนมัติ\' จะใช้ค่าเริ่มต้น',
      toolLabel: 'เครื่องมือ',
      paramsTip1: 'ควบคุมพารามิเตอร์การอนุมาน LLM',
      uninstalledLink: 'จัดการในปลั๊กอิน',
      unsupportedContent: 'เวอร์ชันปลั๊กอินที่ติดตั้งไม่มีการดําเนินการนี้',
      title: 'เพิ่มเครื่องมือ',
      unsupportedContent2: 'คลิกเพื่อเปลี่ยนเวอร์ชัน',
      empty: 'คลิกปุ่ม \'+\' เพื่อเพิ่มเครื่องมือ คุณสามารถเพิ่มเครื่องมือได้หลายอย่าง',
      descriptionLabel: 'คําอธิบายเครื่องมือ',
      auto: 'อัตโนมัติ',
      unsupportedTitle: 'การดําเนินการที่ไม่รองรับ',
      uninstalledTitle: 'ไม่ได้ติดตั้งเครื่องมือ',
      descriptionPlaceholder: 'คําอธิบายสั้น ๆ เกี่ยวกับวัตถุประสงค์ของเครื่องมือ เช่น รับอุณหภูมิสําหรับตําแหน่งเฉพาะ',
      uninstalledContent: 'ปลั๊กอินนี้ติดตั้งจากที่เก็บในเครื่อง/GitHub กรุณาใช้หลังการติดตั้ง',
      toolSetting: 'การตั้งค่าเครื่องมือ',
      unsupportedMCPTool: 'รุ่นปลั๊กอินกลยุทธ์ตัวแทนที่เลือกในขณะนี้ไม่สนับสนุนเครื่องมือ MCP.',
    },
    endpointDisableContent: 'คุณต้องการปิดการใช้งาน {{name}} หรือไม่?',
    configureApp: 'กําหนดค่าแอป',
    configureTool: 'กําหนดค่าเครื่องมือ',
    switchVersion: 'สลับเวอร์ชัน',
    endpointModalTitle: 'ปลายทางการตั้งค่า',
    actionNum: '{{num}} {{การกระทํา}} รวม',
    strategyNum: '{{num}} {{กลยุทธ์}} รวม',
    endpointsDocLink: 'ดูเอกสาร',
    configureModel: 'กําหนดค่าแบบจําลอง',
    endpointModalDesc: 'เมื่อกําหนดค่าแล้ว สามารถใช้คุณสมบัติที่ปลั๊กอินให้ผ่านปลายทาง API ได้',
    modelNum: '{{num}} รุ่นรวม',
    endpointDisableTip: 'ปิดใช้งานปลายทาง',
    endpointDeleteTip: 'ลบปลายทาง',
    disabled: 'พิการ',
    endpointDeleteContent: 'คุณต้องการลบ {{name}} หรือไม่?',
    endpoints: 'ปลาย ทาง',
    endpointsTip: 'ปลั๊กอินนี้มีฟังก์ชันเฉพาะผ่านปลายทาง และคุณสามารถกําหนดค่าชุดปลายทางหลายชุดสําหรับพื้นที่ทํางานปัจจุบันได้',
    endpointsEmpty: 'คลิกปุ่ม \'+\' เพื่อเพิ่มปลายทาง',
    serviceOk: 'บริการตกลง',
    deprecation: {
      reason: {
        ownershipTransferred: 'การโอนความเป็นเจ้าของ',
        businessAdjustments: 'การปรับเปลี่ยนธุรกิจ',
        noMaintainer: 'ไม่มีผู้ดูแล',
      },
      onlyReason: 'ปลั๊กอินนี้ถูกเลิกใช้เนื่องจาก {{deprecatedReason}} และจะไม่มีการอัปเดตอีกต่อไป.',
      noReason: 'ปลั๊กอินนี้ได้ถูกยกเลิกใช้งานและจะไม่มีการอัปเดตอีกต่อไป.',
      fullMessage: 'ปลั๊กอินนี้ถูกยกเลิกการใช้งานเนื่องจาก {{เหตุผลที่ถูกยกเลิก}} และจะไม่มีการอัปเดตอีกต่อไป กรุณาใช้ <CustomLink href=\'https://example.com/\'>{{-alternativePluginId}}</CustomLink> แทน.',
    },
  },
  debugInfo: {
    viewDocs: 'ดูเอกสาร',
    title: 'การแก้จุดบกพร่อง',
  },
  privilege: {
    everyone: 'ทุกคน',
    whoCanInstall: 'ใครสามารถติดตั้งและจัดการปลั๊กอินได้บ้าง',
    noone: 'ไม่มีใคร',
    whoCanDebug: 'ใครสามารถดีบักปลั๊กอินได้บ้าง',
    title: 'การตั้งค่าปลั๊กอิน',
    admins: 'ผู้ดูแลระบบ',
  },
  pluginInfoModal: {
    packageName: 'ห่อ',
    title: 'ข้อมูลปลั๊กอิน',
    release: 'ปล่อย',
    repository: 'เก็บ',
  },
  action: {
    pluginInfo: 'ข้อมูลปลั๊กอิน',
    deleteContentLeft: 'คุณต้องการลบ',
    deleteContentRight: 'ปลั๊กอิน?',
    usedInApps: 'ปลั๊กอินนี้ถูกใช้ในแอป {{num}}',
    delete: 'ลบปลั๊กอิน',
    checkForUpdates: 'ตรวจสอบการอัปเดต',
  },
  installModal: {
    labels: {
      version: 'เวอร์ชัน',
      package: 'ห่อ',
      repository: 'เก็บ',
    },
    pluginLoadErrorDesc: 'ปลั๊กอินนี้จะไม่ถูกติดตั้ง',
    readyToInstall: 'เกี่ยวกับการติดตั้งปลั๊กอินต่อไปนี้',
    uploadFailed: 'อัปโหลดล้มเหลว',
    installFailed: 'การติดตั้งล้มเหลว',
    installedSuccessfullyDesc: 'ติดตั้งปลั๊กอินสําเร็จแล้ว',
    readyToInstallPackage: 'เกี่ยวกับการติดตั้งปลั๊กอินต่อไปนี้',
    dropPluginToInstall: 'วางแพ็คเกจปลั๊กอินที่นี่เพื่อติดตั้ง',
    install: 'ติดตั้ง',
    back: 'ย้อนกลับ',
    cancel: 'ยกเลิก',
    installPlugin: 'ติดตั้งปลั๊กอิน',
    readyToInstallPackages: 'เกี่ยวกับการติดตั้งปลั๊กอิน {{num}} ต่อไปนี้',
    uploadingPackage: 'กําลังอัปโหลด {{packageName}}...',
    installFailedDesc: 'ติดตั้งปลั๊กอินล้มเหลว',
    next: 'ต่อไป',
    fromTrustSource: 'โปรดตรวจสอบให้แน่ใจว่าคุณติดตั้งปลั๊กอินจาก<trustSource>แหล่งที่เชื่อถือได้</trustSource>เท่านั้น',
    installing: 'ติด ตั้ง   ',
    close: 'ปิด',
    installedSuccessfully: 'การติดตั้งสําเร็จ',
    installComplete: 'การติดตั้งเสร็จสมบูรณ์',
    pluginLoadError: 'ข้อผิดพลาดในการโหลดปลั๊กอิน',
    installWarning: 'ไม่อนุญาตให้ติดตั้งปลั๊กอินนี้',
  },
  installFromGitHub: {
    updatePlugin: 'อัปเดตปลั๊กอินจาก GitHub',
    gitHubRepo: 'ที่เก็บ GitHub',
    installNote: 'โปรดตรวจสอบให้แน่ใจว่าคุณติดตั้งปลั๊กอินจากแหล่งที่เชื่อถือได้เท่านั้น',
    installedSuccessfully: 'การติดตั้งสําเร็จ',
    uploadFailed: 'อัปโหลดล้มเหลว',
    selectVersionPlaceholder: 'โปรดเลือกเวอร์ชัน',
    selectPackagePlaceholder: 'โปรดเลือกแพ็กเกจ',
    installFailed: 'การติดตั้งล้มเหลว',
    selectVersion: 'เลือกรุ่น',
    installPlugin: 'ติดตั้งปลั๊กอินจาก GitHub',
    selectPackage: 'เลือกแพ็กเกจ',
  },
  upgrade: {
    description: 'เกี่ยวกับการติดตั้งปลั๊กอินต่อไปนี้',
    title: 'ติดตั้งปลั๊กอิน',
    upgrading: 'ติด ตั้ง   ',
    successfulTitle: 'ติดตั้งสําเร็จ',
    upgrade: 'ติดตั้ง',
    usedInApps: 'ใช้ในแอป {{num}}',
    close: 'ปิด',
  },
  error: {
    noReleasesFound: 'ไม่พบข่าวประชาสัมพันธ์ โปรดตรวจสอบที่เก็บ GitHub หรือ URL ที่ป้อนข้อมูล',
    inValidGitHubUrl: 'URL GitHub ไม่ถูกต้อง โปรดป้อน URL ที่ถูกต้องในรูปแบบ: https://github.com/owner/repo',
    fetchReleasesError: 'ไม่สามารถดึงข้อมูลการเผยแพร่ได้ โปรดลองอีกครั้งในภายหลัง',
  },
  marketplace: {
    sortOption: {
      newlyReleased: 'เปิดตัวใหม่',
      mostPopular: 'แห่ง',
      recentlyUpdated: 'อัพเดทล่าสุด',
      firstReleased: 'เปิดตัวครั้งแรก',
    },
    viewMore: 'ดูเพิ่มเติม',
    moreFrom: 'แอปเพิ่มเติมจาก Marketplace',
    pluginsResult: '{{num}} ผลลัพธ์',
    and: 'และ',
    sortBy: 'เมืองสีดํา',
    discover: 'ค้นพบ',
    noPluginFound: 'ไม่พบปลั๊กอิน',
    empower: 'เพิ่มศักยภาพในการพัฒนา AI ของคุณ',
    difyMarketplace: 'ตลาด Dify',
    partnerTip: 'ได้รับการตรวจสอบโดยพันธมิตรของ Dify',
    verifiedTip: 'ได้รับการตรวจสอบโดย Dify',
  },
  task: {
    installing: 'การติดตั้งปลั๊กอิน {{installingLength}} 0 เสร็จแล้ว',
    installingWithError: 'การติดตั้งปลั๊กอิน {{installingLength}}, {{successLength}} สําเร็จ, {{errorLength}} ล้มเหลว',
    installingWithSuccess: 'การติดตั้งปลั๊กอิน {{installingLength}}, {{successLength}} สําเร็จ',
    installedError: '{{errorLength}} ปลั๊กอินติดตั้งไม่สําเร็จ',
    clearAll: 'ล้างทั้งหมด',
    installError: '{{errorLength}} ปลั๊กอินติดตั้งไม่สําเร็จ คลิกเพื่อดู',
  },
  searchCategories: 'หมวดหมู่การค้นหา',
  searchInMarketplace: 'ค้นหาใน Marketplace',
  findMoreInMarketplace: 'ค้นหาเพิ่มเติมใน Marketplace',
  installPlugin: 'ติดตั้งปลั๊กอิน',
  search: 'ค้น',
  from: 'จาก',
  install: '{{num}} การติดตั้ง',
  endpointsEnabled: '{{num}} ชุดของปลายทางที่เปิดใช้งาน',
  searchPlugins: 'ค้นหาปลั๊กอิน',
  installAction: 'ติดตั้ง',
  searchTools: 'เครื่องมือค้นหา...',
  installFrom: 'ติดตั้งจาก',
  fromMarketplace: 'จาก Marketplace',
  allCategories: 'หมวดหมู่ทั้งหมด',
  metadata: {
    title: 'ปลั๊กอิน',
  },
  difyVersionNotCompatible: 'เวอร์ชั่นปัจจุบันของ Dify ไม่สามารถใช้งานร่วมกับปลั๊กอินนี้ได้ กรุณาอัปเกรดไปยังเวอร์ชั่นขั้นต่ำที่ต้องการ: {{minimalDifyVersion}}',
  requestAPlugin: 'ขอปลั๊กอิน',
  publishPlugins: 'เผยแพร่ปลั๊กอิน',
  auth: {
    saveOnly: 'บันทึกเฉพาะ',
    oauthClientSettings: 'การตั้งค่าไคลเอนต์ OAuth',
    addApi: 'เพิ่มคีย์ API',
    setDefault: 'ตั้งเป็นค่าเริ่มต้น',
    addOAuth: 'เพิ่ม OAuth',
    authRemoved: 'ผู้แต่งถูกลบออก',
    default: 'ค่าเริ่มต้น',
    setupOAuth: 'ตั้งค่า OAuth Client',
    useOAuthAuth: 'ใช้การอนุญาต OAuth',
    workspaceDefault: 'พื้นที่ทำงานเริ่มต้น',
    authorization: 'การอนุญาต',
    saveAndAuth: 'บันทึกและอนุญาต',
    useApi: 'ใช้รหัส API',
    authorizations: 'การอนุญาต',
    oauthClient: 'ไคลเอนต์ OAuth',
    authorizationName: 'ชื่อผู้มีอำนาจ',
    useApiAuth: 'การกำหนดค่าการอนุญาตคีย์ API',
    useOAuth: 'ใช้ OAuth',
    custom: 'ที่กำหนดเอง',
    useApiAuthDesc: 'หลังจากตั้งค่าข้อมูลประจำตัวแล้ว สมาชิกทุกคนภายในพื้นที่ทำงานสามารถใช้เครื่องมือนี้เมื่อจัดการแอปพลิเคชันได้',
    clientInfo: 'เนื่องจากไม่พบความลับของลูกค้าสำหรับผู้ให้บริการเครื่องมือนี้ จำเป็นต้องตั้งค่าแบบแมนนวล สำหรับ redirect_uri กรุณาใช้',
  },
  deprecated: 'เลิกใช้',
  autoUpdate: {
    strategy: {
      disabled: {
        name: 'ผู้พิการ',
        description: 'ปลั๊กอินจะไม่อัปเดตอัตโนมัติ',
      },
      fixOnly: {
        name: 'ซ่อมเฉพาะ',
        selectedDescription: 'อัปเดตอัตโนมัติเฉพาะเวอร์ชันแพตช์เท่านั้น',
      },
      latest: {
        name: 'ล่าสุด',
        selectedDescription: 'อัปเดตเป็นเวอร์ชันล่าสุดเสมอ',
        description: 'อัปเดตเป็นเวอร์ชันล่าสุดเสมอ',
      },
    },
    upgradeMode: {
      partial: 'เฉพาะที่เลือกไว้',
      exclude: 'ยกเว้นที่เลือกไว้',
      all: 'อัปเดตทั้งหมด',
    },
    upgradeModePlaceholder: {
      exclude: 'ปลั๊กอินที่เลือกจะไม่อัปเดตอัตโนมัติ',
      partial: 'เฉพาะปลั๊กอินที่เลือกจะอัปเดตโดยอัตโนมัติ ขณะนี้ไม่มีปลั๊กอินใดที่ถูกเลือก ดังนั้นจะไม่มีปลั๊กอินใดที่อัปเดตโดยอัตโนมัติ',
    },
    operation: {
      clearAll: 'ล้างทั้งหมด',
      select: 'เลือกปลั๊กอิน',
    },
    pluginDowngradeWarning: {
      title: 'การลดเวอร์ชันปลั๊กอิน',
      downgrade: 'ลดระดับอยู่ดี',
      exclude: 'ไม่รวมในการอัปเดตอัตโนมัติ',
      description: 'ฟีเจอร์การอัปเดตอัตโนมัติเปิดใช้งานอยู่สำหรับปลั๊กอินนี้ การลดระดับเวอร์ชันอาจทำให้การเปลี่ยนแปลงของคุณหายไปในระหว่างการอัปเดตอัตโนมัติต่อไป',
    },
    noPluginPlaceholder: {
      noInstalled: 'ไม่มีปลั๊กอินติดตั้ง',
      noFound: 'ไม่พบปลั๊กอิน',
    },
    specifyPluginsToUpdate: 'ระบุปลั๊กอินที่จะแ atualizar',
    updateTime: 'เวลาที่อัปเดต',
    updateTimeTitle: 'เวลาที่อัปเดต',
    updateSettings: 'อัปเดตการตั้งค่า',
    nextUpdateTime: 'การอัปเดตอัตโนมัติครั้งถัดไป: {{time}}',
    automaticUpdates: 'การอัปเดตอัตโนมัติ',
    excludeUpdate: 'ปลั๊กอิน {{num}} ต่อไปนี้จะไม่อัพเดตอัตโนมัติ',
    partialUPdate: 'ปลั๊กอิน {{num}} ตัวต่อไปนี้จะอัปเดตให้อัตโนมัติเท่านั้น',
    changeTimezone: 'ในการเปลี่ยนเขตเวลา ให้ไปที่ <setTimezone>การตั้งค่า</setTimezone>',
  },
}

export default translation
