//a is the downloaded array from our initial runway landscape image we selected in StyleGAN - this could be any image / values that hold between -1 and 1, and have the shape required by StyleGAN model

let a = [0.7850097051716888,-0.12898924468978487,0.3354387347677663,0.5202508446593516,-0.4553037521205595,-0.45709274562201535,0.11166365418361371,0.2380714470991977,-0.29922779504596836,-0.5015170854119921,-0.38812311161423996,-0.5021577526306371,0.1772691868687844,0.2032202242319041,0.24047688898277358,0.3530478954956145,-0.1209957279948243,0.7188470947171078,-0.8633649454432576,-0.011746720173209858,0.38387406896022364,0.4112600886810822,-0.08307394221436314,0.13286428040992707,-0.5539303578760219,-0.27765475305148835,-0.5251882438195327,-0.704334644201128,-0.20400161969580946,-0.4640236916635003,-0.39305916696051224,0.32985661045590914,-0.27955841393030406,0.2242266385191358,-0.005223702892468329,0.18641110156318375,0.7370948878603026,0.6033167967429974,-0.6382139759708906,-0.11099886828445298,0.6209513524508509,0.8230076604600113,0.2953641128216856,-0.04475716903352321,0.32546494372717566,-0.4128783991833874,-0.38901673789859026,-0.15408736696457215,-0.9711795541861642,0.7771329911521113,0.3823770569823639,-0.2879596332640589,-0.5267149917537635,-0.34121487415867635,-0.16495691984101624,0.10564179199624264,0.6790054456060556,-0.38804578564121167,-0.20179198502303886,-0.09431213216213945,-0.49241016920871233,-0.18083000680967853,0.5982953103269817,-0.6810490138618543,-0.4483518172561776,0.28508984969361495,-0.9287112125030675,-0.02396239130438714,-0.2842138965818715,0.47320039752244686,0.051104258705432684,-0.45991430371352815,-0.07823892205843283,-0.11821790177348708,0.526594357224928,-0.7623184003171786,-0.18380249810361776,0.24288543785137684,0.31455146445561893,0.35172219886694156,0.029697823409306046,0.5332960112302623,-0.7070773247513529,-0.5301592716040544,0.589559347333402,-0.5051927200176376,0.5425037495673833,0.07295412800332432,-0.13720595038461236,0.20900458619627063,-0.6233088620880823,0.20195524336827822,0.623049408473061,-0.32158761793512464,-0.5070448683285145,-0.09544018598711183,0.7019105244727357,-0.0703346335172785,-0.4081988217394999,0.4847184479444113,0.7199069526950437,0.09983871681386289,-0.03210055224623963,-0.1898530208186876,0.7989953930971244,-0.5585678031581754,-0.6158187965994698,-0.6886502614603662,0.3627643515777538,0.19743266652182812,0.1314075441514504,-0.995539411209089,-0.6543069181696313,-0.5332646120759565,-0.6341290499076857,-0.30405506017103295,0.31533847686285954,-0.28675352832444084,0.6478947192421841,-0.32892905990037163,-0.6989320261283845,0.4797502904447487,0.6011650563827967,-0.4969562008059835,-0.7764851971967337,0.16072653158422118,-0.137125714225513,-0.2687772515002302,-0.6316868846484832,-0.044980442197099305,-0.2631653485104295,-0.640889176422786,-0.4436151903114758,-0.0658958493862832,0.2091799203987028,-0.46124555374479537,0.6949792678469013,0.39981010810600487,-0.4363326835191254,-0.3377186800985443,0.04853263561517143,0.25936507429597144,-0.17932597453854132,-0.2727821908355025,-0.1285738632919986,-0.27683418678022526,0.047059325008690846,0.030177753795162673,-0.2627920240627958,-0.1606057128021689,0.1831471500127455,-0.5621035576805149,0.46782858197313926,0.37704030188319987,0.770260103344862,0.19775148598150857,-0.10699361797051662,-0.271810510046103,-0.02874430485057275,-0.2943435600211164,0.550319486298059,-0.618917678042154,0.08795429486390804,0.3871584275457618,-0.007265958578814721,-0.2009795680550117,-0.3432065284738094,-0.5031763231112066,-0.6473519352748549,0.3787365493018847,0.20532568755149322,-0.2543108195393124,0.24396024123273288,-0.4672724178339256,0.18828016226809302,-0.11374578669836395,-0.2623173787680632,-0.25119227272506894,-0.2280509780209648,0.8569582852217701,0.3936626254032081,0.22315911053940557,-0.5304666574695311,0.2469849259707874,-0.5535721718872909,0.534465518450222,-0.0131693135179669,0.27837651934428287,0.5168536298280915,0.6591804041151406,0.4802052556239315,0.10432092299626977,-0.3217115681690719,0.35654437925223503,-0.7035572396334648,-0.24793612206408283,-0.41065628037192786,-0.9426411416974383,-0.6408045073712881,-0.042401045667818715,0.5671661153654511,0.09615681913892582,-0.571080513525303,0.7217598010561478,-0.8730004610779083,0.24724414205593384,0.5745224097783376,0.6101354092560142,0.02212286709116672,0.40861680064632383,-0.5582821634179338,-0.5589825718203547,0.012561816433408191,0.41732850620473355,0.4238044852845031,-0.7465513547682064,-0.2559633696078896,-0.5938691878498783,0.005725599274604712,0.44764363810590485,0.2741740071158393,-0.23024149087299328,-0.32697375958798514,-0.3242795066445946,0.7001411826756785,-0.0996182166519496,-0.1282712545246688,0.24757496730654413,0.2948020062465693,0.568844460856657,0.5736737558007535,0.027275320409653615,0.8467453307711269,-0.6991540769015545,-0.15540649930456057,-0.1336668839716414,0.6017056474048916,0.21426129049006906,0.5166348043392046,0.5735246616702949,-0.17268046294638217,0.38383919977077174,0.051860520862374054,-0.3118853032214087,0.6818593976806951,-0.3103093954926693,-0.13788247049057598,-0.524133261542022,-0.1630272945710601,-0.2058725587334896,0.2976214794094428,0.43401583139067657,0.4766522951938011,-0.320946263224394,0.10208210502240984,-0.008833376817015293,-0.08670758866363337,-0.7804153504735694,0.2422157547663884,0.6237286839355292,0.32761917459797113,0.5648397161496396,-0.06016382453028225,-0.6935844579800559,0.14247079276187496,-0.15875543648296117,-0.5732378567869307,-0.23827577459574495,-0.021803696557221443,0.05078262399499562,-0.6944774568830865,0.02259830481999909,0.1746990738519458,-0.3670920452674903,0.6332163125633129,-0.5353205668261771,0.2592992317855692,-0.504796929841833,-0.0436433868787305,0.5006637323526397,-0.3180285565480856,-0.010071330046554958,0.3400204807031118,0.5922747154154112,-0.7726649537020508,-0.21278690841304562,0.018141609842498754,-0.1435132996917801,0.03575498248902115,-0.7565174905368888,0.40289440220315265,0.41102863336814865,0.6487538077608951,-0.22362936143765139,0.8232145927857673,0.5346682196920092,-0.3425786296164575,0.629143846423487,-0.6311760981691354,-0.006593709808032873,-0.8341559870320572,-0.38641851183538056,-0.44330285821551757,-0.8059947056808986,-0.6274048763934992,0.33130146232349006,-0.7999738701120912,0.01194397324111765,0.4012888482718071,0.6190253416273286,0.007425026478051544,0.5059708196895264,0.2156039951246423,-0.2951892975832524,-0.5718641027037108,0.4698628134390193,0.1848652967764741,-0.15449163853450631,-0.11732759506182039,0.3258791199342116,-0.5124840194183073,0.7403798867860008,-0.6483026853967782,0.8289658093541614,-0.33070548302698266,-0.4657123082437419,0.5050521290403186,-0.3212480818181406,-0.3065125179700888,0.687443479049511,-0.3834877585186631,-0.4751258688777322,0.04414383988166068,0.183535423021982,-0.6172676153603084,0.5281977846217001,-0.5330166513764462,0.01856958016566322,0.628547735270564,-0.12671261455804503,0.3853537562402757,0.4328201137578818,0.22287986498662143,-0.14079623791259568,-0.23033804587366008,0.7080178256947715,0.0008634424801793605,0.45018724115049835,-0.8753489396628737,0.5502176684506416,0.01136816682358597,0.5434072811355722,0.04232565830798198,0.2661641796287365,-0.053231167856786235,-0.15323919029806235,-0.11044283894369855,0.08899809471378059,-0.15795265685566107,-0.14900921990170174,0.12018120197605756,0.13001076782100354,-0.19296566342931892,-0.16268564827106813,0.4551516682486483,0.10239395613641945,0.022096042323933376,0.29951360215029144,0.45587550129865534,0.14598334177037403,0.05847972230458247,0.6030840390674908,0.13186370301626693,-0.6526303996636768,-0.5752256436738733,-0.1822384873855762,-0.3448070005702159,0.1552730595634316,0.7127252354440581,0.5487027290190024,-0.09347999138613029,0.42029283844095894,-0.16774698679684197,-0.3239389234510742,0.3949112127670214,0.2813007976597741,-0.09766922755777603,0.060938350786468476,-0.48852653348369557,0.16419379694320732,0.6042396353165275,-0.9230254035245933,-0.3933221497424968,-0.36923170476942774,-0.513824805282747,0.10709568077434653,-1.0045815583987363,-0.7148606381818666,-0.6611219055951324,0.5411906384097971,-0.5337706023245998,0.8034818231856197,-0.19458434712411618,0.3306575654738398,-0.29676052618664556,-0.5647201984836746,0.6939838552202946,0.649502892291263,-0.6044084548811746,-0.6812312908656383,0.14491659638613824,0.5994705215131153,0.5933603712757995,-0.5899423475624843,0.4237191729640068,-0.3292341259728515,0.2502890859785103,0.1784312196436872,-0.2714486107910741,-0.18492394166016993,0.20208119484129167,0.02620253632282659,0.2526947229026963,0.3167533573350216,-0.19271393552134297,-0.0024293933253600047,-0.1566630086944485,-0.6554737865707524,-0.11815988016101504,-0.628120209652819,-0.1380427623811099,0.07448263287840172,-0.20722913074261118,0.08239526675595873,0.24497836455283475,-0.45405632378488964,0.11182346715282587,-0.10623837014340543,-0.3408645923381826,-0.9420464353258364,-0.33266469194329407,0.1949675271411266,0.3890906975733413,-0.6797954039721289,-0.32232816152734284,-0.8253563547365212,0.4494822351416723,0.13212487666926953,0.5276217505703786,0.7536888613371029,-0.14454699735027052,-0.07721707046539608,-0.5074935551864804,0.4280359630605638,-0.6886992683106483,0.20683066867905825,-0.15194959376085262,-0.5178990572962684,-0.726885775988972,0.259036286404074,0.3552565427057915,-0.5649964733121607,0.33265178959228525,-0.4823455894470831,-0.5278398083726915,0.4700605132704231,-0.4368528723535599,-0.14584545532683935,0.6788876761505868,0.8465232430357295,0.3129178268458651,-0.629787764047287,-0.402896998617769,0.3875394287317463,0.11451331810804984,0.8589218117264871,-0.2548082891747909,-0.6078115881900571,-0.7198525863303491,0.1546490437349081,-0.6317812467460868,-0.5799054349920574,-0.08591578345344456,0.04220301832846821,0.10579855063563871,-0.20258158075633736,-0.019246066106070023,0.1698910706834128,-0.2961179014935443,0.6753644295119158,-0.6477875905676642,-0.7220476863335863,0.21367465553581294,0.44949334021081,0.34156315948605,0.3842689031805806,0.16761611157996925,0.0354752054552869,-0.5616624940750958,-0.3918420336867507,0.1741607672927095,0.030349963573846492,0.3309764395334386,-0.5703628459780533,0.42896082738469055,0.24391869822900158,0.2774557531832187,0.13385446024401065,0.05420745363463511,-0.24327805682179968,-0.9177655277785379,-0.6739000370535544]