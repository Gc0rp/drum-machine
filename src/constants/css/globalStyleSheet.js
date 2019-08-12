const GlobalStyleSheet = `

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        background-color: #A40E4C;
    }
    .container-fluid {
        width: 75%;
        margin-top: 5%;
    }

    .pad-button {
        width: 80px;
        height: 80px;
        background-color: #2C2C54;
        color: white;
        font-weight: bold;
        margin: 5px;
    }

    .row{
        justify-content: center;
    }

    .col-sm-2{
        margin: 5px;
    }

    .col-md-12{
        text-align: center;
    }

    .btn-primary{
        background-color: #2C2C54;
        border: 1px solid #2C2C54;
    }

    .btn-primary:hover{
        background-color: #F49D6E;
    }

`;

export default GlobalStyleSheet;