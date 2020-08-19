import React from 'react';
import { connect } from 'react-redux';

const SVG = ({glasses}) => (
  <svg width="600" height="300" viewBox="0 0 600 300" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M91.0837 75L97.9278 75.3422V75.6844H99.2966V76.0266L102.376 76.711V77.0532L105.114 78.0798L105.456 78.7643L108.194 78.4221V78.7643L112.985 79.4487V79.7909L111.274 82.5285L115.38 86.635V87.3194L116.065 87.6616V88.346L117.433 89.7148V90.3992H117.776V91.0837H118.118V91.7681H118.46V92.4525L119.144 93.1369V94.1635L119.829 94.8479L120.856 99.2966L122.224 97.9278H122.909L123.251 97.2433H124.278V96.9011H125.304L126.331 99.6388L125.304 100.665H124.62L123.935 101.35V102.034H123.593L123.251 105.798H122.909V109.563H122.567V111.274H122.224L121.882 120.513H121.54V122.909H121.198L120.513 128.042H130.095L125.646 131.122V131.464H119.487L118.802 135.228H118.46V136.597H118.118V137.966H117.776V139.335H117.433V140.361H117.091L116.407 144.468H116.065L115.722 146.863H115.38V148.232H117.091L117.433 147.548H118.118L118.802 146.863V146.179L122.224 142.757H122.909L123.935 141.388H124.62L125.304 140.703L128.726 140.361V140.703L132.148 141.046V138.65H131.806V131.122H125.646L130.095 128.042V127.7H131.806L132.148 119.829H132.49V116.749H132.833V114.354H133.175V102.719L130.779 100.323H130.095L129.411 99.6388H126.331L125.304 96.9011V96.5589H130.095V96.9011H131.464V97.2433L133.517 97.9278L133.859 98.6122H134.544L135.913 99.981V100.665L136.597 101.008L137.281 98.27H137.624L138.65 95.5323L139.335 95.1901L139.677 93.8213L140.703 93.1369V92.4525L143.783 89.3726H144.468L145.837 88.0038L147.89 87.3194V86.635H141.046V86.2928H136.597V85.9506H132.833V85.6084L126.673 85.2662V84.924L121.54 84.5817V84.2395H119.487V83.8973H117.433V83.5551H115.38V83.2129H113.669V82.8707L111.274 82.5285L112.985 79.7909H114.696V80.1331H116.749V80.4753H118.802V80.8175H120.856V81.1597H123.251V81.5019H125.646V81.8441L135.228 82.5285V82.8707H139.335V83.2129H144.468V83.5551H151.654V83.8973H153.707L154.049 84.924L154.392 84.5817H156.103V84.2395H157.814V83.8973H160.894L162.947 86.635V86.9772H160.551V87.3194H158.84V87.6616L156.103 88.0038V88.346L154.049 88.6882L153.365 89.3726H152.338V89.7148L149.601 90.7414L147.89 92.4525H147.205L145.494 94.1635V94.8479L144.468 95.5323V96.2167L143.783 96.5589V97.2433H143.441V97.9278H143.099V98.6122H142.757V99.2966H142.414V99.981L141.73 100.665V101.692L141.046 102.376V103.403H140.703V104.43H140.361V105.456H140.019V106.483H139.677L139.335 109.221H138.992L138.308 114.696H137.966V117.091H137.624V119.829H137.281L136.939 127.7L154.049 127.357V127.015H165V126.673H175.608V126.331H185.875V125.989H195.456V125.646H204.354V125.304H212.909V124.962H221.122L217.357 128.042V128.384H208.46V128.726L191.008 129.068V129.411L160.894 130.095V130.437H149.943V130.779H137.966V131.122H136.939L137.281 141.73L138.65 142.757V143.441L139.335 143.783V144.81H139.677V149.943H139.335V151.312H138.992L139.335 152.338L143.783 150.627L144.81 147.89L146.863 145.837H147.548L147.89 145.152H148.916V144.81H150.285V144.468H155.418V144.81H156.787V145.152H157.814L158.498 145.837H159.525V146.179H160.209L160.894 146.863V147.548H161.236V148.232H161.578V148.916L162.262 149.601L161.92 150.97H162.262V151.996H162.605V153.023H162.947V154.392H163.289V156.103H163.631V157.814H163.973V159.525H164.316V161.236H164.658V163.289H165V165.342H165.342V167.053H165.684V169.449H166.027V173.555H165.684V175.266H165.342L165 176.635L163.631 178.004L161.236 178.346V178.688L156.787 178.346V178.004H155.418V177.662L154.049 177.319L153.707 176.635H153.023L151.312 174.924V174.24L150.285 173.555V172.871L149.601 172.529L149.259 171.16L148.574 170.817V170.133H148.232V169.449H147.89V168.764H147.548V168.08H147.205V167.395L146.521 166.711V165.684L145.837 165V163.973H145.494V162.947H145.152V161.92H144.81V160.894H144.468V159.867H144.125L143.783 156.445H143.441V154.734H143.099L142.414 155.418L140.019 155.76V156.445H140.361L140.703 159.183H141.046V160.209H141.388V161.578H141.73V162.605H142.072V163.631H142.414V164.658H142.757V165.684H143.099L144.125 169.791H144.468L144.81 171.502L145.494 172.186V173.213H145.837V173.897L146.521 174.582V175.608H146.863V176.293H147.205V176.977H147.548V177.662H147.89V178.346L148.574 179.03V180.057H148.916V180.741H149.259L150.627 184.163L151.312 184.506V185.19H151.654L153.023 188.612L153.707 188.954L154.392 191.008L155.076 191.35L155.418 192.719L156.787 194.087L157.129 195.456L158.156 196.141V196.825L159.867 198.536V199.221L160.894 199.905V200.589L162.262 201.616V202.3L174.24 214.278H174.924L175.266 214.962H175.951L176.293 215.646H176.977L178.346 217.015L179.715 217.357L180.057 218.042H180.741V218.384H181.426V218.726H182.11V219.068H182.795V219.411H183.479L184.163 220.095H185.19L185.875 220.779L189.639 221.464V221.806H193.403V221.464H195.456V221.122H196.825V220.779L199.905 220.095V219.753L203.327 218.384L203.669 217.7L205.38 217.015L206.407 215.646H207.091L211.198 211.54V210.856L212.567 209.829V209.144L213.251 208.802V208.118L214.62 206.749L214.962 205.38L215.646 205.038V204.354L216.331 203.669V202.643H216.673V201.958L217.357 201.274V200.247L218.042 199.563V198.536H218.384V197.51H218.726V196.483H219.068V195.114H219.411V194.087H219.753V192.719H220.095L220.437 189.639H220.779L221.464 183.821H221.806V181.426H222.148V178.346H222.49L223.175 161.236L222.148 160.894V159.867L221.464 159.183L221.122 155.76H221.464L222.148 153.023L223.175 152.681V139.335H222.833V135.228H222.49V132.148H222.148L221.806 128.042H217.357L221.122 124.962L220.779 122.909H220.437V121.54H220.095V120.513H219.753V119.487H219.411V118.46H219.068V117.433H218.726L218.384 115.722H218.042V115.038H217.7V114.354H217.357L215.989 110.932L215.304 110.589L214.962 109.221L214.278 108.878L213.593 107.167L212.224 106.141V105.456L207.433 100.665H206.749L205.722 99.2966H205.038L204.696 98.6122H204.011L202.643 97.2433L201.274 96.9011L200.932 96.2167H200.247V95.8745H199.563V95.5323H198.878V95.1901H198.194V94.8479H197.51V94.5057H196.825V94.1635H196.141V93.8213H195.456L194.772 93.1369H193.745V92.7947L192.034 92.4525L191.35 91.7681H190.323V91.4259H189.297V91.0837H188.27V90.7414H187.243V90.3992H186.217V90.057H185.19V89.7148L182.452 89.3726V89.0304H181.426V88.6882L178.346 88.346V88.0038H176.977V87.6616L173.213 87.3194V86.9772H170.817V86.635H162.947L160.894 83.8973V83.5551H169.449V83.8973H172.871V84.2395L177.319 84.5817V84.924L182.452 85.6084V85.9506L185.19 86.2928V86.635L187.586 86.9772V87.3194H188.612V87.6616H189.981V88.0038L194.087 89.0304L194.772 89.7148H195.798L196.483 90.3992H197.51V90.7414H198.194L198.878 91.4259H199.905V91.7681H200.589V92.1103H201.274V92.4525L204.696 93.8213L205.038 94.5057L206.407 94.8479L206.749 95.5323H207.433L207.776 96.2167L209.487 96.9011L210.171 97.9278H210.856L211.882 99.2966H212.567L216.331 103.061V103.745L217.7 104.772V105.456L218.726 106.141V106.825L220.095 108.194L220.437 109.563L221.122 109.905V110.589H221.464V111.274H221.806V111.958H222.148V112.643H222.49V113.327L223.175 114.011V115.038L223.859 115.722V116.749H224.202V117.776L224.886 118.46L225.228 120.856H225.57L226.255 123.593L263.897 127.357V127.7H252.947V128.042H241.654V128.384H229.677V128.726H227.281L227.624 133.175H227.966V136.255H228.308V141.73H228.65V152.338H229.335V152.681H234.125V153.023H238.232V152.681H238.916V153.023H243.023V153.365H243.707V155.76L253.973 155.418V155.076H265.951V154.734H277.243V154.392H287.852V154.049H297.433V153.707L312.833 153.365V152.681L312.148 152.338V151.654L311.464 151.312L310.779 149.601L309.753 148.916V148.232L309.068 147.89V147.205L308.384 146.863L307.7 145.152L306.673 144.468V143.783L305.646 143.099V142.414L304.62 141.73V141.046L303.251 140.019V139.335L298.46 134.544H297.776L297.091 133.517H296.407L295.722 132.49L294.354 132.148L294.011 131.464H293.327V131.122H292.643L291.958 130.437H290.932L290.247 129.753L288.194 129.411V129.068H286.825V128.726H285.456V128.384H283.745V128.042H281.692V127.7H278.612V127.357H263.897L226.255 123.593L275.532 122.224V122.567L283.061 122.909V123.251H285.114V123.593H286.825V123.935H288.536V124.278H289.563V124.62H290.932V124.962L294.011 125.646L294.696 126.331H295.722V126.673H296.407V127.015H297.091V127.357H297.776V127.7L301.198 129.068L301.54 129.753H302.224L302.567 130.437L304.278 131.122L304.962 132.148H305.646L317.966 144.468H318.65L323.441 149.601H324.125L326.863 152.681L349.449 151.996V151.654H357.319V151.312H364.848V150.97L379.221 150.627V150.285H386.065V149.943H392.909L393.593 148.916H394.62V148.574H399.411V148.232L429.182 147.548V147.205L448.004 146.863V146.521L459.981 147.205V147.548H462.034V147.89H464.087V148.232L468.194 148.916V149.259L470.247 149.601L470.932 150.285H471.958V150.627H472.643V150.97H473.327V151.312L476.749 152.681L477.091 153.365L478.46 153.707L480.171 155.418H480.855L485.304 159.867V160.551L486.673 161.578V162.262L488.042 163.289V163.973L489.411 165V165.684L490.437 166.369V167.053L491.806 168.08V168.764L493.175 169.791V170.475L494.544 171.502V172.186L495.913 173.213V173.897L497.624 175.266V175.951L498.992 176.977V177.662L502.414 181.084V181.768L504.468 183.479V184.163L515.418 195.114H516.103L517.471 196.825H518.156L519.182 198.194H519.867L520.894 199.563H521.578L523.973 201.958V202.643L524.658 203.327V204.354H525L524.658 206.407H524.316V207.091L523.289 208.118L521.578 208.46V208.802L517.814 209.144V209.487H514.734V209.829H510.97V210.171L503.783 209.829V209.487L501.73 209.144V208.802L500.361 208.46L500.019 207.776H499.335L496.939 205.38L496.597 204.011L495.913 203.669V202.985L495.228 202.3V201.274H494.886L494.544 199.563L493.859 198.878V197.852H493.517V196.825H493.175V195.798H492.833L491.806 191.692L491.122 191.008L490.779 188.954L490.095 188.27V187.243L489.411 186.559L488.726 183.821H488.384V183.137L487.7 182.452V181.426H487.357V180.741H487.015V180.057H486.673V179.373L485.989 178.688V177.662H485.646V176.977H485.304V176.293H484.962V175.608H484.62V174.924H484.278V174.24H483.935V173.555L483.251 172.871L482.909 171.16L482.224 170.817V170.133H481.882L480.513 166.711L479.829 166.369V165.684L479.144 165.342V164.658L478.46 164.316L477.776 162.605L476.065 161.236V160.551L474.696 159.183H474.011L471.616 156.787H470.932V156.445H470.247V156.103H469.563V155.76H468.878L468.194 155.076H467.167L466.483 154.392L462.719 153.707V153.365H461.008V153.023L455.875 152.681V152.338H441.844V152.681L414.125 153.365V153.707H404.544V154.049H393.935L393.251 153.365H390.855V153.707H383.669V154.049L362.452 154.734V155.076L347.053 155.418V155.76H339.525V156.103H330.97L332.681 158.156H333.365L337.814 162.605H338.498L339.867 164.316H340.551L341.92 166.027H342.605L344.316 168.08H345L348.08 171.16V171.844L348.764 172.186V172.871L349.449 173.555V176.293H349.106V176.977L347.738 178.346H347.053L346.369 179.03H345.342V179.373L341.236 179.715V180.057H335.076V179.715H333.365V179.373L331.312 179.03V178.688L329.259 178.004L328.916 177.319H328.232L326.179 175.266V174.582L325.152 173.897L324.468 172.186L323.783 171.844V171.16L322.757 170.133L322.072 168.08L321.388 167.738L320.019 164.316L319.335 163.973L318.992 162.605L318.308 162.262L317.624 160.209L316.939 159.867V159.183L316.255 158.84V158.156H315.913V157.471L315.228 156.787H314.202V157.129H305.304V157.471H296.065V157.814H286.483V158.156H276.217V158.498L246.787 159.183V159.525H243.707V161.92L242.338 162.262V162.605L228.308 162.262L227.966 177.319H227.624L227.281 183.137H226.939V185.532H226.597V187.586H226.255L225.913 191.008H225.57V192.376H225.228V194.087H224.886V195.456H224.544V196.483H224.202V197.852H223.859L223.175 200.932H222.833L222.49 202.643H222.148V203.327L221.464 204.011V205.038H221.122L220.779 206.407L220.095 206.749L219.411 208.802L218.042 210.171V210.856L215.646 213.251V213.935L211.882 217.7H211.198L210.171 219.068H209.487L208.802 220.095H208.118L207.776 220.779L205.722 221.464L204.696 222.49H203.669V222.833L200.932 223.517V223.859L198.194 224.202V224.544H196.141V224.886H188.27V224.544H186.217V224.202H184.848V223.859H183.479V223.517H182.452L181.768 222.833H180.741V222.49H180.057V222.148H179.373V221.806L175.951 220.437L175.608 219.753L174.24 219.411L173.897 218.726H173.213L172.871 218.042H172.186L170.817 216.673H170.133L166.369 212.909H165.684L161.92 209.144V208.46L158.84 205.722V205.038L157.129 203.669V202.985L154.734 200.589V199.905L154.049 199.563V198.878L153.365 198.536V197.852L152.338 197.167L151.996 195.798L150.627 194.43L150.285 193.061L149.601 192.719L148.916 190.665L148.232 190.323V189.639H147.89L146.521 186.217L145.837 185.875V185.19H145.494V184.506H145.152V183.821H144.81V183.137H144.468V182.452H144.125V181.768L143.441 181.084V180.057H143.099V179.373H142.757V178.688H142.414V178.004L141.73 177.319V176.293H141.388V175.608L140.703 174.924V173.897H140.361V173.213L139.677 172.529V171.502H139.335V170.475L138.65 169.791V168.764H138.308V167.738H137.966V166.711H137.624V165.684H137.281V164.658H136.939V163.631H136.597V162.262H136.255V161.236H135.913L135.57 158.84L134.202 160.209V160.894L133.175 161.578V162.262L128.726 166.711H128.042L127.7 167.395H127.015L126.673 168.08H125.989V168.422H125.304V168.764H124.62L123.935 169.449H122.909V169.791H121.882V170.133H116.749V169.791H116.065L115.038 168.764V166.027H115.38V165.342H115.722V164.658H116.065V163.973H116.407V163.289H116.749V162.605H117.091V161.92H117.433V161.236H117.776V160.551H118.118V159.867H118.46V159.183H118.802V158.498H119.144V157.814H119.487V157.129L120.171 156.445V155.418H120.513V154.734L121.198 154.049L121.882 151.312H122.224V150.627H122.567V149.943H122.909V149.259H123.251L124.62 145.837L125.646 145.152V144.468L126.331 143.783L124.962 144.125L123.593 145.494H122.909L117.433 151.312L114.011 151.996V153.365H113.669V154.392H113.327V155.76H112.985V157.129H112.643V158.156H112.3L111.958 160.894H111.616V161.92H111.274L110.932 164.658H110.589V165.684H110.247L109.905 168.422H109.563V169.449H109.221V170.817H108.878V171.844H108.536V173.213H108.194V174.24H107.852V175.608H107.51V176.635H107.167V178.004H106.825V179.03H106.483V180.399H106.141L105.798 182.795H105.456V183.821H105.114V185.19H104.772V186.217H104.43V187.586H104.087V188.612H103.745V189.981H103.403V191.008H103.061V192.034H102.719V193.061H102.376L101.35 197.167L100.665 197.852V198.878H100.323L99.6388 200.932L98.27 202.3H97.2433V202.643L93.8213 202.3L91.0837 199.563V198.878L90.3992 198.536V197.852H90.057V197.167H89.7148V196.483H89.3726V195.798H89.0304V195.114L88.346 194.43V193.403L87.6616 192.719V191.692H87.3194V190.665H86.9772V189.639H86.635V188.612H86.2928V187.586H85.9506V186.559H85.6084V185.532H85.2662L84.5817 181.768H84.2395V180.741H83.8973V179.373H83.5551V178.004H83.2129V176.635H82.8707V175.266H82.5285V173.897H82.1863L81.5019 168.764H81.1597V166.711H80.8175V164.658H80.4753V162.605H80.1331V160.209H79.7909V157.814H79.4487V155.076H79.1065V152.338H78.7643V148.916H78.4221V145.152H78.0798L77.7376 135.57L76.3688 135.228V134.544H76.0266V133.859H75.6844V133.175L75 132.49V130.437H75.3422L75.6844 128.384H76.0266L76.3688 127.357H77.3954L77.7376 112.3H78.0798L78.7643 100.665H79.1065L79.4487 95.1901H79.7909V93.1369H80.1331L81.1597 86.2928H81.5019V84.924H81.8441V83.2129H82.1863V82.1863H82.5285V81.1597H82.8707L83.5551 79.1065L85.9506 76.711H86.635V76.3688H87.3194L88.0038 75.6844L91.0837 75.3422L92.4525 78.0798V78.4221H91.4259V78.7643L90.057 79.1065V79.4487H89.3726L88.0038 80.8175V81.5019L86.9772 82.5285L86.2928 86.2928H85.9506L85.2662 91.7681H84.924V93.4791H84.5817V95.5323H84.2395V97.9278H83.8973L83.5551 104.772H83.2129L82.8707 114.354H82.5285V126.673H86.2928V127.015H86.9772V129.068L99.981 128.726V128.384H115.038L111.616 131.464V131.806L86.9772 132.148V134.544L86.635 134.886L82.5285 135.228L83.5551 151.312H83.8973L84.5817 159.525H84.924L85.2662 163.973H85.6084V166.027H85.9506L86.9772 172.871H87.3194L88.346 178.688H88.6882V179.715H89.0304L89.3726 182.452H89.7148V183.479H90.057V184.506H90.3992V185.875H90.7414L91.7681 189.981L92.4525 190.665L92.7947 192.719H93.1369V193.403H93.4791V194.087H93.8213V194.772H94.1635V195.456H94.5057V196.141H94.8479L95.5323 197.852H95.8745V197.167L96.5589 196.483V195.456H96.9011V194.43H97.2433V193.403H97.5856V192.376H97.9278V191.35H98.27V189.981H98.6122V188.954H98.9544V187.586H99.2966L99.6388 185.19H99.981V184.163H100.323L100.665 181.426H101.008L101.35 179.03H101.692V178.004H102.034V176.635H102.376V175.608H102.719L103.061 172.871H103.403L103.745 170.475H104.087V169.449H104.43L104.772 166.711H105.114V165.684H105.456L105.798 162.947H106.141V161.92H106.483L106.825 159.183H107.167V158.156H107.51L108.194 154.049H108.536V153.023H108.878L109.563 148.916H109.905V147.89H110.247L110.932 143.783H111.274V142.757H111.616L112.3 138.65H112.643V137.624H112.985V136.255H113.327V134.886H113.669V133.517H114.011V132.148H114.354V131.464H111.616L115.038 128.384L115.38 128.042V126.331H115.722V124.62H116.065V122.909H116.407L116.749 118.46H117.091L117.433 107.852H117.091V104.43H116.749L116.407 100.323H116.065V98.9544H115.722L114.696 94.8479H114.354V94.1635H114.011L112.643 90.7414L110.932 89.0304V88.346L106.483 83.8973H105.798L104.772 82.5285H104.087L103.745 81.8441H103.061L101.692 80.4753H101.008V80.1331L98.27 79.1065V78.7643H97.2433V78.4221H96.2167V78.0798H92.4525L91.0837 75.3422V75Z" fill={glasses.frameColor} />
    <path d="M261.844 122.567H279.297V122.909H282.034V123.251L286.483 123.593V123.935L290.589 124.62V124.962L293.669 125.646L294.354 126.331H295.38V126.673H296.065V127.015H296.749V127.358H297.433V127.7L300.855 129.069L301.198 129.753L302.567 130.095L304.278 131.806H304.962L306.331 133.517H307.015L321.388 147.89H322.072L326.179 152.339H326.863L327.205 153.365L314.886 153.707V154.05H313.517L313.175 153.023L312.49 152.681V151.996L311.806 151.654V150.97L311.122 150.627V149.943L310.437 149.601V148.916L309.753 148.574V147.89L309.068 147.548V146.863L308.384 146.521V145.837L307.357 145.152V144.468L305.646 142.757V142.072L304.278 141.046V140.361L302.224 138.65V137.966L299.487 135.228H298.802L297.433 133.517H296.749L295.38 132.148L294.011 131.806L293.669 131.122H292.985L292.3 130.437H291.274L290.589 129.753L288.536 129.411V129.069H287.167V128.726H285.798V128.384H284.43V128.042H282.376V127.7L274.163 127.358V127.015H272.11V127.358H260.475V127.7H249.525V128.042H237.89V128.384H226.255V126.331H225.913V124.962H225.57V123.593L261.844 122.909V122.567Z" fill={glasses.templeTipsColor} />
    <path d="M323.992 156H330.837L334.943 160.106H335.627L337.338 162.16H338.023L339.734 164.213H340.418L341.787 165.924H342.471L343.84 167.635H344.525L348.973 172.084V172.768L349.658 173.452L350 176.19L348.973 177.217V177.901H348.289L347.262 178.928H346.236V179.27H345.209V179.612H343.498V179.954L336.312 180.297V179.954H334.259V179.612L332.205 179.27V178.928L330.152 178.243L329.81 177.559H329.125L326.388 174.821V174.137L325.361 173.452V172.768L324.335 171.741L323.992 170.373L323.308 170.03L322.624 167.977L321.939 167.635L320.913 164.897L320.228 164.555L319.544 162.502L318.859 162.16L318.517 160.791L317.833 160.449L317.49 159.08L316.806 158.738V158.053L315.779 157.027V156.342H323.992V156Z" fill={glasses.templeTipsColor} />
    <path d="M441.502 147H456.217V147.342H459.297V147.684H461.692V148.027L465.456 148.369V148.711H466.825V149.053L469.221 149.395L469.905 150.08L471.958 150.422V150.764H472.643V151.106H473.327V151.449H474.011V151.791L477.433 153.16L477.776 153.844H478.46L479.829 155.213H480.513L481.54 156.582H482.224L484.62 158.977V159.662L486.331 161.03V161.715L488.726 164.11V164.795L490.095 165.821V166.506L491.464 167.532V168.217L492.49 168.901V169.586L493.859 170.612V171.297L495.228 172.323V173.008L496.939 174.376V175.061L498.308 176.087V176.772L499.677 177.798V178.483L501.388 179.852V180.536L503.441 182.247V182.932L506.179 185.327V186.011L514.392 194.224H515.076L517.129 196.62H517.814L518.84 197.989H519.525L520.551 199.357H521.236L524.316 202.437V203.122L525 203.806V206.544L524.316 206.886V207.57H523.631L522.605 208.597L519.867 208.939V209.281L510.97 209.966V210.308H506.521V209.966H504.81V209.624L502.414 209.281V208.939L500.361 208.255L499.677 207.228H498.992L498.308 206.544V205.859L497.281 205.175V204.491L496.597 204.148V203.464H496.255V202.779L495.57 202.095V201.068H495.228L494.544 198.331L493.859 197.646V196.62H493.517V195.593H493.175V194.567H492.833L491.806 190.46L491.122 189.776V188.749L490.437 188.065V187.038L489.753 186.354L489.068 183.616H488.726V182.932L488.042 182.247V181.221H487.7V180.536H487.357V179.852H487.015V179.167L486.331 178.483V177.456H485.989V176.772H485.646V176.087H485.304V175.403H484.962V174.719H484.62V174.034H484.278V173.35H483.935V172.665H483.593V171.981H483.251V171.297H482.909V170.612H482.567L481.198 167.19L480.513 166.848V166.164L479.487 165.137V164.452L478.802 164.11V163.426L477.433 162.399V161.715L473.669 157.951H472.985L472.643 157.266H471.958L471.616 156.582H470.932V156.24H470.247V155.897H469.563L468.878 155.213H467.852V154.871L466.141 154.529V154.186L462.034 153.502V153.16L457.243 152.817V152.475H452.11V152.133H449.03V152.475H439.449V152.817H430.551V153.16H420.97V153.502H411.73V153.844H402.148V154.186H394.62V153.844L393.251 153.502V152.817L394.62 152.475V151.106H394.277V150.422L393.251 150.764V149.738L394.277 149.395V149.053H395.646V148.711L422.681 148.027V147.684H432.605V147.342H441.502V147Z" fill={glasses.templeTipsColor} />
    <g opacity="0.6">
      <path d="M89.0306 77.0532H94.8481V77.3954H96.2169V77.7376L98.2701 78.0798L98.9545 78.7642H99.9811L101.008 79.7909L102.377 80.1331L102.719 80.8175L104.088 81.1597L104.772 82.1863H105.456L106.483 83.5551H107.167L111.616 88.0038V88.6882L112.301 89.0304V89.7148L113.669 91.0836V91.7681H114.012V92.4525H114.354V93.1369L115.038 93.8213V94.8479L115.723 95.5323V96.5589H116.065V97.5855H116.407V98.9544H116.749V100.323H117.091L117.434 104.087H117.776V107.167H118.118L117.776 118.802H117.434V121.198H117.091V123.251H116.749L116.407 126.673H116.065V128.042H115.723V129.753H115.38L114.354 135.228H114.012V136.255H113.669L112.985 140.361H112.643V141.388H112.301L111.616 145.494H111.274V146.521H110.932L110.247 150.627H109.905V151.654H109.563L108.878 155.76H108.536V156.787H108.194L107.51 160.894H107.167V161.92H106.825L106.483 164.658H106.141V165.684H105.799L105.114 169.791H104.772V170.817H104.43V171.844H104.088V173.213H103.745V174.582H103.403V175.608H103.061L102.719 178.346H102.377V179.373H102.034V180.399H101.692V181.768H101.35V182.795H101.008V184.163H100.666L100.323 186.901H99.9811V187.928H99.6389V189.297H99.2967V190.323H98.9545V191.35H98.6123V192.376H98.2701V193.403H97.9279L96.9013 197.51H96.5591V198.194H96.2169V198.878H95.8747V199.563L95.1903 200.247L92.7948 199.905L92.1104 199.221V198.536L91.426 198.194V197.51L90.7416 197.167V196.483H90.3994V195.798H90.0572V195.114H89.715V194.43H89.3728V193.745L88.6884 193.061V192.034L88.004 191.35V190.323H87.6617V189.297H87.3195V188.27H86.9773V187.243H86.6351V186.217H86.2929V185.19H85.9507V183.821H85.6085V182.795H85.2663V181.426H84.9241V180.399H84.5819V179.03H84.2397V177.662H83.8975V176.293H83.5553V174.924H83.2131V173.555H82.8709V172.186H82.5287V170.475H82.1865V169.106H81.8443V167.395H81.5021V165.684H81.1598V163.973H80.8176V161.92H80.4754V159.867H80.1332V157.814H79.791L79.1066 150.285H78.7644V146.863H78.4222V143.099H78.08V137.624H77.7378V117.776H78.08V112.643H78.4222V108.536H78.7644L79.1066 102.376H79.4488V99.981H79.791V97.5855H80.1332L80.8176 91.4258H81.1598V89.7148H81.5021V88.0038H81.8443L82.5287 83.8973H82.8709V82.8707H83.2131L84.2397 80.1331L85.9507 78.422H86.6351V78.0798H87.3195L88.004 77.3954H89.0306V77.0532Z" fill={glasses.lensColor} />
      <path d="M160.376 85.6179L171.669 85.9601V86.3023L176.118 86.6445V86.9867H177.829V87.3289H179.198V87.6711L184.673 88.6977V89.0399H185.7V89.3821H186.726V89.7244H188.095V90.0666L190.148 90.4088L190.833 91.0932L192.886 91.4354V91.7776L194.597 92.1198V92.462H195.281L195.966 93.1464H196.992V93.4886H197.677V93.8308L201.099 95.1996L201.441 95.884L202.81 96.2263L203.152 96.9107L204.521 97.2529L206.232 98.9639H206.916L207.943 100.333H208.627L213.076 104.781V105.466L214.445 106.492V107.177L215.129 107.519V108.203L216.498 109.572L216.84 110.941L217.525 111.283V111.968H217.867V112.652H218.209V113.337H218.551V114.021L219.236 114.705V115.732L219.92 116.416V117.443H220.262V118.47L220.947 119.154L221.289 121.549H221.631V122.576H221.973V124.287H222.316L222.658 127.709H223V129.42H223.342L223.684 134.895H224.027V138.66H224.369V153.032L223.342 153.375V154.059H223V155.086H222.658V156.112H222.316V157.823H222.658L223.342 160.561L224.369 160.903V167.063H224.027V174.933H223.684L223.342 181.778H223V184.173H222.658V186.226H222.316L221.631 191.359H221.289L220.605 195.466H220.262L219.92 197.861H219.578V198.888L218.894 199.572L218.551 201.625H218.209V202.31H217.867V202.994H217.525L216.156 206.416L215.471 206.759L215.129 208.127L213.418 209.838V210.523L212.392 211.207V211.892L207.943 216.34H207.259L205.205 218.394L203.836 218.736L203.494 219.42H202.81V219.762H202.125V220.105H201.441L200.757 220.789H199.73V221.131H198.703V221.473H197.677V221.816L194.597 222.158V222.5H187.068V222.158H185.357V221.816H183.989V221.473L181.935 221.131L181.251 220.447H180.224V220.105L178.171 219.42L177.829 218.736L175.776 218.051L175.433 217.367H174.749L174.407 216.683H173.722L173.38 215.998L171.669 215.314L170.985 214.287H170.3L168.932 212.576H168.247L160.034 204.363V203.679L157.981 201.968V201.283L156.954 200.599V199.914L155.928 199.23V198.546L153.875 196.492V195.808L153.19 195.466V194.781L151.821 193.413L151.479 192.044L150.795 191.702L150.452 190.333L149.768 189.991L149.426 188.622L148.741 188.279L147.373 184.857L146.688 184.515V183.831H146.346V183.146H146.004V182.462H145.662V181.778H145.319V181.093L144.635 180.409V179.382H144.293V178.698H143.951V178.013L143.266 177.329V176.302H142.924V175.618L142.24 174.933L141.555 172.196L140.871 171.511V170.485H140.529V169.458H140.186V168.432H139.844V167.405H139.502V166.378H139.16V165.352H138.817V164.325H138.475V163.298H138.133V161.93H137.791V160.903H137.449V159.534H137.106V158.165H136.764V156.797H136.422V155.428H136.08V153.717H135.738V152.006H135.395V150.295H135.053V148.584H134.711L134.369 144.135H134.027L133.684 137.633H133.342V131.131H133L133.684 116.416H134.027V114.021H134.369V112.31H134.711V110.599H135.053V108.888H135.395V107.519H135.738V106.492H136.08V105.124H136.422L136.764 103.07L137.449 102.386V101.359H137.791V100.675H138.133V99.9905H138.475L139.844 96.5685L140.529 96.2263L141.213 94.5152L144.635 91.0932H145.319L145.662 90.4088H146.346L146.688 89.7244H147.373V89.3821H148.057V89.0399H148.741L149.426 88.3555H150.452V88.0133L153.19 87.3289V86.9867H154.559V86.6445H155.928V86.3023H157.639V85.9601H160.376V85.6179Z" fill={glasses.lensColor} />
    </g>
  </svg>
);

const mapStateToProps = state => ({ glasses: state.glasses })

export default connect(mapStateToProps)(SVG)
