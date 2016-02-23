Search.setIndex({envversion:46,filenames:["architecture","comparisons","developer","ec2","filter-values","generated/janitor","generated/janitor.resources","generated/modules","index","overview","roadmap","s3"],objects:{"":{janitor:[5,0,0,"-"]},"janitor.actions":{ActionRegistry:[5,2,1,""],BaseAction:[5,2,1,""]},"janitor.actions.ActionRegistry":{factory:[5,3,1,""],parse:[5,3,1,""]},"janitor.actions.BaseAction":{executor_factory:[5,1,1,""],get_permissions:[5,3,1,""],log:[5,1,1,""],name:[5,1,1,""],permissions:[5,1,1,""],process:[5,3,1,""],validate:[5,3,1,""]},"janitor.cache":{FileCacheManager:[5,2,1,""],NullCache:[5,2,1,""],factory:[5,4,1,""]},"janitor.cache.FileCacheManager":{get:[5,3,1,""],load:[5,3,1,""],save:[5,3,1,""]},"janitor.cache.NullCache":{get:[5,3,1,""],load:[5,3,1,""],save:[5,3,1,""]},"janitor.cli":{main:[5,4,1,""],setup_parser:[5,4,1,""]},"janitor.commands":{identify:[5,4,1,""],report:[5,4,1,""],run:[5,4,1,""]},"janitor.credentials":{SessionFactory:[5,2,1,""],assumed_session:[5,4,1,""]},"janitor.ctx":{ExecutionContext:[5,2,1,""]},"janitor.ctx.ExecutionContext":{log_dir:[5,1,1,""]},"janitor.executor":{ExecutorRegistry:[5,2,1,""],MainThreadExecutor:[5,2,1,""],MainThreadFuture:[5,2,1,""],executor:[5,4,1,""]},"janitor.executor.MainThreadExecutor":{map:[5,3,1,""],submit:[5,3,1,""]},"janitor.executor.MainThreadFuture":{add_done_callback:[5,3,1,""],cancel:[5,3,1,""],cancelled:[5,3,1,""],done:[5,3,1,""],exception:[5,3,1,""],result:[5,3,1,""]},"janitor.filters":{AgeFilter:[5,2,1,""],And:[5,2,1,""],EventFilter:[5,2,1,""],Filter:[5,2,1,""],FilterRegistry:[5,2,1,""],FilterValidationError:[5,7,1,""],MarkedForOp:[5,2,1,""],Or:[5,2,1,""],ValueFilter:[5,2,1,""]},"janitor.filters.AgeFilter":{date_attribute:[5,1,1,""],get_resource_date:[5,3,1,""],threshold_date:[5,1,1,""],validate:[5,3,1,""]},"janitor.filters.EventFilter":{process:[5,3,1,""]},"janitor.filters.Filter":{executor_factory:[5,1,1,""],log:[5,1,1,""],name:[5,1,1,""],process:[5,3,1,""],validate:[5,3,1,""]},"janitor.filters.FilterRegistry":{factory:[5,3,1,""],parse:[5,3,1,""]},"janitor.filters.MarkedForOp":{current_date:[5,1,1,""],log:[5,1,1,""]},"janitor.filters.ValueFilter":{expr:[5,1,1,""],match:[5,3,1,""],op:[5,1,1,""],v:[5,1,1,""],validate:[5,3,1,""]},"janitor.mailer":{EmailFormatter:[5,2,1,""],MessageAddress:[5,2,1,""],MessageDB:[5,2,1,""],Worker:[5,2,1,""],send_data_message:[5,4,1,""],send_email_message:[5,4,1,""],setup_parser:[5,4,1,""]},"janitor.mailer.EmailFormatter":{format:[5,3,1,""]},"janitor.mailer.MessageAddress":{Email:[5,1,1,""],Lookup:[5,1,1,""],Topic:[5,1,1,""],address_resolver:[5,6,1,""]},"janitor.mailer.MessageDB":{add:[5,3,1,""],batches:[5,3,1,""],flush:[5,3,1,""]},"janitor.mailer.Worker":{run:[5,3,1,""]},"janitor.manager":{ResourceManager:[5,2,1,""]},"janitor.manager.ResourceManager":{filter_resources:[5,3,1,""],format_json:[5,3,1,""],get_resources:[5,3,1,""],resource_query:[5,3,1,""]},"janitor.mu":{CloudWatchEventSource:[5,2,1,""],Config:[5,2,1,""],LambdaFunction:[5,2,1,""],LambdaManager:[5,2,1,""],PolicyLambda:[5,2,1,""],PythonPackageArchive:[5,2,1,""],cloudtrail_handle:[5,4,1,""],ec2_instance_state_handle:[5,4,1,""],format_event:[5,4,1,""],maid_archive:[5,4,1,""],periodic_handle:[5,4,1,""],resource_exists:[5,4,1,""],resource_handle:[5,4,1,""],zinfo:[5,4,1,""]},"janitor.mu.CloudWatchEventSource":{ASG_EVENT_MAPPING:[5,1,1,""],add:[5,3,1,""],delta:[5,3,1,""],get:[5,3,1,""],pause:[5,3,1,""],remove:[5,3,1,""],render_event_pattern:[5,3,1,""],resume:[5,3,1,""],update:[5,3,1,""]},"janitor.mu.Config":{empty:[5,5,1,""]},"janitor.mu.LambdaFunction":{alias:[5,1,1,""],description:[5,1,1,""],get_archive:[5,3,1,""],get_events:[5,3,1,""],handler:[5,1,1,""],memory_size:[5,1,1,""],name:[5,1,1,""],role:[5,1,1,""],runtime:[5,1,1,""],timeout:[5,1,1,""]},"janitor.mu.LambdaManager":{get:[5,3,1,""],list_functions:[5,3,1,""],publish:[5,3,1,""],publish_alias:[5,3,1,""],remove:[5,3,1,""]},"janitor.mu.PolicyLambda":{description:[5,1,1,""],get_archive:[5,3,1,""],get_events:[5,3,1,""],handler:[5,1,1,""],memory_size:[5,1,1,""],name:[5,1,1,""],role:[5,1,1,""],runtime:[5,1,1,""],timeout:[5,1,1,""]},"janitor.mu.PythonPackageArchive":{add_contents:[5,3,1,""],close:[5,3,1,""],create:[5,3,1,""],filter_files:[5,3,1,""],get_bytes:[5,3,1,""],path:[5,1,1,""],remove:[5,3,1,""],size:[5,1,1,""]},"janitor.offhours":{OffHour:[5,2,1,""],OnHour:[5,2,1,""],Time:[5,2,1,""]},"janitor.offhours.OffHour":{get_sentinel_time:[5,3,1,""]},"janitor.offhours.OnHour":{get_sentinel_time:[5,3,1,""]},"janitor.offhours.Time":{get_local_tz:[5,3,1,""],get_sentinel_time:[5,3,1,""],get_tag_parts:[5,3,1,""],process_current_time:[5,3,1,""],process_terminate:[5,3,1,""]},"janitor.output":{CloudWatchLogOutput:[5,2,1,""],DirectoryOutput:[5,2,1,""],FSOutput:[5,2,1,""],LogOutput:[5,2,1,""],MetricsOutput:[5,2,1,""],NullMetricsOutput:[5,2,1,""],S3Output:[5,2,1,""],s3_join:[5,4,1,""]},"janitor.output.CloudWatchLogOutput":{get_handler:[5,3,1,""],log_format:[5,1,1,""]},"janitor.output.DirectoryOutput":{permissions:[5,1,1,""]},"janitor.output.FSOutput":{compress:[5,3,1,""],get_handler:[5,3,1,""],join:[5,6,1,""],select:[5,6,1,""]},"janitor.output.LogOutput":{get_handler:[5,3,1,""],join_log:[5,3,1,""],leave_log:[5,3,1,""],log_format:[5,1,1,""]},"janitor.output.MetricsOutput":{flush:[5,3,1,""],permissions:[5,1,1,""],put_metric:[5,3,1,""],select:[5,6,1,""]},"janitor.output.NullMetricsOutput":{format_metric:[5,3,1,""],permissions:[5,1,1,""]},"janitor.output.S3Output":{join:[5,6,1,""],permissions:[5,1,1,""],upload:[5,3,1,""]},"janitor.policy":{Policy:[5,2,1,""],PolicyCollection:[5,2,1,""],load:[5,4,1,""]},"janitor.policy.Policy":{get_resource_manager:[5,3,1,""],is_lambda:[5,1,1,""],log:[5,1,1,""],name:[5,1,1,""],poll:[5,3,1,""],provision:[5,3,1,""],push:[5,3,1,""],resource_type:[5,1,1,""],run:[5,3,1,""]},"janitor.policy.PolicyCollection":{policies:[5,3,1,""]},"janitor.registry":{PluginRegistry:[5,2,1,""]},"janitor.registry.PluginRegistry":{get:[5,3,1,""],keys:[5,3,1,""],load_plugins:[5,3,1,""],register:[5,3,1,""],unregister:[5,3,1,""]},"janitor.report":{ASGFormatter:[5,2,1,""],EC2Formatter:[5,2,1,""],Formatter:[5,2,1,""],fs_record_set:[5,4,1,""],get_records:[5,4,1,""],record_set:[5,4,1,""],report:[5,4,1,""]},"janitor.report.ASGFormatter":{csv_fields:[5,3,1,""]},"janitor.report.EC2Formatter":{csv_fields:[5,3,1,""],filter_record:[5,3,1,""]},"janitor.report.Formatter":{csv_fields:[5,3,1,""],extract_csv:[5,3,1,""],filter_record:[5,3,1,""],headers:[5,3,1,""],to_csv:[5,3,1,""],uniq_by_id:[5,3,1,""]},"janitor.resources":{ami:[6,0,0,"-"],asg:[6,0,0,"-"],cfn:[6,0,0,"-"],ebs:[6,0,0,"-"],ec2:[6,0,0,"-"],elb:[6,0,0,"-"],kms:[6,0,0,"-"],rds:[6,0,0,"-"],s3:[6,0,0,"-"]},"janitor.resources.ami":{AMI:[6,2,1,""],Deregister:[6,2,1,""],ImageAgeFilter:[6,2,1,""]},"janitor.resources.ami.AMI":{resources:[6,3,1,""]},"janitor.resources.ami.Deregister":{process:[6,3,1,""],process_image:[6,3,1,""]},"janitor.resources.ami.ImageAgeFilter":{date_attribute:[6,1,1,""]},"janitor.resources.asg":{ASG:[6,2,1,""],Delete:[6,2,1,""],MarkForOp:[6,2,1,""],PropagateTags:[6,2,1,""],RenameTag:[6,2,1,""],Resume:[6,2,1,""],Suspend:[6,2,1,""],Tag:[6,2,1,""],update_tags:[6,4,1,""]},"janitor.resources.asg.ASG":{resources:[6,3,1,""]},"janitor.resources.asg.Delete":{process:[6,3,1,""],process_asg:[6,3,1,""]},"janitor.resources.asg.MarkForOp":{process:[6,3,1,""]},"janitor.resources.asg.PropagateTags":{get_instance_map:[6,3,1,""],process:[6,3,1,""],process_asg:[6,3,1,""],prune_instance_tags:[6,3,1,""],validate:[6,3,1,""]},"janitor.resources.asg.RenameTag":{process:[6,3,1,""],process_asg:[6,3,1,""],propogate_instance_tag:[6,3,1,""]},"janitor.resources.asg.Resume":{LoadBalancerTagKey:[6,1,1,""],process:[6,3,1,""],process_asg:[6,3,1,""]},"janitor.resources.asg.Suspend":{LoadBalancerTagKey:[6,1,1,""],process:[6,3,1,""],process_asg:[6,3,1,""]},"janitor.resources.asg.Tag":{process:[6,3,1,""],process_asg:[6,3,1,""]},"janitor.resources.cfn":{CloudFormation:[6,2,1,""],Delete:[6,2,1,""]},"janitor.resources.cfn.CloudFormation":{resources:[6,3,1,""]},"janitor.resources.cfn.Delete":{process:[6,3,1,""],process_stacks:[6,3,1,""]},"janitor.resources.ebs":{AttachedInstanceFilter:[6,2,1,""],CopyInstanceTags:[6,2,1,""],Delete:[6,2,1,""],EBS:[6,2,1,""],EncryptInstanceVolumes:[6,2,1,""],MarkForOp:[6,2,1,""],UnMark:[6,2,1,""]},"janitor.resources.ebs.AttachedInstanceFilter":{get_instance_mapping:[6,3,1,""],process:[6,3,1,""]},"janitor.resources.ebs.CopyInstanceTags":{get_volume_tags:[6,3,1,""],process:[6,3,1,""],process_volume:[6,3,1,""]},"janitor.resources.ebs.Delete":{process:[6,3,1,""],process_volume:[6,3,1,""]},"janitor.resources.ebs.EBS":{resources:[6,3,1,""]},"janitor.resources.ebs.EncryptInstanceVolumes":{create_encrypted_volume:[6,3,1,""],get_encryption_key:[6,3,1,""],process:[6,3,1,""],process_volume:[6,3,1,""],validate:[6,3,1,""],wait_on_resource:[6,3,1,""]},"janitor.resources.ebs.MarkForOp":{process:[6,3,1,""],process_volume_set:[6,3,1,""],validate:[6,3,1,""]},"janitor.resources.ebs.UnMark":{process:[6,3,1,""],process_volume_set:[6,3,1,""]},"janitor.resources.ec2":{AttachedVolume:[6,2,1,""],EC2:[6,2,1,""],InstanceAgeFilter:[6,2,1,""],InstanceOffHour:[6,2,1,""],InstanceOnHour:[6,2,1,""],Mark:[6,2,1,""],MarkForOp:[6,2,1,""],QueryFilter:[6,2,1,""],Start:[6,2,1,""],StateTransitionFilter:[6,2,1,""],Stop:[6,2,1,""],TagCountFilter:[6,2,1,""],Terminate:[6,2,1,""],Unmark:[6,2,1,""]},"janitor.resources.ec2.AttachedVolume":{get_volume_mapping:[6,3,1,""],process:[6,3,1,""]},"janitor.resources.ec2.EC2":{client:[6,1,1,""],format_json:[6,3,1,""],get_resources:[6,3,1,""],resource_query:[6,3,1,""],resources:[6,3,1,""]},"janitor.resources.ec2.InstanceAgeFilter":{date_attribute:[6,1,1,""]},"janitor.resources.ec2.InstanceOffHour":{process:[6,3,1,""],valid_origin_states:[6,1,1,""]},"janitor.resources.ec2.InstanceOnHour":{process:[6,3,1,""],valid_origin_states:[6,1,1,""]},"janitor.resources.ec2.Mark":{process:[6,3,1,""]},"janitor.resources.ec2.MarkForOp":{process:[6,3,1,""]},"janitor.resources.ec2.QueryFilter":{parse:[6,5,1,""],query:[6,3,1,""],validate:[6,3,1,""]},"janitor.resources.ec2.Start":{process:[6,3,1,""],valid_origin_states:[6,1,1,""]},"janitor.resources.ec2.StateTransitionFilter":{filter_instance_state:[6,3,1,""],valid_origin_states:[6,1,1,""]},"janitor.resources.ec2.Stop":{process:[6,3,1,""],valid_origin_states:[6,1,1,""]},"janitor.resources.ec2.Terminate":{disable_deletion_protection:[6,3,1,""],process:[6,3,1,""],valid_origin_states:[6,1,1,""]},"janitor.resources.ec2.Unmark":{process:[6,3,1,""]},"janitor.resources.elb":{ELB:[6,2,1,""]},"janitor.resources.elb.ELB":{resources:[6,3,1,""]},"janitor.resources.kms":{GrantCount:[6,2,1,""],KMS:[6,2,1,""]},"janitor.resources.kms.GrantCount":{process:[6,3,1,""],process_key:[6,3,1,""]},"janitor.resources.kms.KMS":{resources:[6,3,1,""]},"janitor.resources.rds":{RDS:[6,2,1,""]},"janitor.resources.rds.RDS":{resources:[6,3,1,""]},"janitor.resources.s3":{BucketActionBase:[6,2,1,""],BucketScanLog:[6,2,1,""],EncryptExtantKeys:[6,2,1,""],EncryptedPrefix:[6,2,1,""],EncryptionRequiredPolicy:[6,2,1,""],MissingPolicyStatementFilter:[6,2,1,""],NoGlobalGrants:[6,2,1,""],NoOp:[6,2,1,""],S3:[6,2,1,""],ScanBucket:[6,2,1,""],assemble_bucket:[6,4,1,""],bucket_client:[6,4,1,""],restore_complete:[6,4,1,""]},"janitor.resources.s3.BucketActionBase":{get_permissions:[6,3,1,""]},"janitor.resources.s3.BucketScanLog":{add:[6,3,1,""],path:[6,1,1,""]},"janitor.resources.s3.EncryptExtantKeys":{permissions:[6,1,1,""],process:[6,3,1,""],process_chunk:[6,3,1,""],process_key:[6,3,1,""],process_version:[6,3,1,""]},"janitor.resources.s3.EncryptedPrefix":{permissions:[6,1,1,""],process:[6,3,1,""],process_bucket:[6,3,1,""]},"janitor.resources.s3.EncryptionRequiredPolicy":{permissions:[6,1,1,""],process:[6,3,1,""],process_bucket:[6,3,1,""]},"janitor.resources.s3.MissingPolicyStatementFilter":{process:[6,3,1,""],process_bucket:[6,3,1,""]},"janitor.resources.s3.NoGlobalGrants":{AUTH_ALL:[6,1,1,""],GLOBAL_ALL:[6,1,1,""],process:[6,3,1,""],process_bucket:[6,3,1,""]},"janitor.resources.s3.NoOp":{process:[6,3,1,""]},"janitor.resources.s3.S3":{executor_factory:[6,1,1,""],get_resources:[6,3,1,""],resources:[6,3,1,""]},"janitor.resources.s3.ScanBucket":{bucket_ops:[6,1,1,""],get_bucket_op:[6,3,1,""],get_bucket_style:[6,3,1,""],permissions:[6,1,1,""],process:[6,3,1,""],process_bucket:[6,3,1,""],process_chunk:[6,3,1,""],process_key:[6,3,1,""],process_version:[6,3,1,""]},"janitor.sqsexec":{MessageIterator:[5,2,1,""],SQSExecutor:[5,2,1,""],SQSFuture:[5,2,1,""],SQSWorker:[5,2,1,""],named:[5,4,1,""],resolve:[5,4,1,""]},"janitor.sqsexec.MessageIterator":{ack:[5,3,1,""],msg_attributes:[5,1,1,""],next:[5,3,1,""]},"janitor.sqsexec.SQSExecutor":{gather:[5,3,1,""],submit:[5,3,1,""]},"janitor.sqsexec.SQSFuture":{marker:[5,1,1,""]},"janitor.sqsexec.SQSWorker":{process_message:[5,3,1,""],run:[5,3,1,""],stop:[5,3,1,""],stopped:[5,1,1,""]},"janitor.utils":{DateTimeEncoder:[5,2,1,""],annotation:[5,4,1,""],chunks:[5,4,1,""],dumps:[5,4,1,""],loads:[5,4,1,""],local_session:[5,4,1,""],parse_s3:[5,4,1,""],query_instances:[5,4,1,""],set_annotation:[5,4,1,""]},"janitor.utils.DateTimeEncoder":{"default":[5,3,1,""]},janitor:{actions:[5,0,0,"-"],cache:[5,0,0,"-"],cli:[5,0,0,"-"],commands:[5,0,0,"-"],credentials:[5,0,0,"-"],ctx:[5,0,0,"-"],executor:[5,0,0,"-"],filters:[5,0,0,"-"],mailer:[5,0,0,"-"],manager:[5,0,0,"-"],mu:[5,0,0,"-"],offhours:[5,0,0,"-"],output:[5,0,0,"-"],policy:[5,0,0,"-"],registry:[5,0,0,"-"],report:[5,0,0,"-"],resources:[6,0,0,"-"],sqsexec:[5,0,0,"-"],utils:[5,0,0,"-"],version:[5,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","attribute","Python attribute"],"2":["py","class","Python class"],"3":["py","method","Python method"],"4":["py","function","Python function"],"5":["py","classmethod","Python class method"],"6":["py","staticmethod","Python static method"],"7":["py","exception","Python exception"]},objtypes:{"0":"py:module","1":"py:attribute","2":"py:class","3":"py:method","4":"py:function","5":"py:classmethod","6":"py:staticmethod","7":"py:exception"},terms:{"15m":5,"45m":5,"_base":5,"abstract":[5,10],"break":[5,6],"case":8,"class":[5,6],"default":[0,3,5,11],"function":[5,9,10],"import":0,"new":[6,9],"public":[5,6],"return":[5,6],"static":5,"transient":6,"true":[5,6],"try":[5,6],"while":6,abil:5,abl:5,absent:[3,5],access:[10,11],account:[5,9],ack:5,acl:[6,11],across:[0,5,9],action:0,actionregistri:5,activ:[2,5,9],actual:6,add:[5,6,11],add_cont:5,add_done_callback:5,addit:[2,9],addition:[5,6],additon:6,address:5,address_resolv:5,aes256:11,after:[5,9],against:[0,5],agefilt:[5,6],alert:[0,9],alia:[5,6],alias:5,all:[3,5,6,9,11],allow:[3,5,9,11],allow_nan:5,allus:6,along:5,alreadi:[3,5],also:[2,5,6],amazon:5,amazonaw:[5,6],america:5,ami:5,ani:[4,5,6],annot:5,ansibl:9,answer:9,anymor:6,aoo:9,api:[0,5,6,8,9],app:9,appear:5,appli:[5,11],applic:[5,6,9],appropri:5,aprori:6,apt:2,archiv:5,aren:5,arg:[5,6],aris:9,arn:[5,6],around:[5,6,9],asctim:5,asg:5,asg_event_map:5,asgformatt:5,asgloadbalanc:6,asid:11,assembl:6,assemble_bucket:6,assum:[5,6],assume_rol:5,assumed_sess:5,asv:3,atm:5,attach:6,attachedinstancefilt:6,attachedvolum:6,attribut:[5,6],audit:[5,11],aurora:6,auth_al:6,authent:5,authenticatedus:6,author:6,automat:[3,5,6,9],autosc:0,autoscal:[6,9],autoscalegroup:[0,6],avail:[2,5,6],avoid:5,azur:9,balanc:6,barrum:3,base64:5,baseact:[5,6],basic:5,batch:[5,6],becam:5,becaus:9,befor:5,behavior:0,below:5,best:5,beta:5,better:5,bin:2,block:11,bodi:5,both:[5,9],bother:9,boto3:5,botocor:5,bounc:5,bound:5,brew:2,brief:11,broken:5,browser:2,bson:0,bucket:0,bucket_cli:6,bucket_nam:6,bucket_op:6,bucketactionbas:6,bucketscanlog:6,buffer:[5,6],bulk:[5,6],cach:0,call:[5,6],can:[0,2,5,6,9,11],cancel:5,candid:6,capabl:[5,8],capitalon:[2,9,11],captur:5,card:9,caution:3,central:[5,9],cfn:5,cft:9,chang:[5,6],channel:0,check:[5,6],check_circular:5,choic:5,chunk:5,cipher:9,classmethod:[5,6],click:9,client:[5,6],clone:2,close:[5,6],closur:5,cloud:[2,4],cloudform:[6,9],cloudhealth:9,cloudtrail:5,cloudtrail_handl:5,cloudwatch:[5,9,10],cloudwatcheventsourc:5,cloudwatchlogoutput:5,cluster:6,cmdb:[5,9,10],cmdbenviron:3,coaf:9,coalesc:5,code:[5,8],collect:6,com:[2,5,6],command:2,commerci:9,commun:9,compar:6,complet:0,complianc:[5,9],compliant:5,compound:9,compress:5,con:8,concurr:5,config:0,configur:[0,2,3],connect:5,consid:0,consider:9,consist:9,console_script:5,construct:[5,6,9],consumpt:9,contact:5,contents_kei:6,context:[5,10],contribut:[5,9],control:9,copi:6,copyinstancetag:6,core:5,corpor:5,correct:3,correctli:9,correspond:6,cost:3,count:[0,6],cours:5,cover:5,coverag:[2,5],creat:[5,6],create_encrypted_volum:6,createbucket:5,creation:6,creationd:6,cron:[0,5,9],crud:5,crypto:11,csv:5,csv_field:5,current:[5,9],current_d:5,custom:5,cwe:5,dai:[3,5,9],daili:9,dashboard:[5,9],data:0,databas:[5,6],date:[3,5],date_attribut:[5,6],datetim:0,datetimeencod:5,daylight:5,deadlin:9,defacto:5,default_tz:5,defin:[0,5,9],deleg:9,delet:[0,5,6,9],deletebucket:5,deleteobjectvers:6,deliveri:[5,6],delta:5,depend:2,deploi:[2,9],deploy:9,derefer:6,deregist:6,describ:5,descript:5,dest:5,destin:6,destination_tag:6,detach:6,detail:[5,6,9],determin:[5,6,11],dev:[0,2,5,9],diagram:0,dict:5,differ:[5,6],differenti:6,digit:[5,9],dimens:5,direct:5,directli:5,directori:5,directoryoutput:5,disabl:5,disable_deletion_protect:6,disk:6,dispatch:5,distinguish:5,distribut:[0,5],document:[0,6],doe:[5,6],done:[5,9],downtim:5,dozen:9,dump:5,each:[5,6,9],easi:[5,9],easier:9,ec2:0,ec2_instance_state_handl:5,ec2formatt:5,edit:9,effect:[5,6],either:[0,5,11],elb:[0,5],element:[0,6,10],emailformatt:5,embed:5,empti:[5,6],enabl:5,encod:5,encrypt:[0,5,6,9],encryptedprefix:6,encryptextantkei:6,encryptinstancevolum:6,encryptionrequiredpolici:6,end:6,enforc:[5,9],engin:[5,9],enhanc:9,ensur:[2,5,11],ensure_ascii:5,enterpris:9,entir:5,entry_point:5,environ:[5,9],error:[0,5,9],est:5,etc:[0,5,9],even:5,eventfilt:5,eventnam:5,eventsourc:5,everi:[5,6],evolv:5,evt:5,exampl:0,except:5,exchang:0,exec:[5,10],executioncontext:5,executor_factori:[5,6],executorregistri:5,exhaust:9,exist:6,expos:[5,6],expr:5,express:[0,5,6],extant:[3,5,6],extend:9,extern:[5,9],extract:5,extract_csv:5,extran:5,factori:5,failur:5,fals:[5,6],fashion:5,featur:9,feder:9,fetch:5,few:5,file:[0,5,6,9],filecachemanag:5,filter:0,filter_ec2:5,filter_fil:5,filter_instance_st:6,filter_record:5,filter_resourc:5,filterregistri:5,filtervalidationerror:5,find:6,find_packag:5,first:[2,5,9,11],flexibl:[4,9],flush:5,fname:5,follow:[2,9],foobar:3,forc:6,format:[0,5,6],format_ev:5,format_json:[5,6],format_metr:5,formatt:5,frequenc:9,from:[2,5,6,9,10],fs_record_set:5,fsoutput:5,fte:9,full:[6,9],func:5,func_data:5,func_nam:5,futur:5,gap:5,garbag:6,gather:5,gce:9,gener:[0,2,5,6,9,11],geographi:5,get:[2,5],get_arch:5,get_bucket_op:6,get_bucket_styl:6,get_byt:5,get_encryption_kei:6,get_ev:5,get_handl:5,get_instance_map:6,get_local_tz:5,get_permiss:[5,6],get_record:5,get_resourc:[5,6],get_resource_d:5,get_resource_manag:5,get_sentinel_tim:5,get_tag_part:5,get_volume_map:6,get_volume_tag:6,getbucketpolici:6,getobject:6,getus:6,git:[0,2],github:2,give:[5,6],given:[0,5,6,9],global:[6,8],global_al:6,gnome:2,gnomeish:2,goo:[5,6],grant:[6,8,9],grantcount:6,greatli:9,group:[5,6,9],gui:9,gzip:5,hand:9,handl:5,handler:5,hard:5,have:[2,5,9],header:5,health:8,here:[3,5,11],highli:[6,9],hold:9,hood:5,horizont:9,hour:[5,9],how:[0,9],howev:5,html:2,http:[2,5,6],iam:[0,5,6],iana:5,id_field:5,identif:9,identifi:5,iii:5,imag:[6,9],imageagefilt:6,imo:5,implement:5,impli:5,includ:[5,6,9],inconsist:[6,9],incorrectli:9,incur:3,indent:5,index:[2,8],individu:6,infinit:6,info:[5,6],inform:[5,6,9],infrastructur:5,innat:5,insecur:11,instanc:[0,3,5,6,9,11],instance_id:6,instanceagefilt:6,instanceid:5,instanceoffhour:6,instanceonhour:6,instancesset:5,instead:[5,9],intend:5,interact:5,interest:0,intern:[5,9],interpret:5,interv:5,invok:5,is_lambda:5,item:[5,6],iter:[5,6],itself:[2,5],januari:9,jmespath:[0,5,6],join:5,join_log:5,json:[0,5,6],jsonencod:5,just:[2,5],kappa:5,kdc:2,kei:[5,6,9],key_id:6,key_prefix:5,key_processor:6,keyspac:6,keyword:5,klass:5,know:6,kwarg:5,lambda:0,lambda_context:5,lambda_ctx:5,lambdafunct:5,lambdamanag:5,languag:[0,4,9],last:6,late:9,launch:5,launchtim:[3,6],ldap:9,leave_log:5,length:5,let:6,letter:5,level:[0,5],levelnam:5,lib_filt:5,librari:2,like:[0,5],limit:5,list:[5,6],list_funct:5,list_object:6,list_object_vers:6,list_of_serialized_kei:6,listbucket:6,load:[5,6],load_plugin:5,loadbalancertagkei:6,lob:9,local:[0,5,9],local_sess:5,log:[5,6,9],log_dir:[5,6],log_format:5,logger:5,logic:5,logoutput:5,look:5,lookup:5,loos:5,los_angel:5,magic:5,maid:[2,4],maid_arch:5,maid_cmdb:5,maid_downtim:5,maid_offhour:5,maid_polici:5,maid_statu:3,main:5,mainthreadexecutor:5,mainthreadfutur:5,major:5,make:2,manag:0,mandatori:5,map:5,map_queu:5,markedforop:5,marker:5,markforop:6,match:[3,5],mean:5,mechan:[5,11],memori:6,memory_s:5,merg:11,messageaddress:5,messagedb:5,messageiter:5,metadata:6,method:5,metric:[0,5,9,10],metrics_en:5,metricsoutput:5,miss:[3,5,6],missingpolicystatementfilt:6,mock:2,modifi:[0,5],moment:5,mongodb:0,month:5,more:6,mostli:6,move:[6,9],msg:[3,6],msg_attribut:5,much:5,multi:6,multipl:5,multistep:6,must:5,name:[3,5,6,11],namespac:5,need:[2,5,6,9],netflix:5,network:5,never:[5,6,9],new_t:6,next:5,nice:5,night:5,noglobalgr:6,non:[5,6,11],none:[5,6],noop:6,nosetest:2,note:5,notif:[0,5],notifi:5,now:2,nullcach:5,nullmetricsoutput:5,number:5,obj:5,object:[5,6,9,11],off:[5,6],offer:6,offic:9,offload:6,old:[3,6],older:[3,5,6,9],onetim:9,onhour:[5,6],onli:[5,11],op_nam:6,open:[2,5],opensourc:9,operation:5,opportun:5,oppos:5,opt:5,option:0,org:[5,9],osx:2,other:[5,6,9],otherwis:[3,6],our:5,ourselv:9,out:[5,6],outbound:[5,9,10],output:0,output_fh:5,output_path:5,over:[0,5,9],overrid:5,overtim:5,overview:8,own:9,owner:5,ownercontact:[3,5],owneremail:5,packag:2,page:8,param:6,pars:[5,6],parse_s3:5,part:5,parti:9,partial:6,particular:[0,5,9],path:[5,6],pattern:5,paus:5,pend:[5,6],per:5,period:5,periodic_handl:5,perm:5,permiss:[5,6,11],perspect:5,pickup:5,pip:2,place:[6,9],pluggabl:5,plugin:[5,10],plugin_typ:5,pluginregistri:5,point:9,poke:5,policy_collect:5,policy_nam:5,policycollect:[5,10],policylambda:5,poll:[5,9],post:5,power:5,practic:5,pre:5,prefer:5,preferenti:0,prefix:5,present:6,presum:3,prevent:5,pro:8,problem:5,process:[5,6,9],process_asg:6,process_bucket:6,process_chunk:6,process_current_tim:5,process_imag:6,process_kei:6,process_messag:5,process_stack:6,process_termin:5,process_vers:6,process_volum:6,process_volume_set:6,product:[5,9],profil:[5,6,10],project:9,propag:6,propagatetag:6,properli:2,propogate_instance_tag:6,protect:6,provid:[0,4,5,6,9],provis:5,proxi:2,prune_instance_tag:6,publicli:6,publiclyaccess:6,publish:5,publish_alia:5,purpos:11,push:[5,9],put_metr:5,putbucketpolici:6,putmetricdata:5,putobject:[5,6],python2:5,python:[2,5],pythonpackagearch:5,queri:[4,5,6,9],query_inst:5,queryfilt:6,question:[5,9],queue:5,queue_url:5,quickli:5,rang:5,rate:5,rather:[5,9],raw_output_fh:5,read:5,real:[5,9],realtim:5,reason:5,reattach:6,receiv:5,recipi:5,recommend:2,reconstitu:5,record:0,record_set:5,redi:0,reduc:5,reduce_queu:5,refer:5,referenc:5,region:[5,10],regist:5,rehydr:9,reliabili:6,remedi:[5,6,8,9],remov:[5,6],renam:[3,6],renametag:6,render_event_pattern:5,renew:5,replic:6,report:[2,3],repositori:2,repres:[5,6],represent:[0,5,6],requireencryptedputobject:5,resolv:5,resourc:[0,3,4,5],resource_exist:5,resource_handl:5,resource_id:[5,6],resource_queri:[5,6],resource_typ:5,resourcemanag:[5,6],respect:5,respons:9,responseel:5,restart:[3,6],restor:6,restore_complet:6,restoreobject:6,result:[5,6,9],resum:[5,6],retail:9,retriev:[0,5],revers:5,richer:5,risk:9,roadmap:8,role:[5,6],role_arn:5,rule:[5,9],rule_nam:5,run:0,runinst:5,runtim:5,s3_asset_path:5,s3_join:5,s3_path:5,s3_uri:5,s3output:5,saa:5,sai:5,same:5,sandbox:2,save:5,scale:0,scan:[6,9,11],scanbucket:6,scatter:5,schedul:5,schema:10,script:9,search:8,second:5,see:[3,6],select:5,self:5,semant:6,send:5,send_data_messag:5,send_email_messag:5,sent:5,separ:[5,6],sequenc:0,sequence_id:5,ser:5,serial:0,server:[5,9],serverless:5,servic:5,session:[5,6],session_factori:5,session_nam:5,sessionfactori:5,set:[0,3,5,6,9],set_annot:5,setup:[2,5,6],setup_pars:5,sever:[2,6,9],should:[2,5,6],show:0,side:5,signific:5,silli:5,simpl:5,simpli:5,simplifi:[0,6,9],sinc:5,singl:5,size:5,skip:5,skipkei:5,small:5,smtp:5,snapshot:[5,6],some:[0,5],someth:5,sort_kei:5,sourc:[2,5,6,9],spec:[5,10],specif:[0,3,5,9],specifi:[0,5,9],sqsexecutor:5,sqsfutur:5,sqsworker:5,src:5,src_filter:5,src_path:5,stack:6,standard:[3,6],start:0,start_dat:5,state:[0,3,5,6],stateless:[0,9],statement:[5,6,11],statement_id:5,statetransitionfilt:6,statu:5,step:6,stop:0,storageencrypt:6,store:[5,6],stream:5,string:5,style:5,subclass:5,subject:5,submit:5,subscrib:5,subset:[0,5,9],success:5,sudo:2,suit:5,suitabl:[5,6],summari:9,superior:9,support:0,suspend:[0,6],syntax:5,system:[2,5],tag:[0,3],tag_kei:6,tag_map:5,tag_set:6,tagcountfilt:6,take:[0,5,9],target:[5,9],teach:8,team:9,techop:9,temp:5,text:9,tgt:5,than:[3,5,9],thei:[5,6,11],them:[5,6,11],thi:[0,2,3,5,6,9,11],third:9,those:[0,3,5],thread:5,threadpoolexecutor:[5,6],threshold_d:5,time:[0,5,6,9],timeout:5,timezon:5,to_csv:5,todo:0,topic:5,total:5,toward:5,track:9,trail:[5,10],transpar:9,trim:6,turn:[5,6],two:5,txt:2,type:[0,3,5,6,9],typic:[0,5],tzh9q5:6,unclear:5,under:[5,9],underli:5,unencrypt:[6,11],unifi:9,uniq_by_id:5,unit:[2,5],unmark:6,unregist:5,unspecifi:[3,5],unstructur:5,unsuccess:5,unus:6,updat:[5,9],update_tag:6,upload:5,url:5,user:[5,6,9],utf:5,valid:[0,5,6,10],valid_origin_st:6,valu:[0,3],valuefilt:[5,6],variabl:9,verb:0,via:[0,5,9],viabl:5,view:2,virtualdev:2,virtualenv:[2,5],virtualenv_dir:5,visibl:9,visual:5,vocabulari:[0,9],vol_set:6,volum:[5,6,9],vpc:5,wai:5,wait:6,wait_on_resourc:6,want:5,wast:9,week:5,weekend:5,well:[0,6],when:[5,6],which:[5,6],wider:5,window:5,within:[5,6],without:5,work:5,workaround:5,worker:[0,5],would:[5,9],write:6,writestr:5,wrt:9,www:5,x3omq4:5,xyz:5,yaml:[0,5,10,11],you:2,your:2,zinfo:5,zip:5,zipfil:5,zone:5},titles:["Architecture","Comparisons","Developer Install","EC2 Policy Definition","Value Filters","janitor package","janitor.resources package","janitor","Welcome to Cloud Maid&#8217;s documentation!","Overview","Roadmap","S3 Policies"],titleterms:{"case":[9,11],action:[3,5,11],ami:6,api:11,architectur:0,asg:6,base:5,bucket:[5,11],cach:5,capabl:9,cfn:6,cli:5,cloud:[5,8],cloudmaid:5,code:10,command:5,comparison:1,con:9,config:5,configur:5,content:[5,6],credenti:5,ctx:5,data:5,definit:[0,3],design:0,develop:[2,11],document:8,ec2:[3,6],elb:6,email:5,encrypt:11,event:5,exampl:[3,5,6],execut:0,executor:5,extant:11,filter:[3,4,5],global:11,goal:0,grant:11,health:10,indic:8,instal:2,integr:5,janitor:[1,5,6,7],kei:11,lambda:5,linux:2,locat:5,mac:2,maid:[5,8],mailer:5,manag:[5,6],mark:3,messag:5,mode:5,model:0,modul:[5,6],monkei:1,note:6,offhour:5,oper:0,option:5,output:5,overview:9,packag:[5,6],polici:[0,3,5,6,11],pro:9,propos:5,record:5,registri:5,relai:5,remedi:11,report:5,requir:2,resourc:6,roadmap:10,run:2,secur:1,sqsexec:5,start:3,stop:3,structur:5,submodul:[5,6],subpackag:5,support:5,tabl:8,tag:5,teach:11,term:0,termin:3,test:2,todo:[5,6,10],tool:5,usag:5,util:5,valu:4,version:5,watch:5,welcom:8,yet:0}})