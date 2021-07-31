<template>
  <main>
    <section id="jumbotron">
      <b-container fluid>
        <b-row>
          <b-col sm="12" md="6" class="mt-auto mb-md-auto px-4 px-md-5">
            <h1 class="text-gobi text-white">
              {{ gobiResponse }}
            </h1>
            <div id="record-result"></div>
          </b-col>
          <b-col sm="12" md="6" class="mt-auto px-0" style="overflow: hidden">
            <svg class="gobi-main" viewBox="0 0 547 447" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path class="left-hand" d="M60.7447 52.6837C19.6682 172.26 93.7841 219.592 135.35 239.522L135.35 303.047C119.457 303.047 60.7447 282.991 21.6558 209.627C-36.6139 100.264 38.7394 -7.10473 60.7447 0.368817C78.3489 6.34766 80.3365 19.0527 60.7447 52.6837Z" fill="#B6E8FF"/>
              <path class="right-hand" d="M528.276 339.93C515.9 288.59 451.444 265.714 420.518 260.881L436.159 325.764C440.396 322.792 454.928 322.504 479.161 345.125C509.454 373.401 393.31 402.875 385.37 413.449C377.43 424.024 386.919 473.763 461.771 432.015C530.389 393.745 535.051 368.035 528.276 339.93Z" fill="#B6E8FF"/>
              <path d="M113.853 234.804C113.853 144.877 186.753 71.9763 276.68 71.9763C366.608 71.9763 439.508 144.877 439.508 234.804L439.508 447.732L113.853 447.732L113.853 234.804Z" fill="#B6E8FF"/>
              <circle cx="335.132" cy="201.404" r="12.5252" fill="#6C6B6F"/>
              <circle cx="201.53" cy="209.754" r="12.5252" fill="#6C6B6F"/>
              <circle class="eyes" cx="193.179" cy="209.754" r="4.17506" fill="#FFFCFC"/>
              <circle class="eyes" cx="326.782" cy="201.404" r="4.17506" fill="#FFFCFC"/>
              <path class="mouth" d="M173.819 280.785C209.474 300.098 295.492 323.571 354.323 262.957" stroke="#6C6B6F" stroke-width="2.94765"/>
              <path class="mouth" d="M316.439 231.026C345.409 215.427 354.323 253.311 354.323 262.225C336.495 283.618 309.754 291.194 298.612 295.651C311.983 282.281 287.47 246.625 316.439 231.026Z" fill="#FFACCA"/>
              <path class="mouth" d="M211.702 276.328C204.571 276.328 198.332 285.241 196.103 289.698L220.616 296.384C220.616 289.698 218.833 276.328 211.702 276.328Z" fill="#FFFCFC"/>
              <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="113" y="71" width="327" height="377">
                <path d="M113.853 234.804C113.853 144.877 186.753 71.9763 276.68 71.9763C366.608 71.9763 439.508 144.877 439.508 234.804L439.508 447.732L113.853 447.732L113.853 234.804Z" fill="#B6E8FF"/>
                <circle cx="335.132" cy="201.404" r="12.5252" fill="#6C6B6F"/>
                <circle cx="201.53" cy="209.754" r="12.5252" fill="#6C6B6F"/>
                <circle cx="193.179" cy="209.754" r="4.17506" fill="#FFFCFC"/>
                <circle cx="326.782" cy="201.404" r="4.17506" fill="#FFFCFC"/>
              </mask>
              <g mask="url(#mask0)">
                <rect x="98.1821" y="140.837" width="341.337" height="44.569" transform="rotate(-4.13948 98.1821 140.837)" fill="#FD522C"/>
              </g>
            </svg>
            <div class="gobi-table">
              <b-button to="/library" size="sm" variant="round" class="bg-white mx-2">
                <b-img :src="require('~/assets/img/book.png')" fluid></b-img>
              </b-button>
              <b-button size="sm" variant="recorder" class="btn-round mx-2">
                <i class="fa fa-microphone" aria-hidden="true"></i>
              </b-button>
              <b-button to="/challenge" size="sm" variant="round" class="bg-white mx-2">
                <b-img :src="require('~/assets/img/medal.png')" fluid></b-img>
              </b-button>
            </div>
            <div class="circle-asset"></div>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </main>
</template>

<script>
  import { mapState } from "vuex";

  export default {
    head() {
      return {
        bodyAttrs: {
          class: "bg-primary"
        }
      }
    },
    
    computed: {
      ...mapState({
        recorderCounter: state => state.gobi.recorderCounter,
        gobiResponse: state => state.gobi.gobiResponse
      })
    },

    data() {
      return {
        voices: []
      }
    },

    methods: {
      recognizeSpeech() {
        const btnRecorder = document.querySelector(".btn-recorder");
        const recordResult = document.getElementById("record-result");
        
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        let listening = false;

        if (typeof SpeechRecognition !== "undefined") {
          const recognition = new SpeechRecognition();
          recognition.continuous = false;
          recognition.interimResults = true;
          recognition.lang = "id-ID";
          
          const start = () => {
            btnRecorder.classList.add("active");
            recognition.start();
          };

          const stop = () => {
            btnRecorder.classList.remove("active");
            recognition.stop();
          };

          btnRecorder.addEventListener("click", event => {
            listening ? stop() : start();
            listening = !listening;
          });

          const onResult = event => {
            recordResult.innerHTML = "";

            for (const res of event.results) {
              const text = document.createTextNode(res[0].transcript);
              const p = document.createElement("p");
              p.classList.add("text-record")

              if (res.isFinal) {
                p.classList.add("final-record");
              }

              p.appendChild(text);
              recordResult.appendChild(p);
            }
          };

          recognition.addEventListener("result", onResult);
          recognition.onsoundend = () => {
            listening ? stop() : start();
            listening = !listening;
            
            this.$store.dispatch("gobi/sendAudioRecord", {
              pesan: document.querySelector("#record-result").innerText
            }).then(() => {
              this.speakResponse();
            });
          }
        } else {
          btnRecorder.remove();

          const message = document.getElementById("message");
          message.removeAttribute("hidden");
          message.setAttribute("aria-hidden", "false");
        }
      },

      populateVoiceList() {
        this.voices = window.speechSynthesis.getVoices()
          .sort((a, b) => {
            const aName = a.name.toUpperCase();
            const bName = b.name.toUpperCase();
            
            if ( aName < bName ) {
              return -1;
            } else if ( aName == bName ) {
              return 0;
            } else {
              return +1;
            }
          });
      },

      speakResponse() {
        if (window.speechSynthesis.speaking) {
          console.error("speechSynthesis.speaking");
          return;
        }

        let utterThis = new SpeechSynthesisUtterance(this.gobiResponse);
        utterThis.onend = (event) => {
          console.log("Speak ended");
        }

        utterThis.onerror = (event) => {
          console.error("Speak error")
        }

        utterThis.voice = this.voices[0];
        utterThis.pitch = 0.7;
        utterThis.rate = 1;

        window.speechSynthesis.speak(utterThis);
      }
    },

    mounted() {
      this.recognizeSpeech();
      this.populateVoiceList();
      
      if (speechSynthesis.onvoiceschanged !== undefined) {
        speechSynthesis.onvoiceschanged = this.populateVoiceList;
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~/assets/scss/base/_colours.scss";

  #jumbotron {
    margin: 0;
    padding-bottom: 0;
    height: calc(100vh - 5.9rem);

    @media (max-width: 768px) {
      min-height: 100vh;
    }
    
    .container, .container-fluid, .row {
      height: 100%;
    }
  }
</style>