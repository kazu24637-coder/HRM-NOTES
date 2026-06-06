/* Javascript: HRM Comprehensive 4-Unit Study Hub */

document.addEventListener('DOMContentLoaded', () => {
    // --- 1. State Management & Navigation Data ---
    let currentUnit = '1';
    let userAnswers = {}; // Format: { "unit_questionId": optionIndex }
    
    // Sidebar Navigation Links mapping per unit
    const sidebarNavData = {
        '1': [
            { label: '1.1 Nature, Scope, Function...', target: 'u1_topic_1' },
            { label: '1.2 Various Models of Human...', target: 'u1_topic_2' },
            { label: '1.3 Human Resource Managers', target: 'u1_topic_3' },
            { label: '1.4 Responsibilities of Hum...', target: 'u1_topic_4' },
            { label: '1.5 Self-Assessment Quiz', target: 'u1_quiz' }
        ],
        '2': [
            { label: '2.1 Human Resource Planning', target: 'u2_topic_1' },
            { label: '2.2 Forecasting demand and ...', target: 'u2_topic_2' },
            { label: '2.3 Techniques of Manpower ...', target: 'u2_topic_3' },
            { label: '2.4 Analysis of Work', target: 'u2_topic_4' },
            { label: '2.5 Designing Jobs', target: 'u2_topic_5' },
            { label: '2.6 Job Analysis: Job Descr...', target: 'u2_topic_6' },
            { label: '2.7 Job Evaluation Objectiv...', target: 'u2_topic_7' },
            { label: '2.8 HR Processes', target: 'u2_topic_8' },
            { label: '2.9 Recruitment', target: 'u2_topic_9' },
            { label: '2.10 Selection', target: 'u2_topic_10' },
            { label: '2.11 Induction', target: 'u2_topic_11' },
            { label: '2.12 Socialization', target: 'u2_topic_12' },
            { label: '2.13 Recent Development /Em...', target: 'u2_topic_13' },
            { label: '2.14 Use of Digital Tools b...', target: 'u2_topic_14' },
            { label: '2.15 Competency based Selec...', target: 'u2_topic_15' },
            { label: '2.16 Self-Assessment Quiz', target: 'u2_quiz' }
        ],
        '3': [
            { label: '3.1 Training and Developmen...', target: 'u3_topic_1' },
            { label: '3.2 Types of Training', target: 'u3_topic_2' },
            { label: '3.3 Difference between Trai...', target: 'u3_topic_3' },
            { label: '3.4 E-Learning', target: 'u3_topic_4' },
            { label: '3.5 Development of Employee...', target: 'u3_topic_5' },
            { label: '3.6 Performance Appraisal O...', target: 'u3_topic_6' },
            { label: '3.7 Performance Management ...', target: 'u3_topic_7' },
            { label: '3.8 Appraisal Process and M...', target: 'u3_topic_8' },
            { label: '3.9 Employee Empowerment', target: 'u3_topic_9' },
            { label: '3.10 Employee Engagement', target: 'u3_topic_10' },
            { label: '3.11 Self-Assessment Quiz', target: 'u3_quiz' }
        ],
        '4': [
            { label: '4.1 Worklife Balance Defini...', target: 'u4_topic_1' },
            { label: '4.2 Human Resource Informat...', target: 'u4_topic_2' },
            { label: '4.3 Happiness at Work', target: 'u4_topic_3' },
            { label: '4.4 Managing Protean Career', target: 'u4_topic_4' },
            { label: '4.5 Moonlighting Phenomenon', target: 'u4_topic_5' },
            { label: '4.6 Managing Workforce Dive...', target: 'u4_topic_6' },
            { label: '4.7 Self-Assessment Quiz', target: 'u4_quiz' }
        ]
    };

    // Index of all sections for Search functionality
    const searchIndex = [
        { unit: '1', title: 'Nature, Scope, Function of Human Resource Management', keywords: 'knowledge packages activities high while approach screening also relevant interviewing must meet wage individuals prioritizes various advertising crucial not digital with aims the hrm aimed employment fierce ability long internal stress design harassment dynamic https backgrounds aptitude success addressing talent systems proactive functions overseeing limited positive succession gaps most achieve incentives today ethical promoting harmonious work human technology vacant ensure overall advantage support sourcing capabilities different productive end remote alignment conflicts anti continuous law they that background recognizing motivated external pipeline healthy other needs offering aligning shared strategy salaries within management developing inclusion 2019 verification positions challenges relationships future fair organizational qualified such job rapid working enhance managers providing promote but complex labor role equity issues perks collaborative its trends satisfaction environment competition adapting diversity respected balance centric feedback evolving fairness coaching improvement area structures ensures address experience selection com efficiency pivotal enhancing healthcare function market comprehensive complies grievances industry', target: 'u1_topic_1' },
        { unit: '1', title: 'Various Models of Human Resource Management, Merit and Demerits of HRM Models', keywords: 'employees external holistic rigidity other needs employee offering outcomes structured improved approaches making may activities difficult covers aligning primarily high macro foster schuler strategy financial adaptable david intensive developed within immediate approach management also encourages flexibility appraisal welfare should thorough john developing complexity lack calculative warwick policies improving emphasizes some integrates wide challenges various dual broad 2024 reward influence environments organizational factors rewards such neglecting adapt harvard difficulty across nature key organizations situational challenging enhance with culture improve organization combines aims stakeholder the hrm balancing processes 1987 investment like 1996 structure complex analysis maintaining assets potentially philosophy interests perspectives aspects neglect focuses implement both framework these competitive source long balanced its internal diverse integration 1992 model satisfaction considers environment university https ambiguity effective diversity align resources confusing models focused michigan policy systems consequences complicated integrated treating highlights commitment ensuring humanistic distinction flow provides differentiates selection com achieving practices demanding and', target: 'u1_topic_2' },
        { unit: '1', title: 'Human Resource Managers', keywords: 'motivated employees play incentive resolve those knowledge needs employee other conducting disciplinary analyses conflict recognize making foster descriptions thereby compensation 2022 hiring skills coordinate management also developing appraisal postings meet policies skill process various crucial including reward future required fair organizational act such job evaluate enhance managers with organization culture mediate workplace improve conduct the primary analysis hires motivate interviews labor role implement issues perks anticipating orientation competitive source salary contribute productivity design satisfaction environment disputes actions https into suitable opportunities success align resources fairs retain facilitate systems career policy integrated contributions properly set feedback ensuring functions improvement structures address overseeing positive selection com decisions practices administration and help contributing administer necessary for strategic retirement change attract complies programs include implementing recruiting relations performance hrms channels assessing manage achieve handle determine specifications social regulations effectively professionals qualifications through workforce are responsible training planning theintactone compliance laws their work engagement human', target: 'u1_topic_3' },
        { unit: '1', title: 'Responsibilities of Human Resource Managers', keywords: 'motivated updating employees play pipeline shaping knowledge needs employee make other conducting packages designing high resolving identifying descriptions responsibilities compensation guidance hiring skills encompass coordination information enrollment screening management retaining developing openings inclusion wide skill policies wage positions various advertising standards future privacy organizational qualified drives such job assessments key enhance managers with organization culture providing workplace hour handling the business selecting hrm aimed benchmarking employment processes based maintaining hires interviews software labor role implement orientation source salary contribute resumes trends disputes mediating keeping processing https hris diversity topic fostering system who opportunities confidentiality success align records talent career policy driven feedback ensuring advancement improvement structures changes rewarding positive decisions com practices administration and administer necessary documentation ultimately for strategic retirement forecasting establishing engaged succession 2018 tasks programs evaluation channels recruiting relations hrms performance implementing manage grievances industry promoting specifications regulations effectively payroll exceptional paid through workforce are responsible planning', target: 'u1_topic_4' },
        { unit: '2', title: 'Human Resource Planning', keywords: 'limit assessment knowledge outcomes conducting successors making activities optimize high examining numbers aligned each while face financial executing adaptable operational results approach performers available boards must meet dynamics various risk acquired crucial modeling required factors pool challenging with the weaknesses primary hrm timely edge facilitating based adaptability like unexpected monitoring upcoming interviews prepares aspirations long internal employed design often dynamic efficient reviewing backgrounds present enables transitions reduces success redeployment addressing globalization talent systems proactive cultural commitment reducing functions respond artificial motivation platforms positive local trend optimal areas succession gaps allowing assessing recruiting forecast achieve promoting met social projecting inventories work monitors human against critical during technology scenario restructuring ensure deficiencies supports overall understanding sourcing minimizes effectiveness capabilities duties without different achievement world mismatched productive end gathering quality remote alignment data continuity uncertain they changing higher new frequent that background better external priorities poor proper offering needs could flexible recognize preventing', target: 'u2_topic_1' },
        { unit: '2', title: 'Forecasting demand and Supply of Manpower', keywords: 'employees external measure other needs gap making geopolitical may encounter particularly poses relevance growth review identifying aligned foster face advancements forecasted upskilling collection disparities involves availability within costs hiring skills enabling information significance place existing after management flexibility beyond projections despite spent indicators available levels developments outsourcing adjust meet hindering skill current typically benchmarks helps develops track dynamics inherently update efficiently process impact various regular challenges contingency including modeling 2024 sectors technological minimize future adapt organizational factors qualified such aspect job rapid evaluate key analytics organizations challenging enhance with organization reasons the business conduct reactive programs processes leaders based investment structure analysis complex comparing scenarios monitoring software economic sizes use anticipating these this source fluctuations long find its internal them productivity contribute trends expansion alignment competencies risks https hris accuracy collaboration maintain effective essential enables who align resources redeployment accurate complexity retain disruptions talent models reluctant regulatory proactive shortages invest', target: 'u2_topic_2' },
        { unit: '2', title: 'Techniques of Manpower Forecasting', keywords: 'employees explore reached delphi make needs knowledge other alone outcomes correlations structured matter making assist may activities particularly applications high optimize computerized growth useful identifying further while responsibilities advancements relationship involves iterations hiring within surveys utilize results enabling costs place retaining existing attracting developing size used encourages management projections generate assumes fed indicators levels dependent developments input panel volume skill meet aggregated until dynamics helps beneficial contingency positions process various impact extrapolating variable subjective modeling not 2024 including proportional technological coefficients future minimize alternative experts environments soliciting factors organizational such adapt thinking across key algorithms organizations produce ratios prepare with culture providing organization the business timely leaders based scheduling unit analysis complex scenarios anticipate uncertainties stability applied economic labor captured anonymous anticipating well these this source patterns valuable biases refinement back productivity them trends employed design risks sales https predictable into under effective activity transitions possible opportunities resources accurate models', target: 'u2_topic_3' },
        { unit: '2', title: 'Analysis of Work', keywords: 'knowledge require conducting activities accessibility each face observing sequence written relevant dynamics attributes various required experts materials factors share full digital analytics associated firsthand challenging with the team primary employment facilitating based compatibility interviews analytical design systematic often dynamic https reviewing enables success email limitations functions platforms limited administered leading collect ended gaps allowing tasks licenses open subject opportunity specifications today social operation participate work technology supervisors methods understanding duties different end gathering resistance specific data successfully they which that priorities workflow other needs may objective review descriptions serves position within referred management used indicators helps outlines challenges perceived 2024 future privacy via allow fair organizational such questions job enhance providing performed stakeholder errors prone complex helping software targeted labor role task issues settings both collaborative biases its satisfaction environment competencies competing group resources recording accurate feedback evolving ensures address experience one selection com efficiency necessary proficiency comprehensive quantitative frequency', target: 'u2_topic_4' },
        { unit: '2', title: 'Designing Jobs', keywords: 'deadlines influenced managerial measure knowledge confusion creatively regarding outcomes conducting require overwhelm making activities characteristics optimize high affecting styles aligned each while further increasing start adaptable operational approach sequence also flexibility relevant execution dissatisfaction problems available creative must meet dynamics ergonomics crucial required consulting soliciting factors digital overcome associated challenging with enhanced aims the team primary hrm impacting basis will based adaptability structure monitoring ability absenteeism aspirations patterns long engaging stress design dynamic efficient https reviewing saves enables reduces reduced success value addressing commitment reducing functions cross comfort respond assigning motivation rewarding positive leading optimal areas tasks allowing best assessing adequate communicating tight achieve accommodating promoting today ethical rises social adaptation incorporate work reporting monotony critical technology supervisors navigating methods next technologies ensure increase supports specialization overall understanding strengthens support responsibility maintains duties capabilities more achievement different schedules productive end quality ownership resistance specific alignment continuous mechanisms they eliminating changing', target: 'u2_topic_5' },
        { unit: '2', title: 'Job Analysis: Job Description and Job Specification', keywords: 'employees other make employee document knowledge strength physical needs matter may dexterity characteristics examining personal emotional non responsibilities serves compensation position ideal relationship involves within skills developed vacation hiring intelligence information candidate successful recruiters also relevant appraisal should used postings indicators expectations 2019 typically problem current helps suitability documenting logical understand attributes outlines process various positions hired worked including particular required organizational such job thinking evaluate nature key itself organizations associated working improve with managers organization aims communicate the hrm head manual perform facilitating teamwork will languages identified adaptability like structure analysis field give software official traits describes role focuses well this source salary its productivity them resumes design brief systematic satisfaction kpis competencies https into essential topic who department communication success travel specification title qualities cultural set summary where functions ensures hours values provides experience cognitive organized general selection com decisions efficiency manager and about main necessary proficiency purpose', target: 'u2_topic_6' },
        { unit: '2', title: 'Job Evaluation Objectives and Methods', keywords: 'limit managerial knowledge outcomes difficult making rated worker high useful emotional aligned each wherein initial while factor results also body problems weighting some typically widely scales attributes various neatly subjective not required difficulty factors associated challenging with appointed tive the hrm basis facilitating will based structure classes ability assign laboratory framework long internal stress design systematic fatigue https exposure reduces value example clerk compensable talent systems contents qualities commitment assigning motivation limited assistant few tasks point most assessing hazards differ was promoting clerical specifications social expensive work suffers hardest against human critical reporting same unmanageability level civil methods grouping demonstrating pay ensure members supports understanding generally rating favour transparency responsibility judgment more duties effectiveness without different capabilities schedules economical put end ownership large measurable expertise alignment compensated they whole higher which that grading competency recognizing stressful external other points measuring flexible may aligning objective distinct sense position within service significance', target: 'u2_topic_7' },
        { unit: '2', title: 'HR Processes', keywords: 'references measure knowledge successors conducting disciplinary collecting outcomes packages making tuition activities optimize high affecting emotional aligned each further results screening also performers wage risk crucial required factors analytics pool with the team hrm aimed employment based motivating interviews collaborates rewarded internal resumes https utilizes success talent systems cultural criteria commitment towards reducing aim rewarding positive areas succession gaps most open demographics achieve incentives opportunity specifications social arrangements communicates monitors work human remain against critical begins ranges methods pay vacant ensure governing increase deficiencies understanding modules formulates support mutual more effectiveness achievement productive end boxes door conflicts data continuity continuous they inform mission that recognizing external priorities constructive resolve other needs base offering flexible may aligning dedication non descriptions serves underperformers within management developing suggestion inclusion wide 2019 develops positions involvement future relationships rewards organizational collaborate qualified such job ratings enhance managers prepare providing promote labor role trends satisfaction environment', target: 'u2_topic_8' },
        { unit: '2', title: 'Recruitment', keywords: 'limit assessment knowledge regarding conducting making professionalism high accessibility joining useful aligned further while delay increasing recruited operational resume approach screening also relevant network dissatisfaction available meet panel volume individuals representation attributes risk advertising not required websites pool associated challenging with aims easier part the team communicate primary hrm timely probability facilitating employment scheduling adaptability based hires larger portals ability interviews shortlisted long internal resumes often dynamic efficient https unconscious backgrounds saves optimized connection aptitude reduces success apply entry directly resignation downtime brand talent systems cultural proactive commitment placements criteria reducing artificial motivation platforms limited positive collect secures areas succession gaps tasks point most best assessing recruiting achieve incentives promoting specifications met social strengthen participate communicates pools competent human reporting work critical begins sustainable remain during technology level applying restructuring methods vacant ensure members supports increase advantage strengthens understanding outside overall pursuing transparency mutual sourcing minimizes maintains more capabilities duties', target: 'u2_topic_9' },
        { unit: '2', title: 'Selection', keywords: 'holistic references assessment managerial knowledge outcomes conducting age making professionalism characteristics high inefficiencies completion useful styles initial while further delay seamless face start former extend resume results operational screening also relevant problems must meet panel testing volume dynamics individuals attributes prioritizes various crucial not required materials factors pool associated simulations challenging with aims image communicate the team handling primary hrm impacting timely aimed employment basis edge reliable based like replacing invited ability interviews saving prolong forward valid shortlisted analytical long internal resumes stress systematic focusing efficient risks retraining https reviewing unconscious aptitude reduces reduced success addressing directly brand talent cultural qualities commitment criteria reducing functions motivation language formats boosts cognitive limited positive leading filtering adhere succession tasks allowing most licenses assessing achieve opportunity promoting ethical met even examples makers protect participate work competent human pools remain critical begins sustainable against during supervisors methods repeated ensure governing supports coding overall response', target: 'u2_topic_10' },
        { unit: '2', title: 'Induction', keywords: 'welcomed knowledge confusion regarding conducting belonging overwhelm making activities initial while guidance increasing start face relationship adaptable operational facilities dissatisfaction available familiarization meet typically dynamics ethics difficulty soliciting classroom unprepared associated firsthand challenging with aims the team mindset primary employment structure hires long know https reduces reduced success systems cultural commitment reducing platforms boosts limited positive leading areas struggle tasks allowing best recruiting assessing personalization social presentations respect enhancement work attitudes human reporting competent hesitation during introductions supervisors incomplete methods ensure members supports understanding overall strengthens modules advantage support duties more effectiveness without productive end gathering remote period specific alignment faster continuous mechanisms they which new mission mentor that better stable networking motivated priorities equip workflow offering needs introduces may aligning clarification sense norms virtual satisfied personnel within costs cohesive peers lack presents helps increased challenges 2024 relationships future adapt organizational such job disengagement enhance managers providing mismatches errors balancing', target: 'u2_topic_11' },
        { unit: '2', title: 'Socialization', keywords: 'networking employees administrative mentorship supported other knowledge employee learn belonging overwhelm supportive formal may activities encounter reinforces joining poses high misalignment sense initial responsibilities while norms involve start virtual equips relationship welcome routines involves comfortable 2022 within fosters skills cohesive rise information existing management recruiters encourages also ways onboarding dissatisfaction introducing must inclusion expectations policies connected helps dynamics constant understand process challenges ethos crucial perceptions valuing sessions relationships actively allowing adapt organizational environments reinforcement job full how depth firsthand challenging culture with organization providing aims interactions workplace vision the team connections hrm promote balancing perform facilitating teamwork reintegration like hires helping upon requiring final become role finding focuses extensive well orientation this source retention long over repeatedly its contribute them strain environment reduce https desired reviewing challenge collaboration into prospects effective essential diversity fostering who assimilate opportunities disappointment success balance resources addressing refers facilitate career cultural integrated discouraging contributions need', target: 'u2_topic_12' },
        { unit: '2', title: 'Recent Development /Emerging Trends in HR', keywords: 'employees has offering needs employee other make adoption flexible traction making activities compensation seamless guidance virtual advancements factor strategy enabling within skills surveys retaining management attracting developing onboarding increasingly flexibility priority developments inclusion understand regular various departments people including broad 2024 bias modeling technological future flextime resilience prioritizing environments organizational widespread such job digital analytics organizations improve with culture providing drive organization workplace vital the business equitable promote aimed employment processes leaders locations analysis partners accelerated reskilling anticipate creating aspects role equity become well competitive this source workweeks productivity diverse internal trends stress reimagining focusing literacy https adapting unconscious collaboration maintain essential diversity fostering growing gaining communication opportunities success balance resources dei leveraging shift models retain talent career pandemic driven mobility feedback evolving ensuring covid respond address sentiment experience positive leading decisions com life pivotal and sharing practices enhancing about for strategic function attract market investing encompasses programs evaluation services', target: 'u2_topic_13' },
        { unit: '2', title: 'Use of Digital Tools by HR Managers', keywords: 'employees administrative engage play measure correlations employee learn machine geographies belonging intuitive making uncover optimize applications cater review styles foster degree sense seamless virtual enabling within skills surveys resume revolutionized candidate empowering screening management increasingly onboarding relevant used postings learning year indicators levels wide expectations improving sentiments track process various efficiently departments crucial visualization additionally including bias 2024 modeling sessions required allow automate materials organizational such format job assessments across digital analytics pool checklists organizations ratings key enhance managers with drive providing organization culture conduct the business timely facilitating teamwork processes like appreciation analysis hires portals handbooks software saving indeed role use interactive issues these find source orientation patterns engaging them trends satisfaction convenience kpis processing https workflows collaboration into goal own present fostering parsing enables communication mobile leveraging deliver resources leverage online align empower facilitate talent tracking systems offer proactive driven set among feedback derive ensuring towards reducing functions', target: 'u2_topic_14' },
        { unit: '2', title: 'Competency based Selection', keywords: 'influenced assessment knowledge conducting making emotional aligned each while tends results approach relevant thorough interviewing assessors typically individuals deemed attributes scales prioritizes various subjective not required full simulations with enhanced aims part the basis reliable based adaptability interviews possession framework often dynamic focusing https success talent qualities cultural criteria reducing linked limited positive scoring leading areas assessing communicating predictive opportunity concern examples selects work differently against critical during methods supports advantage overall support rating transparency judgment more duties purposes end gathering specific alignment select that competency pipeline constructive perpetuate may aligning objective serves still position within management developing attracts used indicators inclusion helps outlines 2024 future organizational such questions job lead enhance providing identified targeted traits role inadvertently use biases competencies actions diversity assessed showcase resources offer vary clearly feedback improvement ensures experience selection com necessary proficiency purpose assess evaluation behaviors guide focus clear techniques stereotyping predict determine effectively professionals', target: 'u2_topic_15' },
        { unit: '3', title: 'Training and Development Scope, Importance', keywords: 'knowledge require outcomes difficult activities emotional thereby assignments adaptable relevant thorough creative must crucial acquired not required associated challenging teaching with enhanced the hrm aimed edge scheduling adaptability assists hires thing prepares fast aspirations long engaging often efficient risks https reduces reduced success apply updates qualities cultural come active commitment reducing uninteresting motivation boosts positive leading adhere struggle enrolling succession gaps tasks best recruiting assessing met even enhancement work competent human during technologies demonstrating ensure overall understanding outside support box supervisory more effectiveness duties without end disrupting resistance specific continuous mechanisms they changing higher which new that better motivated other needs measuring flexible improved may sufficient money participation within costs management 2019 helps increased challenges perceived learned meets future organizational rapidly such job lead enhance providing balancing protocols but complex software task issues both perhaps trends satisfaction environment competencies daily interest balance resources practical executive feedback accustomed transfers coaching improvement', target: 'u3_topic_1' },
        { unit: '3', title: 'Types of Training', keywords: 'knowledge offered making activities accessibility styles further while guidance excellent relationship written also flexibility relevant problems meet typically various ethics crucial required resilience materials classroom depth with aims handling the team edge languages like upcoming ability prepares stress often sales https unconscious backgrounds success addressing systems cultural active functions occurs positive profession educating adhere tasks allowing best achieve specifications ethical social operation work remain during supervisors technologies ensure increase members overall understanding response outside support responsibility habits duties more sell different end quality emergency specific expertise conflicts data continuous anti trades they pursue new mission hazardous that recognizing mentorship equip resolve healthy offering other listening recognize covers operating non within protection carpentry service management developing verbal used ojt history inclusion 2019 helps relationships fair adapt organizational collaborate such job providing readiness types promote continuing field helping software hands role equity use settings issues collaborative biases trends satisfaction environment competencies own', target: 'u3_topic_2' },
        { unit: '3', title: 'Difference between Training and Development', keywords: 'holistic assessment knowledge outcomes activities characteristics relevance perspective emotional assignments guidance measureable approach flexibility meet emphasizes typically individuals trainers various classroom simulations challenging with enhanced aims the weaknesses aimed aspirations long engaging systematic often focusing https success apply talent prominent active commitment cross outcome limited leading difference unlike tasks assessing achieve subject enhancement incorporate real level methods technologies ensure understanding overall stretch modules outside pursuing support duties effectiveness capabilities more world case successes end ownership specific measurable alignment achieved continuous self mechanisms they changing higher which new that motivated mentorship pipeline needs functional flexible recognize may seeking discussions within facilitated immediate peers used beyond indicators target 2019 helps increased future actively relationships allow adapt organizational such job enhance prepare providing promote continuing interests targeted hands role both its satisfaction competencies group refers practical experiential facilitators feedback coaching area improvement unique ensures professionally address organized com directed necessary help enhancing ultimately', target: 'u3_topic_3' },
        { unit: '3', title: 'E-Learning', keywords: 'browse assessment outcomes require rom umbrella activities high accessibility styles guidance excellent biggest rate gratification facilities approach also flexibility network streamed meet trainers not does required evidenced scalability schools materials digital customizing associated with audio learners communicate the hrm will based like telephones electronic phase engaging back mailing https utilizes enables reduces reduced apply wish relatively email cultural decentralised embedded platforms scoring leading unlike automated assessing social presentations computers material unix human reporting during technology same real level methods technologies understanding modules support responsibility effectiveness more different world end quality specific user continuous self they select which access that retained motivated maximize needs fashion may sufficient website participation discussions virtual strategy within costs service management used wide develops synchronous challenges accommodates via accept organizational such questions lead enhance managers types many builds software targeted task senses accommodation use chance program individualised browser own platform possible deliver resources refers regardless offer', target: 'u3_topic_4' },
        { unit: '3', title: 'Development of Employees in Organization', keywords: 'motivated employees explore engage supported play constructive priorities measure access knowledge needs employee learn outcomes make structured rotate guides recognize improved formal activities attend capable coaches high term personal mentors growth options styles foster aligned further responsibilities discussions guidance reach within skills providing retaining management relevant developing should flexibility learning indicators levels publicly adjust meet skill track helps increased understand workshops process various regular departments operations crucial involvement variety additionally including 2024 experienced future relationships actively participants adapt organizational classroom materials such aspect job full across evaluate key organizations prepare with enhanced organization culture drive enhance managers rotation the team business weaknesses contributions promote among conferences leaders adaptability appreciation creating perspectives committed aspects role implement well competitive these source retention long its contribute them productivity diverse trends satisfaction encouraged dynamic environment competencies kpis https celebrate collaboration journey who opportunities communication reinforce success align resources acknowledge refers facilitate talent career experiential', target: 'u3_topic_5' },
        { unit: '3', title: 'Performance Appraisal Objectives, Importance', keywords: 'holistic influenced assessment managerial measure knowledge regarding outcomes require conducting belonging dimensions making activities characteristics optimize high relevance strive affecting emotional useful aligned further while each demotions guidance financial adaptable results rate approach also flexibility relevant thorough assessors dissatisfaction objectivity performers must meet emphasizes typically collected individuals scales attributes various crucial subjective not since does required resilience soliciting act format share uses simulations with enhanced handling the weaknesses recommendations primary hrm timely basis facilitating reliable based adaptability like assists motivating monitoring ability interviews prepares clients visual rewarded assign specified aspirations patterns long know design systematic often dynamic risks https reviewing tenure guiding reduces confidentiality success value example addressing directly systems talent policy proactive criteria fullest commitment towards reducing motivation inaccurate rewarding boosts linked rationale day limited justice positive dedicate leading undermine evolve areas struggle collectively succession underestimated gaps allowing most favoritism best assessing open numerical ordered adequate continued representations achieve', target: 'u3_topic_6' },
        { unit: '3', title: 'Performance Management Objectives, Importance', keywords: 'influenced assessment confusion outcomes conducting high aligned each guidance approach erode performers meet subjective not does thoroughness full with the team timely will based monitoring upcoming rewarded aspirations framework https guiding reduces success addressing systems talent criteria inaccurate rewarding monitor limited leading undermine areas struggle succession gaps tasks assessing open promoting serve work against incomplete ensure overall understanding support transparency effectiveness capabilities end semi quality period resistance specific alignment data continuous halo they new that recognizing priorities poor pipeline constructive other adoption may review management used lack indicators helps severity challenges rewards organizational collaborate such lead implemented periodically ratings managers providing undermining issues biases its competencies perceive resources contributions feedback coaching fairness improvement ensures address com necessary help measures change recognized infrequent quantitative assess hinder evaluation constraints behaviors focus enable clear effectively are potential compliance behavioral evaluations outline what when trust achievements initiatives annually development celebrating progress scores created promotions', target: 'u3_topic_7' },
        { unit: '3', title: 'Appraisal Process and Methods', keywords: 'assessment knowledge outcomes conducting continue making dimensions aligned each while guidance rate also relevant performers collected typically scales various soliciting format share with the weaknesses recommendations basis based monitoring upcoming clients visual assign specified framework systematic sales https systems talent criteria monitor areas allowing best open numerical ordered representations achieve opportunity even examples work against critical during supervisors smart honest essays methods next supports overall support rating curve effectiveness more categorizing different end semi quality period mbo specific measurable data continuous they graphical which new that priorities constructive predetermined other needs measuring may aligning objective review descriptions serves bars within peers ins management used helps documenting graphic outlines challenges 2024 subordinates organizational collaborate rater such job ratings enhance managers providing identified upon anchors issues use low actions group narrative vary contributions feedback achievable coaching improvement values address write com help measures comprehensive quantitative assess evaluation behaviors clear colleagues effectively standpoint', target: 'u3_topic_8' },
        { unit: '3', title: 'Employee Empowerment', keywords: 'knowledge confusion outcomes making high inefficiencies strive aligned guidance results relevant flexibility problems meet some responsive dynamics various risk crucial closer not since soliciting act with enhanced the team based adaptability scheduling clients failure views often risks https enables success quicker systems cultural active commitment towards motivation rewarding seize leading areas struggle tasks best open continued achieve respect arrangements serve work remain ensure characterized response support responsibility mutual more without end boxes remote ownership resistance expertise conflicts alignment faster mechanisms they changing higher frontline which new praise access that recognizing better motivated priorities mentorship resolve needs capitalize improved may sense participation discussions within suggestion lack 2019 freedom accomplishment increased challenges involvement able adapt organizational initiative such job lead managers providing erll turn role use issues both collaborative its trends satisfaction actions waiting expressing balance deliver resources refers offer contributions among feedback improvement ensures values likely circumstances motivates address succeed experience', target: 'u3_topic_9' },
        { unit: '3', title: 'Employee Engagement', keywords: 'knowledge confusion regarding belonging dedicated continue making activities high affecting emotional while guidance factor facilities flexibility erode prioritizes various crucial not soliciting factors challenging with enhanced communicate the team impacting timely like appreciation long engaging stress design enthusiasm https connection appreciated reduced success value brand commitment towards reducing deeply motivation linked rewarding rationale positive leading intranet difference areas struggle tasks best open incentives promoting social respect arrangements work remain critical greatly during inspire restructuring methods demonstrating prioritize characterized overall strengthens support transparency responsibility mutual more capabilities above end gathering boxes ownership resistance alignment acting continuous mechanisms they demonstrates higher mission new praise access that recognizing motivated poor stagnation mentorship shaping other needs offering opinions flexible improved may dedication sense workspace norms shared within management verbal beyond suggestion lack 2019 helps challenges relationships actively rewards organizational environments such job lead disengagement working enhance managers thank providing promote balancing notes interests overburdened', target: 'u3_topic_10' },
        { unit: '4', title: 'Worklife Balance Definition, Importance and Challenges', keywords: 'happy home something dedicated difficult making activities high incredible profit affecting each financial also problems insecurity whilst risk not required resilience challenging with easier part the team will done absenteeism forward credits paul stress often https present coping translates brand talent late boosts gone overwhelmed whenever tasks hanging open adequate was pressures today anybody even unhappiness examples arrangements running just fellow work critical technology level important removes someone uncontrollable members sure outside support doesn having worklife more shoulder different world above end amount previously they higher which that better stressful poor healthy other flexible really sense absences reputation costs get lack helps increased isolated challenges ones able relationships actively mentioned such adding job working arrangement but define issues both low satisfaction environment makes chance enough balance resources refers empower overload companies likely circumstances exams product experience one organized appear issue com ultimately workload happiness easily focus outweigh clear weekend lot', target: 'u4_topic_1' },
        { unit: '4', title: 'Human Resource Information Systems Importance and Scope', keywords: 'has employees those other employee details interview making activities routine accessibility personal centralized participation compensation vendors database inevitably enabling 2022 hiring salaries information unused management also security relevant onboarding postings get history adjust problem track update process various departments people generating including deal such job how analytics working improve with providing combine organization easier the hrm errors less facilitating processes scheduling maintaining like software saving labor paper use perks these find source creep internal know trails satisfaction bodies processing https hris accrued accuracy goal single system who reduces entry keep government balance systems career tracking regulatory integrated need deductions feedback ensuring functions platforms bonuses provides one com efficiency streamlining administration and necessary enhancing tax for strategic retirement automated tasks organizing programs pto performance focus manage decision transfer even regulations payroll contact updated through are their training planning compliance theintactone computer spreadsheet laws human reporting technology evaluations real applicant content importance', target: 'u4_topic_2' },
        { unit: '4', title: 'Happiness at Work', keywords: 'happy influenced outcomes belonging making activities high excellent also recharge individuals ergonomics crucial factors associated with enhanced elsewhere image the team employment appreciation ability absenteeism selves long engaging stress enthusiasm https celebrate saves reduced brand talent policy cultural towards boosts positive leading cleanliness tasks best recruiting open social respect arrangements strengthen work supervisors ensure overall outside support responsibility mutual more productive end remote door ownership large alignment conflicts continuous compensated they pursue higher which new praise access that better motivated healthy resolve offering flexible recognize improved sufficient sense workspace aesthetically atmosphere satisfied reputation costs ins service helps increased challenges relationships fair rewards organizational environments initiative such job lead working enhance promote correlate interests organize role use both collaborative satisfaction environment program balance resources empower offer among feedback companies events ensures values likely motivates experience one cohesively com efficiency sharing help boundaries enhancing purpose healthcare function happiness building cultivate bring manage', target: 'u4_topic_3' },
        { unit: '4', title: 'Managing Protean Career', keywords: 'assessment knowledge require characteristics primarily joining further while cornerstone face guidance relationship financial approach also flexibility relevant network net must emphasizes some individuals risk crucial required resilience websites challenging with the weaknesses facilitating done based adaptability structure like economic fast aspirations engaging often dynamic risks https value acknowledge brand systems proactive rigid deeply motivation platforms rewarding boundary introduced areas open douglas social arrangements work remain critical supervisors smart important level navigating technologies prioritize understanding outside calculated pursuing support having roadmap negotiating more successes end remote specific measurable alignment achieved continuous self they pursue changing higher which new access that recognizing motivated networking external mentorship constructive healthy offering flexible may showcasing sense seeking position highlight within peers developing obtaining lack helps challenges able 2024 relationships actively allow rewards organizational environments rapidly such job lead rapid providing balancing promote field interests role both hierarchies trends satisfaction environment adapting mentally instability overwhelming own', target: 'u4_topic_4' },
        { unit: '4', title: 'Moonlighting Phenomenon', keywords: 'risking acceptable knowledge debt require disciplinary regarding activities high while start excellent financial approach also flexibility network net prohibit meet some typically insecurity individuals various risk motivations crucial not side does factors associated challenging with part the primary divided disclosure employment contractual like monitoring economic aspirations long benefit engaging stress fatigue often https prospects confidentiality reduced intrinsic example hobbies wish effects explicitly proactive chronic reducing rising allowing most open moonlighting opportunity secondary protect page illnesses serve behind work against during same becomes pay ensure overall understanding outside support having transparency more without different holding case end conflicts pursue higher new frequent that healthy other offering flexible exhausting may sufficient costs lost ins management used anyone presents increased challenges 2024 future rewards simply such job lead disengagement working enhance balancing push field many helping interests hands issues both minimizing satisfaction environment actions instability interest balance adverse refers practical offer among vested', target: 'u4_topic_5' },
        { unit: '4', title: 'Managing Workforce Diversity Concepts, Benefits and Challenges', keywords: 'unknown outcomes age dimensions making characteristics affiliations high faced styles each while approach thorough must some individuals risk crucial not share with enhanced aims image the based partners intersectionality tolerance clients often https utilizes unconscious backgrounds enables success value addressing talent cultural groupthink active commitment cross reducing adhd viewpoints language boomers cognitive positive leading tensions millennials unfamiliar achieve accommodating promoting respect serve work attitudes concepts critical neurological ensure increase members understanding overall support effectiveness more respects different productive brings end resistance expertise conflicts anti they higher which intersecting that background better recognizing international motivated countries identities other needs base dialects functional improved may cater review participation norms within reputation management lack inclusion wide 2019 increased isolated challenges perceived accommodates fair environments visible organizational such lead job thought enhance providing promote issues richness baby biases satisfaction environment adapting diversity respected generation refers varied among companies unique ensures values address respecting com', target: 'u4_topic_6' }
    ];

    // --- 2. Tab Navigation between Units ---
    const unitBtns = document.querySelectorAll('.unit-tab-btn');
    const unitContainers = document.querySelectorAll('.unit-wrapper');
    const sidebarTitle = document.getElementById('sidebarUnitTitle');

    function selectUnit(unitId) {
        currentUnit = unitId;
        
        // Update tab buttons
        unitBtns.forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-unit') === unitId);
        });

        // Update main visibility
        unitContainers.forEach(container => {
            container.classList.toggle('active', container.getAttribute('id') === `unit${unitId}-container`);
        });

        // Update sidebar links
        sidebarTitle.textContent = `Unit ${unitId} Navigation`;
        buildSidebarNav(unitId);

        // Reset scroll progress bar
        updateScrollProgress();
    }

    unitBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            selectUnit(btn.getAttribute('data-unit'));
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });

    function buildSidebarNav(unitId) {
        const listContainer = document.getElementById('sidebarNavLinks');
        listContainer.innerHTML = '';

        const links = sidebarNavData[unitId];
        links.forEach((link, idx) => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = `#${link.target}`;
            a.className = `nav-item ${idx === 0 ? 'active' : ''}`;
            a.setAttribute('data-target', link.target);
            
            // Text and checkmark
            a.innerHTML = `${link.label} <span class="check-mark">✓</span>`;
            
            // Restore completion state
            const progressKey = `read_${unitId}_${link.target}`;
            if (localStorage.getItem(progressKey) === 'true') {
                a.classList.add('completed');
            }

            a.addEventListener('click', (e) => {
                e.preventDefault();
                const targetEl = document.getElementById(link.target);
                if (targetEl) {
                    window.scrollTo({
                        top: targetEl.offsetTop - 90,
                        behavior: 'smooth'
                    });
                    
                    // Mark as read immediately on click
                    a.classList.add('completed');
                    localStorage.setItem(progressKey, 'true');
                    updateOverallCourseProgress();
                }
            });

            li.appendChild(a);
            listContainer.appendChild(li);
        });
    }

    // --- 3. Scroll Progress Indicator & Back to Top ---
    const readingProgress = document.getElementById('readingProgress');
    const backToTop = document.getElementById('backToTop');

    function updateScrollProgress() {
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;
        const activeContainer = document.querySelector('.unit-wrapper.active');
        if (!activeContainer) return;

        const containerTop = activeContainer.offsetTop;
        const containerHeight = activeContainer.offsetHeight;
        const maxScroll = containerHeight - windowHeight;
        
        let scrolledPct = 0;
        if (maxScroll > 0) {
            // Calculate progress relative to current active unit wrapper
            const relativeScroll = scrollPosition - containerTop + 90;
            scrolledPct = Math.max(0, Math.min(100, (relativeScroll / maxScroll) * 100));
        }
        readingProgress.style.width = `${scrolledPct}%`;

        // Update active sidebar nav item based on viewport scroll
        const activeSections = activeContainer.querySelectorAll('.content-section');
        let currentSectionId = '';

        activeSections.forEach(sec => {
            const secTop = sec.offsetTop - 120;
            const secHeight = sec.offsetHeight;
            if (scrollPosition >= secTop && scrollPosition < secTop + secHeight) {
                currentSectionId = sec.getAttribute('id');
            }
        });

        if (currentSectionId) {
            const sidebarLinks = document.querySelectorAll('.sidebar-nav .nav-item');
            sidebarLinks.forEach(item => {
                const target = item.getAttribute('data-target');
                item.classList.toggle('active', target === currentSectionId);
                
                if (target === currentSectionId && !item.classList.contains('completed')) {
                    item.classList.add('completed');
                    localStorage.setItem(`read_${currentUnit}_${target}`, 'true');
                    updateOverallCourseProgress();
                }
            });
        }

        // Show/hide Back to Top button
        if (scrollPosition > 350) {
            backToTop.classList.add('show');
        } else {
            backToTop.classList.remove('show');
        }
    }

    window.addEventListener('scroll', updateScrollProgress);

    function updateOverallCourseProgress() {
        const totalItems = Object.values(sidebarNavData).flat().length;
        let completedItems = 0;

        Object.keys(sidebarNavData).forEach(uId => {
            sidebarNavData[uId].forEach(item => {
                if (localStorage.getItem(`read_${uId}_${item.target}`) === 'true') {
                    completedItems++;
                }
            });
        });

        const percent = Math.round((completedItems / totalItems) * 100);
        document.getElementById('progressPct').textContent = `${percent}%`;
        document.getElementById('overallFill').style.width = `${percent}%`;
    }

    // --- 4. Interactive Scope Tabs (Unit 1) ---
    const scopeTabs = document.querySelectorAll('.scope-tab-btn');
    const scopeContents = document.querySelectorAll('.scope-tab-content');
    scopeTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            scopeTabs.forEach(b => b.classList.remove('active'));
            scopeContents.forEach(c => c.classList.remove('active'));
            tab.classList.add('active');
            document.getElementById(tab.getAttribute('data-tab')).classList.add('active');
        });
    });

    // --- 5. Accordions (Unit 1) ---
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const item = header.parentElement;
            const content = header.nextElementSibling;
            const isOpen = item.classList.contains('active');
            
            item.classList.toggle('active', !isOpen);
            content.style.display = isOpen ? 'none' : 'block';
        });
    });

    // --- 6. Models Selector (Unit 1 SVG Click) ---
    const modelNodes = document.querySelectorAll('#u1_svg_models .svg-node');
    const u1ModelName = document.getElementById('u1_selected_model_name');
    const u1ModelDesc = document.getElementById('u1_selected_model_desc');
    const u1ModelProCon = document.getElementById('u1_model_pro_con');
    const u1ModelMerits = document.getElementById('u1_model_merits');
    const u1ModelDemerits = document.getElementById('u1_model_demerits');

    const modelDetailsData = {
        'michigan': {
            name: "Fombrun Matching Model (Michigan Model)",
            desc: "The classic 'Hard HRM' model. Proposes that HR strategies (Selection, Appraisal, Reward, Development) must align tightly with organizational structure and business objectives, treating employees as economic resources to optimize.",
            merits: ["Highly logical and business-focused.", "Links rewards directly to performance.", "Simplifies planning mechanics."],
            demerits: ["Ignores employee voice and union relations.", "Burnout risks due to cost-minimization focus.", "Too transactional."]
        },
        'harvard': {
            name: "The Harvard Framework (Beer et al.)",
            desc: "The foundation of 'Soft HRM'. Identifies employees as key stakeholders with unique voices. Focuses on balancing interest variables and situational factors to drive Commitment, Competence, Congruence, and Cost-effectiveness.",
            merits: ["Balances interests of multiple stakeholders.", "Long-term view of employee and societal health.", "Emphasizes mutual trust."],
            demerits: ["Conflicting stakeholder interests complicate execution.", "Hard to calculate the direct ROI of 'commitment' and 'congruence'."]
        },
        'guest': {
            name: "The Guest Model (David Guest)",
            desc: "An outcome-driven model mapping a causal pathway from HR strategy inputs, to HR outcomes (Commitment, Quality, Flexibility), to employee behaviors, performance output (productivity, turnover), and final financial results.",
            merits: ["Logical business case roadmap for HR initiatives.", "Links soft indicators to hard financial returns.", "Strong focus on quality."],
            demerits: ["Assumes linear relationships where complex market variables interact.", "Requires substantial upfront cultural investments."]
        },
        'warwick': {
            name: "The Warwick Model (Hendry & Pettigrew)",
            desc: "A contextual model mapping how the Outer Context (macroeconomics, technical changes, labor market laws) and Inner Context (culture, leadership styles, corporate politics) interact to shape HR content and structures.",
            merits: ["Highly realistic and contextualized.", "Extremely useful for multinational corporations balancing regional structures."],
            demerits: ["Descriptive rather than prescriptive (tells you why things are, not what action to take)."]
        },
        'storey': {
            name: "The Storey Model (John Storey)",
            desc: "An ideological framework contrasting traditional Personnel Management (transactional, rule-bound) against HRM (strategic, commitment-based). Maps four HR roles based on tactical vs. strategic focus: Advisors, Handymen, Regulators, and Change Makers.",
            merits: ["Draws a clear line illustrating cultural and role transitions.", "Promotes line manager involvement in HR implementation."],
            demerits: ["Creates an artificial dichotomy; in reality, HR departments use hybrid structures."]
        }
    };

    modelNodes.forEach(node => {
        node.addEventListener('click', () => {
            const modelKey = node.getAttribute('data-model');
            const data = modelDetailsData[modelKey];
            if (!data) return;

            // Highlight node in SVG
            modelNodes.forEach(n => {
                n.querySelector('rect').setAttribute('fill', n === node ? '#7c3aed' : '#cbd5e1');
            });

            // Update details panel
            u1ModelName.textContent = data.name;
            u1ModelDesc.textContent = data.desc;
            
            u1ModelMerits.innerHTML = '';
            data.merits.forEach(m => {
                const li = document.createElement('li');
                li.textContent = m;
                u1ModelMerits.appendChild(li);
            });

            u1ModelDemerits.innerHTML = '';
            data.demerits.forEach(d => {
                const li = document.createElement('li');
                li.textContent = d;
                u1ModelDemerits.appendChild(li);
            });

            u1ModelProCon.style.display = 'grid';
        });
    });

    // --- 7. Job Analysis Hover Map (Unit 2) ---
    const jaNodes = document.querySelectorAll('#u2_svg_job_analysis .flow-node');
    const jaDetailsText = document.getElementById('u2_ja_details_text');

    jaNodes.forEach(node => {
        node.addEventListener('mouseenter', () => {
            const info = node.getAttribute('data-info');
            jaDetailsText.innerHTML = `<b>${node.querySelector('text').textContent}:</b> ${info}`;
            
            // Highlight hover
            jaNodes.forEach(n => {
                n.querySelector('rect').style.opacity = n === node ? '1' : '0.5';
            });
        });
        node.addEventListener('mouseleave', () => {
            jaNodes.forEach(n => n.querySelector('rect').style.opacity = '1');
        });
    });

    // --- 8. Circular ADDIE Phase Viewer (Unit 3) ---
    const addieNodes = document.querySelectorAll('#u3_svg_addie .addie-node');
    const addieTitle = document.getElementById('u3_addie_title');
    const addieDesc = document.getElementById('u3_addie_desc');

    addieNodes.forEach(node => {
        node.addEventListener('click', () => {
            const phase = node.getAttribute('data-phase');
            const desc = node.getAttribute('data-desc');
            
            addieTitle.textContent = phase;
            addieDesc.textContent = desc;

            // Visual feedback
            addieNodes.forEach(n => {
                n.querySelector('circle').setAttribute('fill', n === node ? '#7c3aed' : '#cbd5e1');
            });
        });
    });

    // --- 9. HRIS Flow Block Clicker (Unit 4) ---
    const hrisNodes = document.querySelectorAll('#u4_svg_hris .hris-node');
    const hrisTitle = document.getElementById('u4_hris_title');
    const hrisDesc = document.getElementById('u4_hris_desc');

    hrisNodes.forEach(node => {
        node.addEventListener('click', () => {
            const section = node.getAttribute('data-section');
            const details = node.getAttribute('data-details');
            
            hrisTitle.textContent = section;
            hrisDesc.textContent = details;

            // Highlight click
            hrisNodes.forEach(n => {
                n.querySelector('rect').setAttribute('fill', n === node ? '#7c3aed' : '#cbd5e1');
            });
        });
    });

    // --- 10. Multi-Unit Quizzes (5 Questions per Unit) ---
    const quizzesData = {
        '1': [
            { id: 1, question: "1. Who famously divided HR operational functions into procurement, development, compensation, integration, and maintenance?", options: ["Gary Dessler", "Edwin B. Flippo", "David Guest", "John Storey"], correct: 1, exp: "Edwin B. Flippo defined Personnel Management with these precise operational categories in his classic textbook." },
            { id: 2, question: "2. Which model focuses heavily on strategic fit, treating employees primarily as variable inputs to minimize costs?", options: ["Harvard Model", "Warwick Model", "Michigan Matching Model", "Storey Model"], correct: 2, exp: "The Fombrun/Michigan matching model is a classic 'Hard HRM' model, prioritizing strict alignment to strategic corporate goals." },
            { id: 3, question: "3. The '4 C's' outcomes—Commitment, Competence, Congruence, and Cost-Effectiveness—are parameters of which framework?", options: ["Harvard Model", "Guest Model", "Warwick Model", "Storey Model"], correct: 0, exp: "The Harvard Framework (Beer et al.) established the '4 C's' as qualitative outcomes of balanced stakeholder and context policies." },
            { id: 4, question: "4. Under Ulrich's model, a manager running change management and communication initiatives during a corporate transition is acting as:", options: ["Strategic Partner", "Change Agent", "Employee Champion", "Administrative Expert"], correct: 1, exp: "The Change Agent role focuses on minimizing employee friction and aligning team capabilities during change phases." },
            { id: 5, question: "5. What are the three core aspects defining the scope of HRM?", options: ["Acquisition, Development, Separation", "Personnel, Welfare, and Industrial Relations", "Planning, Appraising, Rewarding", "Operations, Strategy, and Governance"], correct: 1, exp: "HRM's scope includes the Personnel aspect, employee Welfare aspect, and Industrial Relations (IR) aspect." }
        ],
        '2': [
            { id: 1, question: "1. Which manpower forecasting technique utilizes iterative expert questionnaires to reach a consensus, removing groupthink bias?", options: ["Markov Analysis", "Regression Analysis", "Delphi Technique", "Ratio Analysis"], correct: 2, exp: "The Delphi Technique queries experts independently in iterative stages to establish objective consensus." },
            { id: 2, question: "2. What is the specific focus of a Job Specification (JS) document?", options: ["Tasks and hazards of the job", "Reporting structures and duties", "Human credentials, skills, and experience required", "Department budgets and structures"], correct: 2, exp: "A Job Specification defines the person requirements (skills, qualifications) whereas the Job Description defines the tasks." },
            { id: 3, question: "3. Adding vertical authority, autonomy, and decision-making power to a job to enhance Herzberg motivators is called:", options: ["Job Enlargement", "Job Enrichment", "Job Rotation", "Job Simplification"], correct: 1, exp: "Job Enrichment is vertical job loading, adding autonomy, whereas Job Enlargement is horizontal loading (adding similar difficulty tasks)." },
            { id: 4, question: "4. Which mathematical forecasting tool calculates internal supply flows based on historical promotion probabilities?", options: ["Delphi Matrix", "Markov Analysis", "Skills Inventory", "Regression Plot"], correct: 1, exp: "Markov Analysis projects transition rates to model the internal flow of employees through positions." },
            { id: 5, question: "5. Selection is traditionally referred to as a 'negative process' because its operational aim is to:", options: ["Reduce employee salaries", "Increase voluntary turnover", "Reject unqualified applicants to find the best fit", "Minimize trade union sizes"], correct: 2, exp: "Recruitment is positive (attracting many applicants), while Selection is negative because it filters out candidates." }
        ],
        '3': [
            { id: 1, question: "1. Which training method uses realistic simulators away from the actual workplace to teach complex mechanics under zero pressure?", options: ["Apprenticeship", "Vestibule Training", "Job Rotation", "Coaching"], correct: 1, exp: "Vestibule training uses realistic equipment simulators (e.g., flight simulators) to train workers off-line." },
            { id: 2, question: "2. Behaviorally Anchored Rating Scales (BARS) improve performance appraisals by:", options: ["Focusing purely on financial metrics", "Anchoring rating scale integers to specific behavioral descriptions", "Gathering peer feedback secretly", "Using self-appraisal goals only"], correct: 1, exp: "BARS anchors numbers to specific behavioral examples to minimize subjective evaluator bias." },
            { id: 3, question: "3. Which modern performance management framework was formulated by Peter Drucker to align goals co-established by managers and staff?", options: ["BARS", "360-Degree Reviews", "Management by Objectives (MBO)", "Critical Incident Log"], correct: 2, exp: "Peter Drucker co-created MBO (Management by Objectives) where managers and employees mutually establish performance targets." },
            { id: 4, question: "4. What is the fundamental difference in duration and focus between Training and Development?", options: ["Training is long-term and strategic; Development is short-term", "Training is tactical and short-term; Development is long-term and strategic", "Training is employee-initiated; Development is mandated", "There is no difference"], correct: 1, exp: "Training upskills workers for immediate jobs (short-term), while Development builds future capabilities (long-term)." },
            { id: 5, question: "5. Psychological empowerment refers to an employee's internal perception of:", options: ["Corporate profit distribution", "Union collective bargaining agreements", "Autonomy, meaning, competence, and impact regarding their work", "Direct command-and-control frameworks"], correct: 2, exp: "Psychological empowerment is an employee's subjective sense of control and impact at work." }
        ],
        '4': [
            { id: 1, question: "1. Which remote team management strategy did Buffer adopt to maximize Work-Life Balance (WLB) without reducing employee salaries?", options: ["Unlimited overtime", "Fully remote operations with a 4-day workweek", "Rigid surveillance software tracking", "Office-only attendance rules"], correct: 1, exp: "Buffer closed physical offices and introduced a 4-day workweek to boost WLB and maintain talent retention." },
            { id: 2, question: "2. Which of the following is traditionally classified as an Output of a Human Resource Information System (HRIS)?", options: ["Demographic profiles entered by candidates", "Clock-in logs recorded by baristas", "Compliance audit reports and payroll statements", "Salary configuration parameters"], correct: 2, exp: "Outputs are reports, analytics, and paychecks generated after processing the raw logs (inputs)." },
            { id: 3, question: "3. What was the central issue in Wipro's corporate stand that led to the termination of 300 employees in 2022?", options: ["Wage disputes", "Moonlighting for direct competitors", "Refusing return-to-office demands", "Strike organization"], correct: 1, exp: "Wipro fired 300 employees who were discovered working for direct competitors simultaneously, citing conflict of interest." },
            { id: 4, question: "4. How does Johnson & Johnson strategically handle workforce diversity to drive medical innovation?", options: ["Banning Employee Resource Groups", "Running structured Employee Resource Groups (ERGs) and diversity recruiting targets", "Ignoring generational gaps", "Enforcing uniform cultural guidelines"], correct: 1, exp: "J&J supports affinity ERGs and sets recruitment targets to align workforce composition with patient demographics." },
            { id: 5, question: "5. Research in positive psychology shows that happiness at work leads to:", options: ["High absenteeism", "Increased productivity, creativity, and collaboration", "Wage deflation", "More union disputes"], correct: 1, exp: "Happy employees show higher engagement, collaboration, and productivity, reducing organizational turnover costs." }
        ]
    };

    function renderQuizzes() {
        Object.keys(quizzesData).forEach(uId => {
            const container = document.querySelector(`.quiz-container-box[data-quiz-unit="${uId}"]`);
            if (!container) return;

            container.innerHTML = '';
            const questions = quizzesData[uId];

            questions.forEach((q, qIdx) => {
                const card = document.createElement('div');
                card.className = 'quiz-question-card';
                card.id = `q-card-${uId}-${q.id}`;

                const title = document.createElement('h4');
                title.textContent = q.question;
                card.appendChild(title);

                const optionsDiv = document.createElement('div');
                optionsDiv.className = 'quiz-options';

                q.options.forEach((opt, oIdx) => {
                    const btn = document.createElement('button');
                    btn.className = 'quiz-option-btn';
                    btn.textContent = opt;
                    btn.addEventListener('click', () => handleOptionClick(uId, q.id, oIdx, btn, optionsDiv));
                    optionsDiv.appendChild(btn);
                });

                card.appendChild(optionsDiv);
                container.appendChild(card);
            });

            // Results footer placeholder
            const resultsDiv = document.createElement('div');
            resultsDiv.className = 'quiz-results';
            resultsDiv.id = `quiz-results-${uId}`;
            resultsDiv.style.display = 'none';
            resultsDiv.innerHTML = `
                <h3>Quiz Complete!</h3>
                <p class="score-display">Your Score: <span id="score-${uId}">0</span> / 5</p>
                <div class="score-progress">
                    <div class="score-progress-bar" id="score-bar-${uId}"></div>
                </div>
                <p id="feedback-${uId}"></p>
                <button class="reset-btn" data-reset-unit="${uId}">Retake Quiz</button>
            `;
            container.appendChild(resultsDiv);

            // Reset listener
            resultsDiv.querySelector('.reset-btn').addEventListener('click', () => {
                resetQuiz(uId);
            });
        });
    }

    function handleOptionClick(unitId, questionId, optionIndex, clickedBtn, optionsDiv) {
        const key = `${unitId}_${questionId}`;
        if (userAnswers[key] !== undefined) return;

        const question = quizzesData[unitId].find(q => q.id === questionId);
        userAnswers[key] = optionIndex;

        const buttons = optionsDiv.querySelectorAll('.quiz-option-btn');
        buttons.forEach(btn => btn.setAttribute('disabled', 'true'));

        if (optionIndex === question.correct) {
            clickedBtn.classList.add('correct');
        } else {
            clickedBtn.classList.add('incorrect');
            buttons[question.correct].classList.add('correct');
        }

        const expDiv = document.createElement('div');
        expDiv.className = 'quiz-explanation';
        expDiv.innerHTML = `<strong>Explanation:</strong> ${question.exp}`;
        document.getElementById(`q-card-${unitId}-${questionId}`).appendChild(expDiv);

        // Check if all questions in this unit are answered
        const unitQuestions = quizzesData[unitId];
        const answeredUnitQuestions = Object.keys(userAnswers).filter(k => k.startsWith(`${unitId}_`));
        if (answeredUnitQuestions.length === unitQuestions.length) {
            showQuizResults(unitId);
        }
    }

    function showQuizResults(unitId) {
        const questions = quizzesData[unitId];
        let score = 0;
        questions.forEach(q => {
            if (userAnswers[`${unitId}_${q.id}`] === q.correct) score++;
        });

        const resultsDiv = document.getElementById(`quiz-results-${unitId}`);
        resultsDiv.querySelector(`#score-${unitId}`).textContent = score;
        
        const pct = (score / questions.length) * 100;
        resultsDiv.querySelector(`#score-bar-${unitId}`).style.width = `${pct}%`;

        let feedText = '';
        if (score === 5) {
            feedText = 'Perfect! You are an expert on this unit!';
        } else if (score >= 3) {
            feedText = 'Good job! A solid grasp of the concepts.';
        } else {
            feedText = 'Review the topics and try again to master these concepts.';
        }
        resultsDiv.querySelector(`#feedback-${unitId}`).textContent = feedText;

        resultsDiv.style.display = 'block';
        setTimeout(() => {
            window.scrollTo({
                top: resultsDiv.offsetTop - 120,
                behavior: 'smooth'
            });
        }, 100);
    }

    function resetQuiz(unitId) {
        const questions = quizzesData[unitId];
        questions.forEach(q => {
            delete userAnswers[`${unitId}_${q.id}`];
        });

        // Re-render unit quiz container
        const container = document.querySelector(`.quiz-container-box[data-quiz-unit="${unitId}"]`);
        const resultsDiv = document.getElementById(`quiz-results-${unitId}`);
        resultsDiv.style.display = 'none';

        const cards = container.querySelectorAll('.quiz-question-card');
        cards.forEach(card => {
            const exp = card.querySelector('.quiz-explanation');
            if (exp) exp.remove();

            const buttons = card.querySelectorAll('.quiz-option-btn');
            buttons.forEach(btn => {
                btn.removeAttribute('disabled');
                btn.className = 'quiz-option-btn';
            });
        });

        window.scrollTo({
            top: document.getElementById(`u${unitId}_quiz`).offsetTop - 90,
            behavior: 'smooth'
        });
    }

    // --- 11. Global Search Capabilities ---
    const searchInput = document.getElementById('searchInput');
    const searchDropdown = document.getElementById('searchResults');

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        searchDropdown.innerHTML = '';

        if (query.length < 3) {
            searchDropdown.classList.remove('active');
            return;
        }

        const matches = searchIndex.filter(item => {
            return item.title.toLowerCase().includes(query) || item.keywords.toLowerCase().includes(query);
        });

        if (matches.length > 0) {
            matches.forEach(match => {
                const div = document.createElement('div');
                div.className = 'search-item';
                div.innerHTML = `
                    <span class="search-item-unit">Unit ${match.unit}</span>
                    <span class="search-item-title">${match.title}</span>
                `;
                div.addEventListener('click', () => {
                    // Load unit first
                    selectUnit(match.unit);
                    
                    // Clear search
                    searchInput.value = '';
                    searchDropdown.classList.remove('active');

                    // Scroll to target element
                    setTimeout(() => {
                        const targetEl = document.getElementById(match.target);
                        if (targetEl) {
                            window.scrollTo({
                                top: targetEl.offsetTop - 90,
                                behavior: 'smooth'
                            });
                        }
                    }, 150);
                });
                searchDropdown.appendChild(div);
            });
            searchDropdown.classList.add('active');
        } else {
            const noResults = document.createElement('div');
            noResults.className = 'search-item';
            noResults.style.cursor = 'default';
            noResults.innerHTML = '<span class="text-muted">No topics matching search query</span>';
            searchDropdown.appendChild(noResults);
            searchDropdown.classList.add('active');
        }
    });

    // Close search dropdown on click outside
    document.addEventListener('click', (e) => {
        if (!searchInput.contains(e.target) && !searchDropdown.contains(e.target)) {
            searchDropdown.classList.remove('active');
        }
    });

    // --- 12. Theme Toggler ---
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = themeToggle.querySelector('.theme-icon');
    
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.body.className = savedTheme;
        themeIcon.textContent = savedTheme === 'dark-mode' ? '☀️' : '🌙';
    }

    themeToggle.addEventListener('click', () => {
        const isDark = document.body.classList.contains('dark-mode');
        const newTheme = isDark ? 'light-mode' : 'dark-mode';
        document.body.className = newTheme;
        themeIcon.textContent = isDark ? '🌙' : '☀️';
        localStorage.setItem('theme', newTheme);
    });

    // --- 13. Initialize App State ---
    
    // --- 14. Additional Interactive Diagrams Handlers ---
    
    // A. HRM Scope Pillars Handler (Unit 1 Topic 1)
    const scopeNodes = document.querySelectorAll('#u1_svg_scope .scope-node');
    const scopeTitle = document.getElementById('u1_scope_title');
    const scopeDesc = document.getElementById('u1_scope_desc');
    
    scopeNodes.forEach(node => {
        node.addEventListener('click', () => {
            const aspect = node.getAttribute('data-aspect');
            const details = node.getAttribute('data-details');
            scopeTitle.textContent = aspect;
            scopeDesc.textContent = details;
            
            // Visual highlight
            scopeNodes.forEach(n => {
                n.querySelector('rect').setAttribute('fill', n === node ? '#7c3aed' : '#cbd5e1');
            });
        });
    });

    // B. Selection Funnel Handler (Unit 2 Topic 10)
    const funnelNodes = document.querySelectorAll('#u2_svg_funnel .funnel-node');
    const funnelTitle = document.getElementById('u2_funnel_title');
    const funnelDesc = document.getElementById('u2_funnel_desc');
    
    funnelNodes.forEach(node => {
        node.addEventListener('click', () => {
            const stage = node.getAttribute('data-stage');
            const details = node.getAttribute('data-details');
            funnelTitle.textContent = stage;
            funnelDesc.textContent = details;
            
            // Visual highlight
            funnelNodes.forEach(n => {
                n.querySelector('polygon').setAttribute('opacity', n === node ? '1' : '0.4');
            });
        });
    });

    // C. Appraisal Methods Selector Handler (Unit 3 Topic 8)
    const appraisalNodes = document.querySelectorAll('#u3_svg_appraisal .appraisal-node');
    const appraisalTitle = document.getElementById('u3_appraisal_title');
    const appraisalDesc = document.getElementById('u3_appraisal_desc');
    
    appraisalNodes.forEach(node => {
        node.addEventListener('click', () => {
            const name = node.getAttribute('data-name');
            const details = node.getAttribute('data-details');
            appraisalTitle.textContent = name;
            appraisalDesc.textContent = details;
            
            // Visual highlight
            appraisalNodes.forEach(n => {
                n.querySelector('rect').setAttribute('fill', n === node ? '#7c3aed' : '#cbd5e1');
            });
        });
    });

    
    // --- 15. New Interactive Diagrams Click Handlers ---
    
    // 1. Line vs Staff Handler (Unit 1 Topic 2)
    const lineStaffNodes = document.querySelectorAll('#u1_svg_line_staff .line-staff-node');
    const lineStaffTitle = document.getElementById('u1_line_staff_title');
    const lineStaffDesc = document.getElementById('u1_line_staff_desc');
    
    lineStaffNodes.forEach(node => {
        node.addEventListener('click', () => {
            const role = node.getAttribute('data-role');
            const details = node.getAttribute('data-details');
            lineStaffTitle.textContent = role;
            lineStaffDesc.textContent = details;
            
            // Visual highlight
            lineStaffNodes.forEach(n => {
                n.querySelector('rect').setAttribute('opacity', n === node ? '1' : '0.5');
            });
        });
    });

    // 2. HRP Process Handler (Unit 2 Topic 2)
    const hrpNodes = document.querySelectorAll('#u2_svg_hrp_process .hrp-node');
    const hrpTitle = document.getElementById('u2_hrp_title');
    const hrpDesc = document.getElementById('u2_hrp_desc');
    
    hrpNodes.forEach(node => {
        node.addEventListener('click', () => {
            const step = node.getAttribute('data-step');
            const details = node.getAttribute('data-details');
            hrpTitle.textContent = step;
            hrpDesc.textContent = details;
            
            // Visual highlight
            hrpNodes.forEach(n => {
                n.querySelector('rect').setAttribute('opacity', n === node ? '1' : '0.5');
            });
        });
    });

    // 3. Job Design Handler (Unit 2 Topic 6)
    const jobDesignNodes = document.querySelectorAll('#u2_svg_job_design_matrix .job-design-node');
    const jobDesignTitle = document.getElementById('u2_job_design_title');
    const jobDesignDesc = document.getElementById('u2_job_design_desc');
    
    jobDesignNodes.forEach(node => {
        node.addEventListener('click', () => {
            const method = node.getAttribute('data-method');
            const details = node.getAttribute('data-details');
            jobDesignTitle.textContent = method;
            jobDesignDesc.textContent = details;
            
            // Visual highlight
            jobDesignNodes.forEach(n => {
                n.querySelector('rect').setAttribute('opacity', n === node ? '1' : '0.5');
            });
        });
    });

    // 4. Job Evaluation Handler (Unit 2 Topic 8)
    const jobEvalNodes = document.querySelectorAll('#u2_svg_job_eval .job-eval-node');
    const jobEvalTitle = document.getElementById('u2_job_eval_title');
    const jobEvalDesc = document.getElementById('u2_job_eval_desc');
    
    jobEvalNodes.forEach(node => {
        node.addEventListener('click', () => {
            const name = node.getAttribute('data-name');
            const details = node.getAttribute('data-details');
            jobEvalTitle.textContent = name;
            jobEvalDesc.textContent = details;
            
            // Visual highlight
            jobEvalNodes.forEach(n => {
                n.querySelector('rect').setAttribute('opacity', n === node ? '1' : '0.5');
            });
        });
    });

    // 5. Training Methods Handler (Unit 3 Topic 3)
    const trainingMethodsNodes = document.querySelectorAll('#u3_svg_training_methods .training-methods-node');
    const trainingMethodsTitle = document.getElementById('u3_training_methods_title');
    const trainingMethodsDesc = document.getElementById('u3_training_methods_desc');
    
    trainingMethodsNodes.forEach(node => {
        node.addEventListener('click', () => {
            const name = node.getAttribute('data-name');
            const details = node.getAttribute('data-details');
            trainingMethodsTitle.textContent = name;
            trainingMethodsDesc.textContent = details;
            
            // Visual highlight
            trainingMethodsNodes.forEach(n => {
                n.querySelector('rect').setAttribute('opacity', n === node ? '1' : '0.5');
            });
        });
    });

    // 6. Career Cycle Handler (Unit 3 Topic 6)
    const careerCycleNodes = document.querySelectorAll('#u3_svg_career_cycle .career-cycle-node');
    const careerCycleTitle = document.getElementById('u3_career_cycle_title');
    const careerCycleDesc = document.getElementById('u3_career_cycle_desc');
    
    careerCycleNodes.forEach(node => {
        node.addEventListener('click', () => {
            const stage = node.getAttribute('data-stage');
            const details = node.getAttribute('data-details');
            careerCycleTitle.textContent = stage;
            careerCycleDesc.textContent = details;
            
            // Visual highlight
            careerCycleNodes.forEach(n => {
                n.querySelector('circle').setAttribute('stroke', n === node ? 'var(--text-primary)' : 'none');
                n.querySelector('circle').setAttribute('stroke-width', n === node ? '3' : '0');
            });
        });
    });

    // 7. Gallup Q12 Handler (Unit 3 Topic 10)
    const gallupNodes = document.querySelectorAll('#u3_svg_gallup_q12 .gallup-q12-node');
    const gallupTitle = document.getElementById('u3_gallup_q12_title');
    const gallupDesc = document.getElementById('u3_gallup_q12_desc');
    
    gallupNodes.forEach(node => {
        node.addEventListener('click', () => {
            const tier = node.getAttribute('data-tier');
            const details = node.getAttribute('data-details');
            gallupTitle.textContent = tier;
            gallupDesc.textContent = details;
            
            // Visual highlight
            gallupNodes.forEach(n => {
                n.querySelector('polygon').setAttribute('opacity', n === node ? '1' : '0.5');
            });
        });
    });

    // 8. Protean Career Handler (Unit 4 Topic 4)
    const careerTypesNodes = document.querySelectorAll('#u4_svg_career_types .career-types-node');
    const careerTypesTitle = document.getElementById('u4_career_types_title');
    const careerTypesDesc = document.getElementById('u4_career_types_desc');
    
    careerTypesNodes.forEach(node => {
        node.addEventListener('click', () => {
            const dim = node.getAttribute('data-dim');
            const details = node.getAttribute('data-details');
            careerTypesTitle.textContent = dim;
            careerTypesDesc.textContent = details;
            
            // Visual highlight
            careerTypesNodes.forEach(n => {
                n.querySelectorAll('rect').forEach(r => r.setAttribute('opacity', n === node ? '1' : '0.5'));
            });
        });
    });

    selectUnit('1');
    renderQuizzes();
    updateOverallCourseProgress();
});
