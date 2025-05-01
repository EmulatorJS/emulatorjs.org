<script setup lang="ts">
useSeoMeta({
    title: 'Translation Tool',
    description: 'Translation Helper Tool for EmulatorJS',
});
useHead({
    title: 'Translation Tool',
    meta: [{ name: 'description', content: 'Translation Helper Tool for EmulatorJS' }],
    link: [{ rel: 'stylesheet', href: '/css/translate.css' }]
});
definePageMeta({
  title: 'Translation Tool'
});
</script>
<template>
    <div class="translate">
        <br>
        <div class="header">
            <h1>Translation Helper Tool</h1>
        </div>
        <br>
        <div class="boxes">
            <div class="box">
                <button class="copyBtn" id="copyBtn1">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="18px"
                        height="18px">
                        <path
                            d="M6 4V8H18V4H20.0066C20.5552 4 21 4.44495 21 4.9934V21.0066C21 21.5552 20.5551 22 20.0066 22H3.9934C3.44476 22 3 21.5551 3 21.0066V4.9934C3 4.44476 3.44495 4 3.9934 4H6ZM8 2H16V6H8V2Z">
                        </path>
                    </svg>
                </button>
                <textarea id="box1" rows="39.5" cols="30" spellcheck="false"></textarea>
            </div>
            <div class="box">
                <textarea id="box2"
                    placeholder="Copy what is on the left into google translate or any other translation service, then translate it into the language you whant and paste the translation here."
                    rows="39.5" cols="50" spellcheck="false"></textarea>
                <button class="nextBtn" id="nextBtn">Next</button>
            </div>
            <div class="box">
                <button class="copyBtn" id="copyBtn3">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="18px"
                        height="18px">
                        <path
                            d="M6 4V8H18V4H20.0066C20.5552 4 21 4.44495 21 4.9934V21.0066C21 21.5552 20.5551 22 20.0066 22H3.9934C3.44476 22 3 21.5551 3 21.0066V4.9934C3 4.44476 3.44495 4 3.9934 4H6ZM8 2H16V6H8V2Z">
                        </path>
                    </svg>
                </button>
                <textarea id="box3" placeholder="Then click next and you are done copy this box in to a .json file"
                    rows="39.5" cols="50" spellcheck="false"></textarea>
            </div>
        </div>
        <br>
    </div>
</template>
<style lang="ts" scoped>
css({
    '*': {
        fontSize: 'revert',
        fontWeight: 'revert',
    },
    '.center': {
        textAlign: 'center',
    },
    '.main': {
        margin: 'auto',
        width: '80%',
        maxWidth: '1000px',
        textAlign: 'left',
    },
    '.next': {
        textAlign: 'right',
    },
    '.back': {
        textAlign: 'left',
    },
})
</style>
