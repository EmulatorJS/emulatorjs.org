<style>
    .form {
        position: absolute;
        top: 450px;
        left: 50%;
        margin-top: -150px;
        margin-left: -250px;
        width: 500px;
        height: 200px;
        border: 4px dashed #111;
        cursor: pointer;
    }
    .form p {
        width: 100%;
        height: 100%;
        text-align: center;
        line-height: 170px;
        color: #111;
        font-family: Arial;
        cursor: pointer;
    }
    .form input {
        position: absolute;
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
        outline: none;
        opacity: 0;
        cursor: pointer;
    }
    .eimg {
        width: 250px;
    }
    #uploadf, #uploadf1 {
        display: block;	
    }
    select, button {
        padding: 0.6em 0.4em;
        margin: 0.5em;
        width: 15em;
        max-width: 100%;
        font-family: monospace;
        font-weight: bold;
        font-size: 16px;
        background-color: #444;
        color: #aaa;
        border-radius: 0.4em;
        border: 1px solid #555;
        cursor: pointer;
        transition-duration: 0.2s
    }
</style>
<div id="box">
    <div id="uploadf" class="form">
        <input type="file" id="input">
        <b><p>Select Game Rom: Drag your files here or click in this area.</p></b>
    </div>
</div>
<script src="/js/demo.js"></script>
