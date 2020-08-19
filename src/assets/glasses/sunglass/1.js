import React from 'react';
import { connect } from 'react-redux';

const SVG = ({glasses}) => (
  <svg width="600" height="300" viewBox="0 0 600 300" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M119.263 76H127.476V76.4563L138.428 76.9126V77.3689L144.36 77.8253V78.2816H146.642V78.7379H148.923V79.1942H151.205V79.6505H153.03V80.1068L160.331 81.4758V81.9321H161.7V82.3884H163.069V82.8447H164.894V83.3011H166.263V83.7574L171.739 85.1263L172.652 86.0389L175.389 86.4953V86.9516L177.671 87.4079L178.584 88.3205H179.953L180.865 89.2332H182.234V89.6895H183.147V90.1458H184.059L184.972 91.0584H186.341V91.5147H187.254V91.9711H188.166V92.4274H189.079V92.8837H189.992V93.34L194.555 95.1653V95.6216H195.924V96.0779H196.836L197.749 96.9905H199.118V97.4468H200.487V97.9032H202.768V98.3595H205.05V98.8158H210.069V99.2721H220.108V99.7284H228.322V100.185L240.643 99.7284V99.2721H242.468V98.8158L247.944 97.4468L248.856 96.5342L251.594 96.0779L252.507 95.1653H253.876V94.7089H255.245V94.2526H256.614V93.7963H257.983V93.34H259.352V92.8837H261.177V92.4274H262.546V91.9711H264.371V91.5147H265.74V91.0584H267.565V90.6021L273.041 89.6895V89.2332H275.323V88.7768H277.604V88.3205H279.886V87.8642H282.167V87.4079L291.294 86.4953V86.0389L300.42 85.5826L300.876 93.7963V94.2526H293.575V94.7089H289.012V95.1653H285.362V95.6216L279.429 96.0779V96.5342H277.148V96.9905L273.497 97.4468V97.9032H272.128V98.3595L266.653 99.7284V100.185H265.74L264.827 101.097H263.458V101.554L261.633 102.01L261.177 102.923L259.352 103.379L257.526 105.204H256.614L254.788 107.486H253.876L252.963 108.398V109.311L251.138 110.68V111.593L249.313 113.418V114.331H248.856V115.243L247.944 116.156L247.487 118.894H247.031V120.719H246.575L246.118 127.107H246.575V130.302H247.031L247.487 133.039H247.944V133.952H248.4L250.225 138.515L251.138 138.972V140.341H251.594L252.051 142.622H252.507L252.963 146.729H253.419V149.923H253.876V153.117H254.332V155.855H254.788V158.593H255.245V160.875H255.701V163.156H256.157L257.07 168.632H257.526L258.895 174.108L259.808 175.021V176.389L260.721 177.302V178.671H261.177L263.002 183.234L263.915 183.691L264.371 185.516L265.284 185.972V186.885L266.196 187.341L267.109 189.623L268.478 190.535V191.448L277.604 200.574H278.517L279.886 202.399H280.798L281.255 203.312H282.167L283.993 205.137L286.731 206.05L287.187 206.963H288.099V207.419H289.012L289.925 208.332H291.294V208.788H292.206L293.119 209.701H294.488L295.401 210.613L300.876 211.982V212.438H302.702V212.895H304.527V213.351H306.808V213.807H309.09V214.264H312.741V214.72H326.43V214.264H329.624V213.807H332.362V213.351L336.469 212.895V212.438L340.576 211.526V211.069H341.488L342.401 210.157H343.77V209.701L347.421 208.332L347.877 207.419L349.702 206.963L350.158 206.05H351.071L351.527 205.137L353.809 204.225L354.722 202.856H355.634L357.916 200.118H358.828L362.023 196.924V196.011L364.76 193.729V192.817L366.129 191.904V190.992L367.498 190.079V189.166L368.411 188.71L368.867 186.885L370.693 185.059V184.147H371.149V183.234H371.605V182.322H372.062V181.409H372.518V180.496H372.974V179.584H373.431V178.671H373.887V177.758L374.799 176.846V175.477H375.256V174.564L376.168 173.652V172.283H376.625V170.914L377.537 170.001V168.632H377.994V167.263H378.45V165.438H378.906V164.069H379.363V162.244H379.819V160.875H380.275V158.593H380.732L381.188 154.486H381.644V151.748H382.1V148.554H382.557L383.013 130.302H382.557V126.651H382.1V124.369H381.644L381.188 120.719H380.732V119.35L379.819 118.437V117.068H379.363L378.45 114.331L377.537 113.874V112.962L376.168 112.049V111.136L372.974 107.942H372.062L371.149 106.573H370.236L368.411 104.748H367.498V104.292H366.586V103.835H365.673V103.379H364.76L363.848 102.466H362.479L361.566 101.554H360.197V101.097H358.828V100.641H357.459V100.185H356.091V99.7284H354.722V99.2721L347.421 97.9032V97.4468L342.401 96.9905V96.5342H340.119V96.0779H336.925V95.6216H333.731V95.1653L324.605 94.7089V94.2526H316.847V93.7963H300.876L300.42 85.5826V85.1263L316.847 84.67V85.1263H327.799V85.5826H333.731V86.0389L341.945 86.4953V86.9516L348.789 87.4079V87.8642H351.527V88.3205H354.722V88.7768L360.197 89.2332V89.6895H362.479V90.1458L367.955 90.6021V91.0584H370.236V91.5147H372.974V91.9711H375.256V92.4274H377.537V92.8837H379.819V93.34H382.557V93.7963H384.838V94.2526H387.12V94.7089H389.402V95.1653H391.683V95.6216H394.421V96.0779H396.703V96.5342H399.44V96.9905H401.722V97.4468L408.111 98.3595L409.936 100.185V102.01H409.479V110.224H409.023V112.962L408.111 113.874L404.46 114.787V115.243L400.809 116.612L399.897 117.981H398.984L398.072 118.894V119.806L397.159 120.263V121.175L396.246 122.088V123.457H395.79V124.826H395.334V127.107H394.877L394.421 132.583H393.965V136.234H393.508V139.428H393.052V142.622H392.596L391.683 151.292H391.227V153.574H390.771V155.855H390.314V158.137H389.858V159.962H389.402L388.033 167.263H387.576V168.632H387.12V170.001H386.664V171.37H386.207L384.838 176.846L383.926 177.758V179.127H383.469V180.04L382.557 180.953V182.322H382.1L380.275 186.885L379.363 187.341L378.45 190.079L377.537 190.535V191.448L376.625 191.904L375.712 194.186L374.343 195.098V196.011L372.974 196.924V197.836L370.693 199.662V200.574L364.76 206.506H363.848L362.023 208.788H361.11L359.741 210.613H358.828L358.372 211.526H357.459L357.003 212.438H356.091L354.265 214.264H353.353V214.72H352.44V215.176H351.527V215.633H350.615V216.089H349.702V216.545H348.789V217.002H347.877V217.458H346.964L346.052 218.371H344.683L343.77 219.283H342.401V219.739H341.032V220.196H339.663V220.652H337.838V221.108H336.013V221.565L331.449 222.021V222.477L322.779 222.934V223.39H315.935V222.934H310.459V222.477L304.527 222.021V221.565L300.42 221.108V220.652H299.051V220.196H297.226V219.739L294.488 219.283V218.827L292.206 218.371L291.294 217.458H289.925V217.002H289.012V216.545H288.099V216.089H287.187V215.633L282.624 213.807L282.167 212.895L280.342 212.438L279.886 211.526H278.973L278.517 210.613H277.604L277.148 209.701L274.866 208.788L273.954 207.419H273.041L271.672 205.594H270.759L268.934 203.312H268.022L257.983 193.273V192.361L253.876 188.254V187.341L252.507 186.428V185.516L251.594 185.059V184.147L250.225 183.234V182.322L249.313 181.865L248.856 180.04L247.031 178.215L246.118 175.477L245.206 175.021V174.108H244.749V173.195H244.293V172.283H243.837V171.37H243.381V170.457H242.924V169.545H242.468V168.632H242.012V167.719H241.555V166.807H241.099V165.894L240.186 164.982V163.613H239.73V162.7L238.817 161.787V160.418H238.361V159.506L237.448 158.593V157.224H236.992V155.855L236.079 154.943L235.623 152.205L234.711 151.292V149.923H234.254V148.554H233.798V147.185H233.342V145.36H232.885V143.991H232.429V142.622H231.973V140.797H231.516V139.428H231.06L230.604 135.321H230.147V128.02H230.604V126.651H231.06V125.738L231.973 124.826L231.516 119.806L230.604 119.35V118.437L229.235 117.068H228.322L227.409 116.156L223.759 115.699V115.243H216.458V114.787H206.875V115.243L205.506 115.699V120.263H205.963V121.632H206.419V122.544H206.875V123.457L207.788 124.369L208.244 127.107H208.701L209.157 132.583H209.613V134.865H210.069V136.69H210.526V142.166H210.069L209.613 145.816H209.157L207.788 151.292L206.875 152.205V153.574H206.419V154.486L205.506 155.399V156.768H205.05V157.681H204.594V158.593H204.137V159.506H203.681V160.418H203.225V161.331H202.768L200.943 165.894H200.487L199.118 169.545L198.205 170.001L197.293 172.739L196.38 173.195V174.108H195.924L195.467 175.933L194.555 176.389L194.098 178.215L193.186 178.671L192.729 180.496L191.817 180.953V181.865L190.904 182.322V183.234L189.992 183.691V184.603L189.079 185.059L188.166 187.341L186.797 188.254V189.166L184.972 190.535V191.448L176.758 199.662H175.846L174.477 201.487H173.564L173.108 202.399H172.195L170.37 204.225L168.545 204.681L168.088 205.594H167.176L166.263 206.506H164.894V206.963H163.982L163.069 207.875H161.7V208.332H160.331V208.788H158.962V209.244H157.137V209.701L151.205 210.157V210.613L138.884 210.157V209.701H136.603V209.244H134.321V208.788H132.952V208.332H131.127V207.875H129.758L128.845 206.963H127.476L126.564 206.05H125.195V205.594L121.544 204.225L121.088 203.312L119.263 202.856L118.806 201.943L116.525 201.031L115.612 199.662H114.699L104.661 189.623V188.71L103.292 187.797V186.885L101.923 185.972V185.059L100.097 183.234V182.322L98.7284 180.953L97.8158 178.215L96.9032 177.758V176.846H96.4468V175.933H95.9905V175.021H95.5342V174.108L94.6216 173.195V171.826H94.1653V170.914H93.7089V170.001L92.7963 169.088V167.719L91.8837 166.807V165.438H91.4274V164.069H90.9711V162.7H90.5147V161.331H90.0584V159.962H89.6021V158.593H89.1458V157.224H88.6895V155.855H88.2332V154.03H87.7768V152.661H87.3205V150.836H86.8642V149.011H86.4079V147.185H85.9516V144.904H85.4953V143.078H85.0389V140.797H84.5826V138.515H84.1263V136.234H83.67V133.496H83.2137V130.758H82.7574V128.02H82.3011V125.282H81.8447V122.088H81.3884V119.35H80.9321V116.156H80.4758V112.962H80.0195L79.1068 105.661H78.6505L77.7379 101.554H77.2816L76.8253 99.7284L75.9126 99.2721L75.4563 96.5342H75V84.2137L75.9126 83.3011L80.9321 82.3884V81.9321H82.7574V81.4758H85.0389V81.0195H86.8642V80.5632L95.9905 79.1942V78.7379L101.466 78.2816V77.8253H104.661V77.3689H107.855V76.9126H111.962L112.418 85.1263V85.5826L106.486 86.0389V86.4953H105.117L104.204 87.4079H102.835V87.8642L100.097 88.7768L99.6411 89.6895H98.7284L95.0779 93.34V94.2526L93.7089 95.6216L93.2526 97.9032L92.34 98.8158V100.641H91.8837V102.466H91.4274V104.748H90.9711V107.942H90.5147V121.175H90.9711V125.282H91.4274V128.476H91.8837L92.7963 136.69H93.2526V138.972H93.7089L94.1653 143.078H94.6216L95.0779 146.729H95.5342V148.098H95.9905V149.923H96.4468V151.292H96.9032V152.661H97.3595V154.03H97.8158V155.399H98.2721L99.6411 160.875H100.097L100.554 163.156H101.01V164.069L101.923 164.982V166.351H102.379V167.263H102.835V168.176H103.292V169.088H103.748V170.001H104.204L106.029 174.564L106.942 175.021L107.398 176.846L108.311 177.302V178.215L109.224 178.671V179.584L110.136 180.04L111.049 182.322L112.418 183.234V184.147L121.088 192.817H122.001L122.913 194.186H123.826L125.651 196.011L127.476 196.467L127.933 197.38H128.845V197.836H129.758L130.671 198.749H132.039V199.205H132.952L133.865 200.118H135.234V200.574H136.603V201.031H138.428V201.487H140.253V201.943H142.991V202.399H154.399V201.943H157.137V201.487L160.787 201.031L161.7 200.118L165.351 199.205V198.749L167.176 198.293L167.632 197.38L169.457 196.924L169.914 196.011H170.826L171.283 195.098H172.195L174.021 192.817H174.933L178.127 189.623V188.71L179.953 187.341V186.428L181.322 185.516V184.603L182.234 184.147V183.234L184.059 181.409L184.516 179.584L185.428 179.127V178.215H185.885V177.302H186.341V176.389H186.797V175.477L187.71 174.564V173.195H188.166V172.283L189.079 171.37V170.001L189.992 169.088V167.719H190.448V166.351H190.904V164.982H191.361V163.613H191.817V161.787H192.273V160.418H192.729L193.186 156.312H193.642V154.486H194.098V151.748H194.555V149.011H195.011V144.904H195.467V128.933H195.011L194.555 123.001H194.098V121.175H193.642V119.35H193.186L192.273 115.243H191.817L189.992 110.68L188.166 108.855V107.942L186.797 107.029V106.117L182.691 102.01H181.778L180.865 100.641H179.953L179.496 99.7284H178.584L176.758 97.9032H175.846V97.4468H174.933V96.9905H174.021V96.5342H173.108V96.0779H172.195V95.6216H171.283V95.1653H170.37V94.7089H169.457L168.545 93.7963H167.176L166.263 92.8837H164.894V92.4274H163.525V91.9711H162.156V91.5147H160.787V91.0584H159.418V90.6021H157.593V90.1458H156.224V89.6895H154.399V89.2332H152.574V88.7768H150.748V88.3205H148.923V87.8642H146.642V87.4079H144.36V86.9516L138.884 86.4953V86.0389L130.671 85.5826V85.1263H112.418L111.962 76.9126V76.4563H119.263V76Z" fill={glasses.frameColor} />
    <path d="M247.944 113.874H249.313L249.769 114.787H250.682L251.138 115.699H252.051L252.507 116.612H253.419L253.876 117.525L256.157 118.437L257.07 119.806H257.983L258.895 121.175L261.177 122.088L262.089 123.457H263.002L263.915 124.826H264.827L267.565 127.564L269.847 128.476L270.759 129.845H271.672L272.128 130.758H273.041L273.497 131.671H274.41L274.866 132.583H275.779L276.235 133.496H277.148L278.973 135.321L280.798 135.777L282.624 137.603L284.449 138.059L286.274 139.884L288.099 140.341L289.925 142.166L291.75 142.622L293.575 144.447L295.401 144.904L295.857 145.816H296.769L297.226 146.729H298.138L298.595 147.642L300.876 148.554L301.789 149.923L304.071 150.836L305.439 152.661H306.352L310.459 156.768V157.681L311.828 158.593V159.506L312.741 160.418L313.197 164.982H312.741V166.807H312.284L311.828 168.632L310.003 170.457H309.09V170.914H308.177L307.265 171.826H305.896V172.283H304.527V172.739H302.245V173.195H298.138V173.652L290.837 172.739V172.283H289.468V171.826L286.731 170.914L284.905 169.088H283.993L279.429 164.525V163.613L277.604 162.244V161.331L276.235 160.418V159.506L274.866 158.593V157.681L273.041 156.312V155.399L271.672 154.486V153.574L270.303 152.661V151.748L268.022 149.923V149.011L265.74 147.185V146.273L262.546 143.535V142.622L248.4 128.476H247.487L245.206 126.195L245.662 120.263H246.118V118.437H246.575V117.068H247.031V115.699H247.487L247.944 114.331V113.874Z" fill={glasses.templeTipsColor} />
    <path d="M498.534 110.219H501.272V110.803H503.553V111.259L509.942 112.172V112.628L515.417 113.997V114.453L519.981 116.278L523.631 119.929V120.842L524.544 121.754V124.036H525L523.631 138.638H523.175L522.262 145.483H521.806V147.308H521.35V149.133H520.893V151.415H520.437V153.696H519.981V155.522H519.524V157.803H519.068V160.085H518.612V162.366H518.155V164.648H517.699V167.386H517.243V170.124H517.699L518.155 174.23H518.612V180.619H518.155V181.988H517.699L516.786 184.726L514.505 187.007H513.592V187.464H511.767V187.007L509.029 186.095V185.182H508.573V172.405H509.029V166.929H509.485V162.823H509.942V159.172H510.398L510.854 153.696H511.311V151.871H511.767V150.046H512.223V148.677H512.68V146.852H513.136V145.483H513.592V144.114H514.048V142.745H514.505V141.376H514.961V140.007H515.417V138.638H515.874V136.813H516.33V135.444H516.786V134.075H517.243V132.249H517.699L518.155 129.512H517.699L517.243 127.686L515.417 125.861H514.505V125.405H513.592L512.68 124.492H511.311L510.398 123.579H509.029V123.123H507.66V122.667H506.291V122.21H504.922V121.754H503.097V121.298L499.903 120.842V120.385L496.252 119.473V118.56H498.99L499.446 116.735H499.903V112.172L498.534 110.803V110.219Z" fill={glasses.templeTipsColor} />
    <path d="M100.554 87.4079H103.292V87.8642H106.029V88.3205H108.767V88.7768H111.505V89.2332L118.806 89.6895V90.1458H122.913V90.6021H127.933V91.0584H132.496V91.5147H137.515V91.9711H142.078V92.4274H147.098V92.8837H151.661V93.34H156.68V93.7963H161.244V94.2526H166.263V94.709L173.564 95.1653V95.6216L177.215 96.9905L177.671 97.9032H178.584L180.409 99.7284H181.322L182.234 100.641V101.554H180.865V101.097H176.302V100.641L164.438 100.185V99.7284L143.447 98.8158V98.3595H136.146V97.9032H127.933V97.4468L92.34 96.9905L92.7963 95.1653L93.7089 94.709L94.6215 92.4274L98.2721 88.7768L100.554 87.8642V87.4079Z" fill={glasses.frameColor} />
    <path d="M408.421 100.634L419.829 101.546V102.003H422.567V102.459H424.849V102.915H427.13V103.372H429.412V103.828H432.15V104.284H434.888V104.74H437.626V105.197H440.82V105.653H444.927V106.109H449.033V106.566H453.14V107.022H457.703V107.478H461.81V107.935H465.917V108.391L482.345 109.76V110.216H485.995V110.673L493.752 111.129V110.673H495.121V110.216H499.667L501.053 111.585L501.51 116.148H501.053V117.061H500.597L499.685 119.343H496.253V118.914L494.665 118.886V118.43H493.752L492.84 117.517H491.471V117.061H490.102V116.605L482.345 116.148V115.692H476.869V115.236L456.791 114.323V113.867H448.577V113.41H415.266V112.954H408.878V112.498H407.965L408.421 101.09V100.634Z" fill={glasses.frameColor} />
    <g opacity="0.6">
      <path d="M299.051 91.5147L299.507 91.971L300.42 91.5147L299.964 92.8837L325.974 93.34V93.7963H330.537V94.2526L337.838 94.7089V95.1652H340.576V95.6215H343.314V96.0779H345.596V96.5342L351.984 97.4468V97.9031H353.353V98.3594H355.178V98.8158H356.547V99.2721L362.023 100.641L362.936 101.554H364.304V102.01L368.868 103.835L369.324 104.748L371.606 105.66L372.518 107.029H373.431L377.081 110.68V111.593L377.994 112.505L378.45 112.049L377.538 111.593V110.68H378.45V111.593L379.819 112.505V113.418L380.732 114.33V115.243H380.276L379.363 114.33V113.418L378.45 112.962L378.907 114.33L379.819 114.787L380.276 116.612H380.732L381.188 118.894H381.644L382.557 123.913H383.013V126.195H383.47V129.389H383.926V145.36H383.47L383.013 151.292V151.748L382.557 152.205V154.486H383.013V152.205H383.47L383.013 151.748V151.292H383.47V149.467L384.382 148.554V149.923H383.926L384.382 151.748H383.926L383.47 155.399L382.101 154.943L381.188 161.331H380.732V162.7H380.276V164.525H379.819V165.894H379.363V167.719H378.907L378.45 170.457H377.994L377.081 174.108H376.625V175.02L375.712 175.933V177.302H375.256V178.215H374.8V179.127H374.343V180.04H373.887L372.062 184.603L371.149 185.059L370.693 186.885L369.78 187.341L369.324 189.166L368.411 189.623V190.535L367.042 191.448V192.36L365.673 193.273V194.186L362.936 196.467V197.38L359.285 201.03H358.372L354.266 205.137H353.353L352.897 206.05H351.984L350.159 207.875L347.421 208.788L346.965 209.7H346.052V210.157H345.139L344.227 211.069H342.858V211.526H341.945L341.032 212.438L335.557 213.807V214.264H333.731V214.72H331.906V215.176H329.624V215.633H326.887V216.089H322.78V216.545L308.634 216.089V215.633L301.333 214.72V214.264H299.964V213.807H298.138V213.351H296.77V212.895L293.575 212.438L292.663 211.526H291.294V211.069H290.381L289.468 210.157H288.1V209.7H287.187V209.244H286.274V208.788L281.711 206.963L281.255 206.05L279.43 205.594L278.973 204.681H278.061L277.604 203.768L275.323 202.856L274.41 201.487H273.497L272.128 199.662H271.216L262.546 190.992V190.079L258.895 186.428V185.516L257.983 185.059V184.147L257.07 183.69V182.778L256.157 182.322V181.409L254.332 179.584L253.876 177.758L252.963 177.302L252.051 174.564L251.138 174.108V173.195H250.682V172.283H250.225V171.37H249.769V170.457L248.856 169.545V168.176H248.4V167.263L247.487 166.35V164.982L246.575 164.069V162.7L245.662 161.787V160.418H245.206V159.049H244.75V157.68H244.293V156.312H243.837V154.943H243.381V153.117H242.924V151.292H242.468V149.467H242.012V147.185H241.555V144.904H241.099V141.709H240.643L240.186 132.127H240.643V126.651H241.099V123.457H241.555V122.088H242.012V120.263L242.924 119.35V117.981H243.381L245.206 113.418L247.031 111.593V110.68L251.594 106.117H252.507L253.419 104.748H254.332L256.157 102.923H257.07V102.466H257.983V102.01H258.895V101.554H259.808V101.097H260.721L261.633 100.185H263.002L263.915 99.2721H265.284V98.8158H266.653V98.3594H268.022V97.9031H269.391V97.4468H270.76V96.9905H272.585V96.5342H274.41V96.0779H276.692V95.6215H278.973V95.1652H281.255V94.7089H284.449V94.2526H287.643V93.7963H292.206V93.34H298.595L299.051 91.971V91.5147Z" fill={glasses.lensColor} />
      <path d="M129.527 83.7659H131.352L130.896 84.6785H131.809V83.7659H133.178V84.6785L132.265 84.2222L132.721 85.1348H136.372V84.6785H133.634L134.09 83.7659H135.003V84.2222H136.828V85.5911L143.217 86.0475V86.5038L148.236 86.9601V87.4164H150.061V87.8727H151.887V88.329H153.712V87.4164H154.624L154.168 88.7854L159.188 89.698V90.1543H160.557V90.6106H161.925V91.0669L167.401 92.4359V92.8922L168.314 91.9796L168.77 92.4359L168.314 93.3485L170.595 93.8048V94.2611L171.508 93.3485L171.964 93.8048L171.508 94.7175H172.421V95.1738H173.333V95.6301H174.246V96.0864H175.159L176.071 96.999L176.984 96.5427V97.4554H177.896L178.353 98.368H179.265L179.722 99.2806L182.003 100.193L182.916 101.562L184.285 101.106L183.829 102.019L189.761 107.951V108.863L190.673 109.32V110.232L191.586 110.689V111.601H192.042V112.514H192.499V113.426L193.411 114.339V115.708H193.868L194.78 119.359H195.237L195.693 123.009H196.149L196.605 128.485H197.062V133.504H197.518V140.805H197.062V145.825L197.518 146.281L196.605 146.737L197.062 150.388H196.149L195.237 157.689H194.78V159.514H194.324V161.34H193.868V162.709H193.411V164.534H192.955L192.042 168.641H191.586L191.13 170.922L190.217 171.835V173.204H189.761V174.116L188.848 175.029V176.398H188.392L187.479 179.136L186.566 179.592V180.505L185.654 181.417L186.11 182.33L184.741 182.786L185.198 184.155L184.741 183.699L183.829 184.155L184.285 185.981H183.372L183.829 185.524L183.372 185.068L182.916 186.437L181.547 187.35V188.262L179.722 189.631V190.544L175.615 194.651H174.702L173.333 196.476H172.421L171.964 197.389H171.052L170.595 198.301L167.858 199.214L166.489 200.583H165.12V201.039L162.838 201.495L161.925 202.408L156.906 203.321V203.777L150.518 204.233V204.69H144.129V204.233H140.022V203.777L135.459 203.321V202.864L129.983 201.495V201.039H129.071V200.583H128.158L127.245 199.67H125.877L125.42 198.757L122.682 197.845L122.226 196.932H121.313L120.857 196.02L118.575 195.107L117.207 193.282H116.294L109.905 186.893V185.981L106.711 182.786V181.874L105.799 181.417V180.505L103.973 178.68L103.517 176.854L102.604 176.398V175.485H102.148V174.573H101.692V173.66H101.235V172.747H100.779V171.835H100.323V170.922L99.4102 170.01L98.9539 167.728H98.0413L98.4976 166.815H98.0413V165.446H97.5849L97.1286 163.165L96.216 162.252V160.883H95.7597V159.514H95.3034V158.145H94.847V156.776H94.3907V154.951L93.4781 154.039V151.757H93.0218V149.932H92.5655V148.563H92.1091V146.737L91.1965 147.194L91.6528 144.456H91.1965V142.631H90.7402V140.349L89.3713 140.805V139.893H90.2839V138.067H89.3713L89.8276 137.611V136.699H89.3713L89.8276 135.33H89.3713V133.504H88.9149L89.3713 132.135H88.9149V128.941H88.4586V124.378H88.0023V123.009H87.546L88.0023 121.64L86.6334 121.184L87.0897 119.359L88.0023 119.815V117.99H87.546V111.601H87.0897V109.32H88.0023V108.407L87.0897 108.863V107.951L88.0023 107.494L88.9149 100.193H89.3713L89.8276 97.9117L90.7402 96.999V95.6301L91.6528 95.1738L92.5655 92.8922L94.847 90.6106H95.7597L96.6723 89.2417H97.5849V88.7854H98.4976V88.329H99.4102L100.323 87.4164H101.692V86.9601H103.061V86.5038H104.43V86.0475H106.255V85.5911L111.731 85.1348V84.6785H117.663V84.2222L130.44 84.6785V84.2222H129.527V83.7659Z" fill={glasses.lensColor} />
    </g>
  </svg>
);

const mapStateToProps = state => ({ glasses: state.glasses })

export default connect(mapStateToProps)(SVG)

