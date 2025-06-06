$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    // toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(600, 500, 200, 50, "pink");
    createPlatform(320, 620, 200, 40, "pink");
    createPlatform(920, 620, 200, 60, "pink");
    createPlatform(970, 400, 200, 50, "pink");
    createPlatform(230, 400, 200, 40, "pink");
    createPlatform(600, 268, 200, 60, "pink");






    // TODO 3 - Create Collectables
    createCollectable("database", 680, 65);
    createCollectable("diamond", 310, 350);
    createCollectable("grace", 1050, 315);
    createCollectable("kennedi", 680, 400);
    createCollectable("max", 390, 600);
    createCollectable("steve", 1000, 550);





    
    // TODO 4 - Create Cannons
    createCannon("top", 300, 2000)
    createCannon("bottom", 700, 1000)
    createCannon("right", 390, 4000)

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
