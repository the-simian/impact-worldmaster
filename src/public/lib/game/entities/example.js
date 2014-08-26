ig.module(
    'game.entities.example'
)
    .requires(
        'impact.entity'
)
    .defines(function() {

        EntityExample = ig.Entity.extend({

            size: {
                x: 48,
                y: 48
            },
            collides: ig.Entity.COLLIDES.ACTIVE,

            animSheet: new ig.AnimationSheet('media/example.png', 48, 48),

            bounciness: 1,

            init: function(x, y, settings) {
                this.parent(x, y, settings);

                this.addAnim('idle', 0.1, [0, 1, 2, 3, 4, 4, 4, 4, 3, 2, 1]);

                this.vel.x = -200;
                this.vel.y = 100;
            }
        });

    });