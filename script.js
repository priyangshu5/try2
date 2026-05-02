document.addEventListener('DOMContentLoaded', function() {
    const colorButton = document.getElementById('colorButton');
    const colorCode = document.getElementById('colorCode');
    
    colorButton.addEventListener('click', function() {
        // Generate a random color
        const randomColor = generateRandomColor();
        
        // Set the background color of the body
        document.body.style.backgroundColor = randomColor;
        
        // Update the color code display
        colorCode.textContent = randomColor;
    });
    
    function generateRandomColor() {
        // Generate random RGB values
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        
        // Convert to hexadecimal
        const hex = "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
        
        return hex;
    }
});