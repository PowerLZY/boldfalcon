Search.setIndex({docnames:["agent","analyzer","auxiliary","index","lib","lib.cuckoo","lib.cuckoo.common","machinery","modules","processing","readme","reporting","requirements","signatures"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":3,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":3,"sphinx.domains.rst":2,"sphinx.domains.std":2,sphinx:56},filenames:["agent.rst","analyzer.rst","auxiliary.rst","index.rst","lib.rst","lib.cuckoo.rst","lib.cuckoo.common.rst","machinery.rst","modules.rst","processing.rst","readme.rst","reporting.rst","requirements.txt","signatures.rst"],objects:{"":{agent:[0,0,0,"-"],analyzer:[1,0,0,"-"],auxiliary:[2,0,0,"-"],lib:[4,0,0,"-"],machinery:[7,0,0,"-"],processing:[9,0,0,"-"],reporting:[11,0,0,"-"],signatures:[13,0,0,"-"]},"agent.agent":{Agent:[0,1,1,""]},"agent.agent.Agent":{add_analyzer:[0,2,1,""],add_config:[0,2,1,""],add_malware:[0,2,1,""],complete:[0,2,1,""],execute:[0,2,1,""],get_error:[0,2,1,""],get_status:[0,2,1,""]},"analyzer.analyzer":{Analyzer:[1,1,1,""],CommandPipeHandler:[1,1,1,""],Files:[1,1,1,""],ProcessList:[1,1,1,""]},"analyzer.analyzer.Analyzer":{complete:[1,2,1,""],get_pipe_path:[1,2,1,""],prepare:[1,2,1,""],run:[1,2,1,""],stop:[1,2,1,""]},"analyzer.analyzer.CommandPipeHandler":{dispatch:[1,2,1,""],ignore_list:[1,3,1,""]},"analyzer.analyzer.Files":{PROTECTED_NAMES:[1,3,1,""],add_file:[1,2,1,""],add_pid:[1,2,1,""],delete_file:[1,2,1,""],dump_file:[1,2,1,""],dump_files:[1,2,1,""],is_protected_filename:[1,2,1,""],move_file:[1,2,1,""]},"analyzer.analyzer.ProcessList":{add_pid:[1,2,1,""],add_pids:[1,2,1,""],has_pid:[1,2,1,""],remove_pid:[1,2,1,""]},"auxiliary.mitm":{MITM:[2,1,1,""]},"auxiliary.mitm.MITM":{start:[2,2,1,""],stop:[2,2,1,""]},"auxiliary.services":{Services:[2,1,1,""]},"auxiliary.services.Services":{start:[2,2,1,""],start_service:[2,2,1,""],stop:[2,2,1,""],stop_service:[2,2,1,""]},"auxiliary.sniffer":{Sniffer:[2,1,1,""]},"auxiliary.sniffer.Sniffer":{start:[2,2,1,""],stop:[2,2,1,""]},"lib.cuckoo":{common:[6,0,0,"-"]},"lib.cuckoo.common":{abstracts:[6,0,0,"-"]},"lib.cuckoo.common.abstracts":{Auxiliary:[6,1,1,""],BehaviorHandler:[6,1,1,""],Detection:[6,1,1,""],LibVirtMachinery:[6,1,1,""],Machinery:[6,1,1,""],Processing:[6,1,1,""],ProtocolHandler:[6,1,1,""],Report:[6,1,1,""],Signature:[6,1,1,""]},"lib.cuckoo.common.abstracts.Auxiliary":{set_machine:[6,2,1,""],set_options:[6,2,1,""],set_task:[6,2,1,""],start:[6,2,1,""],stop:[6,2,1,""]},"lib.cuckoo.common.abstracts.BehaviorHandler":{event_types:[6,3,1,""],handle_event:[6,2,1,""],handles_path:[6,2,1,""],key:[6,3,1,""],parse:[6,2,1,""],run:[6,2,1,""]},"lib.cuckoo.common.abstracts.Detection":{enabled:[6,3,1,""],load_binaries:[6,2,1,""],load_features:[6,2,1,""],load_model:[6,2,1,""],order:[6,3,1,""],predict:[6,2,1,""],run:[6,2,1,""],set_path:[6,2,1,""],set_results:[6,2,1,""]},"lib.cuckoo.common.abstracts.LibVirtMachinery":{ABORTED:[6,3,1,""],ERROR:[6,3,1,""],PAUSED:[6,3,1,""],POWEROFF:[6,3,1,""],RUNNING:[6,3,1,""],dump_memory:[6,2,1,""],initialize:[6,2,1,""],shutdown:[6,2,1,""],start:[6,2,1,""],stop:[6,2,1,""]},"lib.cuckoo.common.abstracts.Machinery":{LABEL:[6,3,1,""],acquire:[6,2,1,""],availables:[6,2,1,""],dump_memory:[6,2,1,""],initialize:[6,2,1,""],machines:[6,2,1,""],pcap_path:[6,2,1,""],release:[6,2,1,""],running:[6,2,1,""],set_options:[6,2,1,""],set_status:[6,2,1,""],shutdown:[6,2,1,""],start:[6,2,1,""],stop:[6,2,1,""]},"lib.cuckoo.common.abstracts.Processing":{enabled:[6,3,1,""],order:[6,3,1,""],run:[6,2,1,""],set_baseline:[6,2,1,""],set_options:[6,2,1,""],set_path:[6,2,1,""],set_results:[6,2,1,""],set_task:[6,2,1,""]},"lib.cuckoo.common.abstracts.ProtocolHandler":{close:[6,2,1,""],init:[6,2,1,""]},"lib.cuckoo.common.abstracts.Report":{order:[6,3,1,""],run:[6,2,1,""],set_options:[6,2,1,""],set_path:[6,2,1,""],set_task:[6,2,1,""]},"lib.cuckoo.common.abstracts.Signature":{alert:[6,3,1,""],authors:[6,3,1,""],categories:[6,3,1,""],check_dll_loaded:[6,2,1,""],check_domain:[6,2,1,""],check_file:[6,2,1,""],check_ip:[6,2,1,""],check_key:[6,2,1,""],check_mutex:[6,2,1,""],check_url:[6,2,1,""],description:[6,3,1,""],enabled:[6,3,1,""],families:[6,3,1,""],filter_apinames:[6,3,1,""],filter_categories:[6,3,1,""],get_apkinfo:[6,2,1,""],get_command_lines:[6,2,1,""],get_dll_loaded:[6,2,1,""],get_droidmon:[6,2,1,""],get_files:[6,2,1,""],get_googleplay:[6,2,1,""],get_keys:[6,2,1,""],get_mutexes:[6,2,1,""],get_net_domains:[6,2,1,""],get_net_generic:[6,2,1,""],get_net_hosts:[6,2,1,""],get_net_http:[6,2,1,""],get_net_http_ex:[6,2,1,""],get_net_icmp:[6,2,1,""],get_net_irc:[6,2,1,""],get_net_smtp:[6,2,1,""],get_net_udp:[6,2,1,""],get_process_by_pid:[6,2,1,""],get_processes:[6,2,1,""],get_results:[6,2,1,""],get_summary:[6,2,1,""],get_summary_generic:[6,2,1,""],get_virustotal:[6,2,1,""],get_volatility:[6,2,1,""],get_wmi_queries:[6,2,1,""],has_marks:[6,2,1,""],init:[6,2,1,""],mark:[6,2,1,""],mark_call:[6,2,1,""],mark_ioc:[6,2,1,""],mark_vol:[6,2,1,""],markcount:[6,3,1,""],maximum:[6,3,1,""],minimum:[6,3,1,""],name:[6,3,1,""],on_call:[6,2,1,""],on_call_dispatch:[6,3,1,""],on_complete:[6,2,1,""],on_process:[6,2,1,""],on_signature:[6,2,1,""],order:[6,3,1,""],platform:[6,3,1,""],references:[6,3,1,""],results:[6,2,1,""],severity:[6,3,1,""]},"machinery.virtualbox":{VirtualBox:[7,1,1,""]},"machinery.virtualbox.VirtualBox":{ABORTED:[7,3,1,""],ERROR:[7,3,1,""],POWEROFF:[7,3,1,""],RUNNING:[7,3,1,""],SAVED:[7,3,1,""],dump_memory:[7,2,1,""],dump_pcap:[7,2,1,""],start:[7,2,1,""],stop:[7,2,1,""]},"machinery.vmware":{VMware:[7,1,1,""]},"machinery.vmware.VMware":{LABEL:[7,3,1,""],dump_memory:[7,2,1,""],start:[7,2,1,""],stop:[7,2,1,""]},"processing.analysisinfo":{AnalysisInfo:[9,1,1,""],MetaInfo:[9,1,1,""]},"processing.analysisinfo.AnalysisInfo":{run:[9,2,1,""]},"processing.analysisinfo.MetaInfo":{run:[9,2,1,""]},"processing.behavior":{Anomaly:[9,1,1,""],ApiStats:[9,1,1,""],BehaviorAnalysis:[9,1,1,""],GenericBehavior:[9,1,1,""],PlatformInfo:[9,1,1,""],ProcessTree:[9,1,1,""],Summary:[9,1,1,""]},"processing.behavior.Anomaly":{event_types:[9,3,1,""],handle_event:[9,2,1,""],key:[9,3,1,""],run:[9,2,1,""]},"processing.behavior.ApiStats":{event_types:[9,3,1,""],handle_event:[9,2,1,""],key:[9,3,1,""],run:[9,2,1,""]},"processing.behavior.BehaviorAnalysis":{key:[9,3,1,""],run:[9,2,1,""]},"processing.behavior.GenericBehavior":{event_types:[9,3,1,""],handle_generic_event:[9,2,1,""],handle_process_event:[9,2,1,""],key:[9,3,1,""],run:[9,2,1,""]},"processing.behavior.PlatformInfo":{key:[9,3,1,""]},"processing.behavior.ProcessTree":{event_types:[9,3,1,""],handle_event:[9,2,1,""],key:[9,3,1,""],run:[9,2,1,""]},"processing.behavior.Summary":{event_types:[9,3,1,""],handle_event:[9,2,1,""],key:[9,3,1,""],run:[9,2,1,""]},"processing.buffer":{DroppedBuffer:[9,1,1,""]},"processing.buffer.DroppedBuffer":{run:[9,2,1,""]},"processing.debug":{Debug:[9,1,1,""]},"processing.debug.Debug":{run:[9,2,1,""]},"processing.droidmon":{Droidmon:[9,1,1,""]},"processing.droidmon.Droidmon":{get_pair:[9,2,1,""],keyCleaner:[9,2,1,""],lib_pairs:[9,2,1,""],run:[9,2,1,""]},"processing.dropped":{Dropped:[9,1,1,""]},"processing.dropped.Dropped":{run:[9,2,1,""]},"processing.dumptls":{TLSMasterSecrets:[9,1,1,""]},"processing.dumptls.TLSMasterSecrets":{key:[9,3,1,""],order:[9,3,1,""],run:[9,2,1,""]},"processing.memory":{Memory:[9,1,1,""],VolatilityAPI:[9,1,1,""],VolatilityManager:[9,1,1,""]},"processing.memory.Memory":{run:[9,2,1,""]},"processing.memory.VolatilityAPI":{apihooks:[9,2,1,""],callbacks:[9,2,1,""],devicetree:[9,2,1,""],dlllist:[9,2,1,""],gdt:[9,2,1,""],get_dtb:[9,2,1,""],getsids:[9,2,1,""],handles:[9,2,1,""],idt:[9,2,1,""],imageinfo:[9,2,1,""],init_config:[9,2,1,""],ldrmodules:[9,2,1,""],malfind:[9,2,1,""],messagehooks:[9,2,1,""],modscan:[9,2,1,""],mutantscan:[9,2,1,""],netscan:[9,2,1,""],privs:[9,2,1,""],pslist:[9,2,1,""],psxview:[9,2,1,""],sockscan:[9,2,1,""],ssdt:[9,2,1,""],svcscan:[9,2,1,""],timers:[9,2,1,""],yarascan:[9,2,1,""]},"processing.memory.VolatilityManager":{PLUGINS:[9,3,1,""],cleanup:[9,2,1,""],find_taint:[9,2,1,""],get_osprofile:[9,2,1,""],mask_filter:[9,2,1,""],run:[9,2,1,""]},"processing.network":{NetworkAnalysis:[9,1,1,""],Pcap2:[9,1,1,""],Pcap:[9,1,1,""],SortCap:[9,1,1,""],batch_sort:[9,4,1,""],conn_from_flowtuple:[9,4,1,""],flowtuple_from_raw:[9,4,1,""],iplayer_from_raw:[9,4,1,""],next_connection_packets:[9,4,1,""],packets_for_stream:[9,4,1,""],payload_from_raw:[9,4,1,""],sort_pcap:[9,4,1,""]},"processing.network.NetworkAnalysis":{get_tlsmaster:[9,2,1,""],key:[9,3,1,""],order:[9,3,1,""],run:[9,2,1,""]},"processing.network.Pcap":{notified_dpkt:[9,3,1,""],run:[9,2,1,""],ssl_ports:[9,3,1,""]},"processing.network.Pcap2":{run:[9,2,1,""]},"processing.network.SortCap":{close:[9,2,1,""],next:[9,2,1,""],write:[9,2,1,""]},"processing.procmemory":{ProcessMemory:[9,1,1,""]},"processing.procmemory.ProcessMemory":{create_idapy:[9,2,1,""],dump_images:[9,2,1,""],read_dump:[9,2,1,""],run:[9,2,1,""]},"processing.screenshots":{Screenshots:[9,1,1,""]},"processing.screenshots.Screenshots":{run:[9,2,1,""]},"processing.snort":{Snort:[9,1,1,""]},"processing.snort.Snort":{run:[9,2,1,""]},"processing.static":{OfficeDocument:[9,1,1,""],PortableExecutable:[9,1,1,""],Static:[9,1,1,""],WindowsScriptFile:[9,1,1,""]},"processing.static.OfficeDocument":{deobf:[9,3,1,""],deobfuscate:[9,2,1,""],get_macros:[9,2,1,""],run:[9,2,1,""]},"processing.static.PortableExecutable":{run:[9,2,1,""]},"processing.static.Static":{PRIVKEY_RE:[9,3,1,""],PUBKEY_RE:[9,3,1,""],office_ext:[9,3,1,""],run:[9,2,1,""]},"processing.static.WindowsScriptFile":{decode:[9,2,1,""],encoding:[9,3,1,""],lookup:[9,3,1,""],run:[9,2,1,""],script_re:[9,3,1,""],unescape:[9,3,1,""]},"processing.strings":{Strings:[9,1,1,""]},"processing.strings.Strings":{run:[9,2,1,""]},"processing.suricata":{Suricata:[9,1,1,""]},"processing.suricata.Suricata":{parse_eve_json:[9,2,1,""],parse_files:[9,2,1,""],process_pcap_binary:[9,2,1,""],process_pcap_socket:[9,2,1,""],run:[9,2,1,""],sid_blacklist:[9,3,1,""]},"processing.targetinfo":{TargetInfo:[9,1,1,""]},"processing.targetinfo.TargetInfo":{run:[9,2,1,""]},"processing.virustotal":{VirusTotal:[9,1,1,""]},"processing.virustotal.VirusTotal":{order:[9,3,1,""],run:[9,2,1,""],scan_file:[9,2,1,""],scan_url:[9,2,1,""],should_scan_file:[9,2,1,""]},"reporting.elasticsearch":{ElasticSearch:[11,1,1,""]},"reporting.elasticsearch.ElasticSearch":{connect:[11,2,1,""],do_index:[11,2,1,""],load_json:[11,2,1,""],process_behavior:[11,2,1,""],run:[11,2,1,""]},"reporting.jsondump":{JsonDump:[11,1,1,""]},"reporting.jsondump.JsonDump":{erase_calls:[11,2,1,""],restore_calls:[11,2,1,""],run:[11,2,1,""]},"reporting.moloch":{Moloch:[11,1,1,""]},"reporting.moloch.Moloch":{run:[11,2,1,""]},"reporting.mongodb":{MongoDB:[11,1,1,""]},"reporting.mongodb.MongoDB":{SCHEMA_VERSION:[11,3,1,""],connect:[11,2,1,""],run:[11,2,1,""],store_file:[11,2,1,""]},"reporting.reporthtml":{ReportHTML:[11,1,1,""]},"reporting.reporthtml.ReportHTML":{run:[11,2,1,""]},"signatures.creates_exe":{CreatesExe:[13,1,1,""]},"signatures.creates_exe.CreatesExe":{authors:[13,3,1,""],categories:[13,3,1,""],description:[13,3,1,""],enabled:[13,3,1,""],minimum:[13,3,1,""],name:[13,3,1,""],on_complete:[13,2,1,""],severity:[13,3,1,""]},"signatures.generic_metrics":{SystemMetrics:[13,1,1,""]},"signatures.generic_metrics.SystemMetrics":{authors:[13,3,1,""],categories:[13,3,1,""],description:[13,3,1,""],enabled:[13,3,1,""],filter_apinames:[13,3,1,""],filter_categories:[13,3,1,""],filter_processnames:[13,3,1,""],minimum:[13,3,1,""],name:[13,3,1,""],on_call:[13,2,1,""],severity:[13,3,1,""],stop:[13,2,1,""]},agent:{agent:[0,0,0,"-"]},analyzer:{analyzer:[1,0,0,"-"]},auxiliary:{mitm:[2,0,0,"-"],services:[2,0,0,"-"],sniffer:[2,0,0,"-"]},lib:{cuckoo:[5,0,0,"-"]},machinery:{virtualbox:[7,0,0,"-"],vmware:[7,0,0,"-"]},processing:{"static":[9,0,0,"-"],analysisinfo:[9,0,0,"-"],behavior:[9,0,0,"-"],buffer:[9,0,0,"-"],debug:[9,0,0,"-"],droidmon:[9,0,0,"-"],dropped:[9,0,0,"-"],dumptls:[9,0,0,"-"],memory:[9,0,0,"-"],network:[9,0,0,"-"],procmemory:[9,0,0,"-"],screenshots:[9,0,0,"-"],snort:[9,0,0,"-"],strings:[9,0,0,"-"],suricata:[9,0,0,"-"],targetinfo:[9,0,0,"-"],virustotal:[9,0,0,"-"]},reporting:{elasticsearch:[11,0,0,"-"],jsondump:[11,0,0,"-"],moloch:[11,0,0,"-"],mongodb:[11,0,0,"-"],reporthtml:[11,0,0,"-"]},signatures:{creates_exe:[13,0,0,"-"],generic_metrics:[13,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","attribute","Python attribute"],"4":["py","function","Python function"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:attribute","4":"py:function"},terms:{"0":[9,13],"1":[6,9,11],"10":9,"100":[9,11],"10000\u4e2a\u8f6f\u4ef6":[3,10],"101":9,"102":9,"103":9,"104":9,"105":9,"106":9,"107":9,"108":9,"109":9,"11":9,"110":9,"111":9,"112":9,"113":9,"114":9,"115":9,"116":9,"117":9,"118":9,"119":9,"12":9,"120":9,"121":9,"122":9,"123":9,"124":9,"125":9,"126":9,"127":9,"13":9,"14":9,"15":9,"16":9,"17":9,"18":9,"19":9,"2":[9,13],"20":9,"200\u4e2ajson":[3,10],"2017363":9,"2018":[3,10],"21":9,"22":9,"2200074":9,"2200075":9,"23":9,"24":9,"25":9,"26":9,"27":9,"28":9,"29":9,"3":[3,9,10],"30":9,"31":9,"32":9,"32000":9,"33":9,"34":9,"35":9,"36":9,"37":9,"38":9,"39":9,"4":9,"40":9,"41":9,"42":9,"43":9,"44":9,"443":9,"45":9,"46":9,"47":9,"48":9,"49":9,"5":[3,9,10],"50":[6,9],"51":9,"52":9,"53":9,"54":9,"55":9,"56":9,"57":9,"58":9,"59":9,"6":9,"6000\u4e2a":[3,10],"61":9,"63":9,"65":9,"66":9,"67":9,"68":9,"69":9,"7":9,"70":9,"71":9,"72":9,"73":9,"74":9,"75":9,"76":9,"77":9,"78":9,"79":9,"8":9,"80":9,"81":9,"82":9,"83":9,"84":9,"85":9,"86":9,"87":9,"88":9,"89":9,"9":9,"90":9,"91":9,"92":9,"93":9,"94":9,"95":9,"96":9,"97":9,"98":9,"99":9,"\u4eba\u4eba\u53ef\u4ee5\u5b66python":[],"\u4f7f\u7528\u7279\u5f81\u5c55\u793a":[3,10],"\u4f7f\u7528\u81ea\u5b9a\u4e49\u7b7e\u540d":[3,10],"\u521b\u5efabold":[3,10],"\u52a8\u6001\u4fe1\u606f\u63d0\u53d6\u539f\u7406":[3,10],"\u52a8\u6001\u68c0\u6d4b\u5f15\u64ce":[3,10],"\u52a8\u6001\u724c\u5b50":[3,10],"\u5386\u5c4a\u7f51\u7edc\u6280\u672f\u6311\u6218\u8d5b\u8c03\u7814":[3,10],"\u539f\u7406":[3,10],"\u53c2\u8003\u6587\u732e\u8bb0\u5f55":[3,10],"\u53cd\u6b63\u6211\u4eec\u8fd9\u91cc\u662f\u7528\u6765\u5199\u6587\u6863\u7684":[],"\u540e\u671f\u9700\u6c42":[3,10],"\u56fd\u5185\u6c99\u7bb1\u6df1\u5ea6\u8c03\u7814":[3,10],"\u56fe\u6807":[3,10],"\u5904\u7406":[3,10],"\u5b66\u4e60\u5185\u5bb9":[3,10],"\u5b9a\u4e49\u57fa\u7c7bml":[3,10],"\u5b9a\u4e49\u6a21\u578b\u547d\u540d\u89c4\u5219":[3,10],"\u5bb6\u65cf\u7b7e\u540d\u6a21\u5757":[3,10],"\u5bb6\u65cf\u805a\u7c7b":[3,10],"\u6211\u4e5f\u4e0d\u77e5\u9053\u5199\u4ec0\u4e48\u597d":[],"\u6211\u662f\u6d4b\u8bd5\u7c7b":[],"\u6240\u4ee5\u6211\u4eec\u5f00\u53d1\u7684\u65f6\u5019\u5c31\u5e94\u8be5\u5728\u8fd9\u91cc\u5199\u597d\u6587\u6863":[],"\u62a5\u544a\u663e\u793a\u5185\u5bb9":[3,10],"\u6316\u77ff\u8f6f\u4ef6":[3,10],"\u6570\u636e\u96c6":[3,10],"\u6574\u7406":[3,10],"\u6574\u7406\u5de5\u7a0b\u76ee\u5f55\u6253\u5305lib":[3,10],"\u66f4\u65b0\u6e90\u7801\u7b80\u4ecb\u4fe1\u606f":[3,10],"\u673a\u5668\u5b66\u4e60\u6a21\u5757":[3,10],"\u673a\u5668\u5b66\u4e60\u6a21\u578b\u68c0\u6d4b":[3,10],"\u6a21\u578b\u68c0\u6d4b\u56fe\u5c55\u793a":[3,10],"\u6c99\u7bb1\u5185\u5b58\u7ba1\u7406":[3,10],"\u6d4b\u8bd5sphinx\u81ea\u52a8\u751f\u6210\u6587\u6863":[],"\u6dfb\u52a0":[3,10],"\u6dfb\u52a0\u6316\u77ff":[3,10],"\u6dfb\u52a0smapl":[3,10],"\u7070\u5ea6\u56fe":[3,10],"\u7136\u540e\u7528sphinx\u81ea\u52a8\u751f\u6210":[],"\u73af\u5883\u6253\u5305":[3,10],"\u7528github":[3,10],"\u7701\u7565cwd\u76ee\u5f55":[3,10],"\u793e\u533a\u7b7e\u540d\u5e93":[3,10],"\u7b7e\u540d":[3,10],"\u817e\u8baf\u54c8\u52c3linux\u6c99\u7bb1\u6e90\u7801\u5206\u6790\u4e0a":[3,10],"\u817e\u8baf\u54c8\u52c3linux\u6c99\u7bb1\u6e90\u7801\u5206\u6790\u4e0b":[3,10],"\u865a\u62df\u673a":[3,10],"\u865a\u62df\u673a\u7ba1\u7406":[3,10],"\u865a\u62df\u673a\u8fd0\u884c\u811a\u672c":[3,10],"\u89e3\u6790analyz":[3,10],"\u89e3\u6790plugin":[3,10],"\u8bbe\u8ba1\u4f9d\u636e":[3,10],"\u8bbe\u8ba1\u6587\u6863":[3,10],"\u8d1f\u8d23\u6253\u5370hello":[],"\u8d1f\u8d23\u6d4b\u8bd5":[],"\u8d77\u540d":[3,10],"\u8f85\u52a9\u529f\u80fd":[3,10],"\u9759\u6001\u68c0\u6d4b\u5f15\u64ce":[3,10],"\u9884\u6d4b\u5a01\u80c1\u5f97\u5206":[3,10],"\u9ad8\u5e76\u53d1\u865a\u62df\u673a":[3,10],"abstract":[2,4,5,7,9,11,13],"api\u8c03\u7528\u5e8f\u5217":[3,10],"blog\u89e3\u6790\u6587\u6863\u7f16\u5199":[3,10],"boolean":6,"byte":11,"case":9,"class":[0,1,2,3,6,7,9,10,11,13],"cuckoo\u6280\u672f\u5206\u6790\u5168\u666f\u56fe":[3,10],"cuckoo\u6c99\u7bb1\u6e90\u7801\u5206\u6790\u4e0a":[3,10],"cuckoo\u6c99\u7bb1\u6e90\u7801\u5206\u6790\u4e2d":[3,10],"cuckoo\u6c99\u7bb1\u6e90\u7801\u5206\u6790\u540e":[3,10],"cuckoo\u7684\u884c\u4e3a\u7b7e\u540d":[3,10],"default":[6,9,11],"dll\u6ce8\u5165":[3,10],"do":[1,9],"dockershells\u5b89\u88c5":[3,10],"function":[7,9],"hdbscan\u7b49":[3,10],"int":[],"loader\u7b49":[3,10],"log\u7b49\u76ee\u5f55":[3,10],"new":6,"page\u5feb\u901f\u521b\u5efa\u9879\u76ee\u6587\u6863\u7f51\u7ad9":[3,10],"pip\u5b89\u88c5":[3,10],"public":9,"pypi\u4e0a\u4f20\u6a21\u5757":[3,10],"report\u6837\u672c":[3,10],"return":[0,1,2,6,9,11,13],"static":3,"true":[0,1,6],"wsgi\u5e94\u7528\u7a0b\u5e8f":[3,10],"yara\u89c4\u5219":[3,10],A:[1,6],For:9,If:6,It:11,Not:9,The:[6,9],There:9,abort:[6,7],about:[1,6,9,13],abov:9,access:6,acquir:6,action:6,activ:[6,13],adb:11,add:[0,1,3,6,10],add_analyz:0,add_config:0,add_fil:1,add_malwar:0,add_pid:1,addit:2,address:6,after:6,ag:[],alert:6,aliv:6,all:[1,6,9,13],allow:[1,2,6,9],also:9,an:[1,2,3,6,9,10],analysi:[0,1,2,3,6,7,9,10,11],analysis_path:6,analysisinfo:3,analyz:[0,9,10],android:[3,10],ani:9,anim:[],anomali:9,anoth:6,antiviru:9,api:[3,6,9,10,13],api_cal:9,apical:9,apihook:9,apistat:9,apkinfo:6,appli:9,approach:9,ar:[2,6,7,9],arbitrari:6,architectur:[],area:9,arg:[6,9],argument:[],around:9,associ:9,author:[6,13],auto:[3,10],autom:[3,10],auxiliari:[1,6],avail:[6,9],awai:1,b:9,base:[0,1,2,6,7,9,11,13],baselin:6,baseline_path:6,basi:2,basic:9,batch:9,batch_sort:9,been:[6,13],begin:9,behavior:[3,6,11],behavior_analysi:[6,9],behavioranalysi:[6,9],behaviorhandl:[6,9],being:[1,6],belong:[6,9],below:9,binari:9,both:[9,11],bruteforc:9,buffer:3,buffer_s:9,call:[6,9,11,13],callback:9,caller:[6,13],can:[6,9,11],captur:9,cat:[],categori:[6,13],certain:9,chang:[1,6],check:6,check_dll_load:6,check_domain:6,check_fil:6,check_ip:6,check_kei:6,check_mutex:6,check_url:6,cleanup:[6,9],client:9,close:[6,9],code:[3,9,10],collect:9,com:[3,9,10],come:6,command:6,commandpipehandl:1,common:[2,3,4,5,7,9,10,11,13],compat:9,compil:6,complet:[0,1],conf:0,configur:[0,6,9],conn_from_flowtupl:9,connect:[6,9,11],connector:11,contact:6,contain:[2,9],content:[3,8],convert:9,core:[3,10],could:[6,13],count:[6,9],coupl:9,creat:[0,3,9,10,13],create_idapi:9,creates_ex:3,createsex:13,cross:9,cuckoo:[0,1,2,3,4,7,8,9,10,11,13],cuckooautoinstal:[3,10],cuckoodroid:[3,10],cuckoomachineerror:[6,7],cuckooml:[3,10],cuckooreporterror:11,current:[0,6,9],custom:6,d:9,data:[0,1,6,9,11],databas:11,db:[3,10],debug:3,decid:1,decod:9,decrypt:9,delet:9,delete_fil:1,deobf:9,deobfusc:9,describ:[6,9],descript:[6,9,13],detect:[6,9],determin:[1,6,9,13],develop:13,devicetre:9,dict:[0,6,9,11],dictionari:[6,9,11],differ:9,directori:[6,9],dispatch:1,divma:[3,10],dll:6,dlllist:9,do_index:11,doc:[3,9,10],docker:[3,10],dockerfil:[3,10],docm:9,document:9,docx:9,domain:6,don:7,done:[6,13],dotm:9,down:[6,9],dpkt:9,droidmon:[3,6],drop:3,drop_dll:9,droppedbuff:9,dtb:9,dump:[1,3,6,7,9,10],dump_dir:9,dump_fil:1,dump_imag:9,dump_memori:[6,7],dump_pcap:7,dumptl:3,dure:9,dynam:[3,9,10],e:[1,9],each:[7,9],edit:[3,10],effect:6,effici:[3,10],either:2,elasticsearch:[3,8],elsewher:1,embed:9,ember:[3,10],empti:[6,11],enabl:[6,9,13],encod:9,end:[1,9],enough:9,env:1,erase_cal:11,error:[0,6,7],etc:[6,9],ev:9,event:[6,9],event_typ:[6,9],everi:9,exampl:[3,9,10],execut:[0,1,6,9,13],expect:9,explan:6,express:6,extract:9,fail:11,falcon:10,fals:[6,9,13],famili:6,fat:6,features_dict:6,fetch:9,file:[0,1,6,7,9,11],file_nam:1,file_obj:11,file_path:9,filenam:11,filepath:[1,9],filescan:9,filesystem:13,filetyp:9,filter:[6,9],filter_apinam:[6,13],filter_categori:[6,13],filter_processnam:13,find:9,find_taint:9,fine:9,finish:1,flag:6,flow:9,flowtuple_from_raw:9,fobj:9,fog:[3,10],folder:6,foo:[],footprint:9,format:[0,11],free:6,frog:[3,10],from:[0,1,6,9,11],ft:9,full:9,g:9,gain:9,gather:9,gatwai:7,gdt:9,gener:[2,6,9,13],generic_metr:3,genericbehavior:9,get:[0,6,9],get_apkinfo:6,get_command_lin:6,get_dll_load:6,get_droidmon:6,get_dtb:9,get_error:0,get_fil:6,get_googleplai:6,get_kei:6,get_macro:9,get_mutex:6,get_net_domain:6,get_net_gener:6,get_net_host:6,get_net_http:6,get_net_http_ex:6,get_net_icmp:6,get_net_irc:6,get_net_smtp:6,get_net_udp:6,get_osprofil:9,get_pair:9,get_pipe_path:1,get_process:6,get_process_by_pid:6,get_result:6,get_statu:0,get_summari:6,get_summary_gener:6,get_tlsmast:9,get_virustot:6,get_volatil:6,get_wmi_queri:6,getsid:9,getsystemmetr:13,gist:[3,10],github:[3,10],given:6,global:[2,6],googl:6,gridf:11,guest:0,ha:6,habo:[3,10],habomalhunt:[3,10],handl:[1,6,9,11],handle_ev:[6,9],handle_generic_ev:9,handle_process_ev:9,handler:[1,6,9],handles_path:6,has_mark:6,has_pid:1,have:[6,9,13],heavi:9,hello:[],helper:9,high:9,hook:9,hopefulli:9,host:[1,3,6,10],how:6,html:11,http:6,httpreplai:9,i:1,icmp:6,id:[6,11],identifi:[1,6],idt:9,ignore_list:1,imag:[3,9,10],imageinfo:9,includ:1,index:[3,11],info:[6,9],inform:[6,9],ing:7,inherit:6,init:6,init_config:9,initi:[1,6],inject:1,inpath:9,input_iter:9,insid:[0,6],instal:[3,10],integ:9,integr:7,interest:9,interfac:9,interpret:9,intro:[],ioc:6,ip:6,iplayer_from_raw:9,irc:6,is_protected_filenam:1,item:9,iter:9,its:[6,9],itself:9,json:[9,11],json_fil:11,jsondump:[3,8],just:[6,9],kaggl:[3,10],keep:9,kei:[6,9],keyclean:9,kill:6,kwarg:[6,9],label:[6,7],lambda:9,larg:9,layer:7,ldrmodul:9,learn:[3,10],level:9,lib:[2,7,8,9,11,13],lib_pair:9,librari:9,libvirt:[3,6,10],libvirtmachineri:6,like:[],line:6,link:9,linktyp:9,list:[1,6,9,11],load:[6,9,11],load_binari:6,load_featur:6,load_json:11,load_model:6,log:[6,9,13],logo:[3,10],logpath:6,look:6,lookup:9,machet:[6,7],machin:[3,6,7,10],machine_id:6,machineri:6,macro:9,mal_sampl:[3,10],malconv:[3,10],malfind:9,malwar:[3,9,10,11],manag:6,mani:6,map:9,mark:6,mark_cal:6,mark_ioc:6,mark_vol:6,markcount:6,mask:9,mask_filt:9,master:9,match:[6,13],maximum:6,memdump:9,memfil:9,memori:[3,6,7,10],memscrimp:[3,10],messag:0,messagehook:9,metainfo:9,method:[6,9,11],microsoft:[3,9,10],minimum:[6,13],mitm:3,mode:9,modifi:[3,10],modscan:9,modul:[3,8,10],module_nam:6,moloch:[3,8],mongo:11,mongodb:[3,8],monitor:[1,9],more:[1,2,6],most:9,move:1,move_fil:1,multipl:[7,9],mutantscan:9,mutex:6,n:9,name:[0,1,6,7,11,13],need:[6,9],netscan:9,network:[3,6],network_path:9,networkanalysi:9,never:2,newfilepath:1,next:[2,9],next_connection_packet:9,nictrac:7,none:[1,6,9],normal:7,note:[9,11],notif:1,notifi:[6,13],notified_dpkt:9,notimplementederror:[6,9,11],notrack:1,numpi:[],obj:11,object:[0,1,6,7,9,11,13],obtain:9,ocr:9,offic:9,office_ext:9,officedocu:9,offset:9,old:9,oldfilepath:1,on_cal:[6,13],on_call_dispatch:6,on_complet:[6,13],on_process:6,on_signatur:6,onc:9,one:[1,2,6],ones:9,onion:9,onli:[6,13],op:[3,10],open:[6,9],oper:[0,1,2],option:[0,6,9,11],order:[6,9],origin:11,os:9,osprofil:9,other:[6,7],out:[6,9],outpath:9,output:[6,9],output_class:9,output_path:9,over:9,overal:9,overrid:6,overview:9,own:9,p:9,packag:[3,8],packet:9,packets_for_stream:9,page:3,pagin:11,panda:[3,10],param:[0,6,7,9,11,13],paramet:[9,11],pars:[6,9],parse_eve_json:9,parse_fil:9,pass:[6,9],path:[6,7,9,11],pattern:6,paus:6,payload:9,payload_from_raw:9,pcap2:9,pcap:[6,7,9],pcap_path:[6,9],pe:9,pend:1,per:2,perform:9,pid:[0,1,6,13],pipe:1,piter:9,place:[6,9],plai:6,plain:9,platform:[6,9],platforminfo:9,plugin:[6,9],portableexecut:9,potm:9,poweroff:[6,7],ppam:9,ppid:[],ppsm:9,ppt:9,pptm:9,pptx:9,predict:6,prefer:9,prepar:1,print:6,printabl:9,priv:9,privat:9,privkey_r:9,probabl:9,proc:[6,13],procedur:1,process:[1,6,11,13],process_behavior:11,process_pcap_binari:9,process_pcap_socket:9,processlist:1,processmemori:9,processtre:9,procmemori:3,produc:9,profil:9,project:[3,10],proper:6,protected_nam:1,protocol:[6,9],protocolhandl:6,provid:9,pslist:9,psscan:9,psxview:9,pubkey_r:9,py:[3,9,10],python3:[3,10],queri:6,r:9,rais:[6,7,9,11],random:9,raw:9,re:[6,9],read:[6,9],read_dump:9,realli:9,reboot:2,receiv:1,recommonmark:12,reduc:9,refer:[6,9],regard:9,regex:[6,9],registri:6,regular:6,relat:[6,9],releas:6,remov:[1,9,11],remove_pid:1,renren:[],renren_2:[],replac:11,report:[6,8,9],reporthtml:[3,8],repres:6,represent:9,requir:[3,9,10],respect:9,rest:[3,10],restor:11,restore_cal:11,result:[0,6,9,11],retriev:[6,9],right:1,roughli:[],rsa:9,rtd:12,rule:9,run:[0,1,2,6,7,9,11],runsignatur:[3,10],s:9,same:[7,9],sampl:9,sample_data:[3,10],sandbox:[3,10],save:[7,11],scan:9,scan_fil:9,scan_url:9,scenario:7,schema_vers:11,screenshot:3,script:[3,9,10],script_r:9,search:[3,6],second:9,secret:9,section:6,see:[7,9],seek:9,self:[6,9],separ:9,sequenc:11,server:[1,3,9,10],servic:[3,9],session:9,set:[6,9,11],set_baselin:6,set_machin:6,set_opt:6,set_path:6,set_result:6,set_statu:6,set_task:6,sever:[6,9,13],should:[1,6,9],should_scan_fil:9,shutdown:6,sid_blacklist:9,signatur:[6,9],sink:9,size:[],smtp:6,snif:2,sniffer:3,snort:3,so:9,socket:9,sockscan:9,softwar:6,some:[6,9],sort:9,sort_pcap:9,sortcap:9,sourc:9,space:[3,10],specif:[6,9],sphinx:12,split:9,ssdeep:[3,10],ssdt:9,ssl_port:9,stack:[6,9],standard:9,start:[2,6,7,9,11],start_servic:2,statu:[0,1,2,6],still:[6,13],stop:[1,2,6,7,13],stop_servic:2,storag:[3,10],store:[6,7,11],store_fil:11,str:[],stream:9,string:[3,6,10],structur:[6,9],stuff:9,sub:[3,10],subkei:9,submodul:[3,4,5,8],subnet:7,subpackag:8,subtyp:6,succeed:6,success:0,suitabl:9,summari:[6,9],support:[6,9],sure:9,suricata:3,svcscan:9,system:[3,9,10],systemmetr:13,t:7,tag:6,taint:9,take:[6,7,9],talk:7,target:9,targetinfo:3,task:[6,7,9,11],task_id:[2,6],taskmod:9,tcp:9,tcpdump:7,temporari:9,temporarili:11,test1:[],test2:[],test_2:[],text:9,thei:[6,9],them:[1,6,9,11],theme:12,themselv:6,therebi:9,therefor:6,thi:[1,6,7,9,11,13],through:[1,7,9],thu:[1,9],tid:13,time:[3,10],timer:9,tl:9,tlsmaster:9,tlsmastersecret:9,togeth:9,track:[1,9],tree:9,tri:9,tupl:9,turn:6,txt:[3,10],type:9,typic:9,udp:[6,9],unabl:[6,7,11],undefin:6,unescap:9,unfinish:[3,10],unknown:11,up:9,url:[6,9],us:[6,7,9,13],util:7,valu:[6,11,13],variabl:[],variou:9,verbos:1,verifi:6,version:6,virtual:[6,7],virtualbox:3,virustot:[3,6],vista:9,vm:2,vmrun:7,vmware:3,vmx:7,vmx_path:7,volatil:[6,9],volatilityapi:9,volatilitymanag:9,wait:1,want:[6,9],we:9,well:[6,9],were:11,what:1,when:[6,7,9,13],where:[6,7],whether:[1,9],which:[2,7,9],why:6,win7:9,window:[1,3,9,10,13],windowsscriptfil:9,winxp:9,wireshark:9,wmi:6,workstat:7,wrapper:9,write:[6,9,11],written:6,x86:9,x:[3,10],xl:9,xlsm:9,xlsx:9,xp:1,y:[],yarascan:9,yield:[6,9],you:[6,7,9],z0:9,za:9},titles:["agent package","analyzer package","auxiliary package","Welcome to Bold-Falcon\u2019s documentation!","lib package","lib.cuckoo package","lib.cuckoo.common package","machinery package","Bold-Falcon","processing package","\u6bd5\u65b9\u4e91\u6c99\u7bb1\uff08\u6076\u610f\u8f6f\u4ef6\u68c0\u6d4b\u5e73\u53f0\uff09","reporting package","&lt;no title&gt;","signatures package"],titleterms:{"\u4e3b\u8981\u66f4\u65b0\u5185\u5bb9":[3,10],"\u5f00\u6e90\u8d44\u6599":[3,10],"\u6076\u610f\u8f6f\u4ef6\u68c0\u6d4b\u5e73\u53f0":[3,10],"\u6bd5\u65b9\u4e91\u6c99\u7bb1":[3,10],"\u6e90\u7801\u5206\u6790":[3,10],"\u9879\u76ee\u7ed3\u6784\u66f4\u65b0":[3,10],"abstract":6,"static":9,agent:[0,3],analysisinfo:9,analyz:[1,3],auxiliari:[2,3],behavior:9,bold:[3,8],buffer:9,common:6,content:[0,1,2,4,5,6,7,9,11,13],creates_ex:13,cuckoo:[5,6],debug:9,document:3,droidmon:9,drop:9,dumptl:9,elasticsearch:11,falcon:[3,8],generic_metr:13,indic:3,jsondump:11,lib:[4,5,6],machineri:[3,7],memori:9,mitm:2,modul:[0,1,2,4,5,6,7,9,11,13],moloch:11,mongodb:11,network:9,packag:[0,1,2,4,5,6,7,9,11,13],process:[3,9],procmemori:9,report:[3,11],reporthtml:11,s:3,screenshot:9,servic:2,signatur:[3,13],sniffer:2,snort:9,string:9,submodul:[0,1,2,6,7,9,11,13],subpackag:[4,5],suricata:9,tabl:3,targetinfo:9,virtualbox:7,virustot:9,vmware:7,welcom:3}})