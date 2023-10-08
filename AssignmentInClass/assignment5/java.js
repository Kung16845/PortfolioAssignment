let postCount = 0;

function postFunction() {
    let textValue = document.getElementById("text1").value;
    if(textValue.trim() !== "") {
        if(postCount === 0) {
            document.getElementById("topic1").innerText = textValue;
            postCount++;
        } else if(postCount === 1) {
            document.getElementById("comment1").innerText = textValue;
            postCount++;
        } else if(postCount === 2) {
            document.getElementById("comment2").innerText = textValue;
            postCount = 0; // Reset the post count
        }
    }
}
    
function clearFunction() {
    document.getElementById("topic1").innerText = "";
    document.getElementById("comment1").innerText = "";
    document.getElementById("comment2").innerText = "";
    document.getElementById("text1").value = "";
    postCount = 0; // Reset the post count
}
