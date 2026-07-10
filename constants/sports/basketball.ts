import type { Sport } from "./types";

export const basketball: Sport = {
  slug: "basketball",
  name: "Basketball",
  tagline: "Every great player is built on mechanics most players never consciously learn.",
  description:
    "Basketball looks like athleticism. At the highest level it is — but the athleticism is built on top of repeatable mechanics. Shooting, ball handling, defense, and footwork all have biomechanical blueprints that hold up under fatigue and pressure. Learn what those blueprints are.",
  heroImage: "/assets/images/basketball_002.jpg",
  accentColor: "#8B9180",
  techniques: [
    {
      id: "shooting",
      name: "Shooting",
      summary:
        "The jump shot is the most practiced skill in basketball and the most technically specific. Every element — stance, grip, alignment, release point, arc, and follow-through — is repeatable and trainable.",
      body: [
        "The stance is the base of every shot. Feet are shoulder-width apart, shooting-side foot slightly forward (staggered stance), knees bent and loaded. Weight sits on the balls of the feet, not the heels. A wide, flat-footed stance prevents the leg drive from transferring into the shot.",
        "The grip: the ball rests on the finger pads, not the palm. There should be a visible gap between the palm and the ball. The shooting hand sits behind and slightly under the ball; the guide hand sits on the side. The guide hand is exactly that — a guide. It does not push, rotate, or add force to the shot. Any movement of the guide hand at release creates sidespin and misses.",
        "BEEF is the foundational cue: Balance → Eyes (on the target, not the ball) → Elbow (under the ball, aligned with the basket) → Follow-through (wrist snaps, hand finishes in the basket). The elbow alignment is the most commonly misunderstood — the elbow should be directly under the ball and pointing at the basket, not flared outward.",
        "The release point should be at the top of the jump, not on the way up or on the way down. Releasing on the way up adds power but reduces control. Releasing on the way down means the jump contributed nothing to the shot. The ball leaves the fingertips at the peak, with the wrist snapping forward and the fingers finishing pointing at the basket.",
        "Arc matters. A higher arc (45-55° entry angle) gives the ball a larger effective target in the rim — a ball entering steeply has more of the rim available to catch it. A flat shot (30° or less) has a much smaller margin for error. Shooters who consistently miss short are often shooting flat rather than with insufficient power.",
      ],
      keyPoints: [
        "Staggered stance, shooting foot slightly forward, weight on balls of feet",
        "Ball on finger pads — gap between palm and ball",
        "Guide hand is passive — it does not push or rotate at release",
        "Elbow directly under the ball, aligned with the basket",
        "Release at the top of the jump, wrist snap through, fingers finish at the basket",
      ],
      videos: [
        {
          title: "Jump Shot Mechanics — Full Breakdown",
          youtubeId: "tFknzpK2Tco",
          duration: "14:22",
          channel: "ILoveBasketballTV",
        },
        {
          title: "How to Fix Your Shooting Form — BEEF Explained",
          youtubeId: "m4J0UGcKFiI",
          duration: "9:48",
          channel: "Coach Daniel",
        },
        {
          title: "Arc & Release Point — Why Flat Shots Miss",
          youtubeId: "qL6cG7Xu5uc",
          duration: "8:15",
          channel: "ILoveBasketballTV",
        },
      ],
    },
    {
      id: "ballhandling",
      name: "Ball Handling",
      summary:
        "Ball handling is not about flashy moves — it's about keeping the ball on the move while your eyes stay up reading the defense. Dribbling with your head down is not ball handling, it's looking for permission to pass.",
      body: [
        "The fundamental dribble: the ball is pushed down with the finger pads — not slapped with the palm. The wrist snaps downward, the forearm follows, and the hand cushions the ball as it returns. A stiff-armed, push-from-the-shoulder dribble has no feel and no control. The dribble should feel like a yo-yo, not a bounce.",
        "Dribble height is determined by game situation. Low dribble (below the knee) is used in traffic and when being pressured — it reduces the defender's window to steal. High dribble (waist to chest) is used in the open court to move quickly. Dribbling high in traffic is one of the most common turnover causes in youth basketball.",
        "The crossover dribble is the most common change-of-direction move. The ball is pushed across the body from one hand to the other in a low, quick motion. Common errors: the crossover is too high (giving the defender time to steal), the footwork doesn't accompany the crossover (the body doesn't commit to the new direction), and the dribbler telegraphs the move by looking at the ball.",
        "Between-the-legs and behind-the-back dribbles are not show moves — they are ball-protection moves. Between-the-legs is used to change direction while keeping the body between the ball and the defender. Behind-the-back protects the ball when the defender is cutting off the outside lane. Both should only be used when there's a clear purpose, not for aesthetics.",
        "Eyes up is the non-negotiable of ball handling. A player who dribbles with their eyes on the ball cannot read the defense, cannot find open teammates, and cannot react to pressure until it's already too late. Training ball handling in isolation builds the muscle memory that allows the eyes to be elsewhere during the game.",
      ],
      keyPoints: [
        "Dribble with finger pads and wrist snap — not a palm slap",
        "Low dribble in traffic, high dribble in open court",
        "Crossover must be low and quick — a high crossover is an invitation to steal",
        "Eyes always up — dribbling with your head down is not ball handling",
        "Between-the-legs and behind-the-back are ball-protection moves, not tricks",
      ],
      videos: [
        {
          title: "Ball Handling Fundamentals — Where to Start",
          youtubeId: "G6oVnMDKxpU",
          duration: "11:35",
          channel: "ILoveBasketballTV",
        },
        {
          title: "Crossover Dribble — Mechanics & Footwork",
          youtubeId: "d4r-_jgMBXQ",
          duration: "8:44",
          channel: "Coach Daniel",
        },
        {
          title: "Eyes Up Dribbling Drills — Train Without Looking",
          youtubeId: "NxpHFBqIYTo",
          duration: "7:22",
          channel: "ILoveBasketballTV",
        },
      ],
    },
    {
      id: "defense",
      name: "Defense",
      summary:
        "Defense is the skill most players undervalue and most coaches can't ignore. Stance, positioning, footwork, and anticipation make a defender — not just effort and length.",
      body: [
        "The defensive stance: feet wider than shoulder width, knees bent, weight on the balls of the feet, back flat, hips lower than the offensive player's hips. The lower player almost always wins the footrace. A tall, upright defensive stance is slow because the defender has to drop before they can move.",
        "Defensive footwork uses the drop step and the slide step — not crossover steps. Crossover steps cross the feet and create gaps; slide steps keep the body between the offensive player and the basket. The drop step is used when the offensive player gets a half-step lead — the inside foot drops back to cut off the path, and the slide step closes.",
        "Ball pressure and positioning: on the ball, contest every catch and every shot — within arm's reach, one hand up to contest, one hand low to cut passing lanes. Off the ball, the defender positions between their man and the ball, angled to see both. This is the principle of ball-you-man — the defender never turns their back to the ball.",
        "Contesting shots: a blocked shot is a highlight; a contested shot is a strategy. The goal of a close-out is to arrive under control, hand up, and not to foul. Leaving the feet before the offensive player releases the ball is a foul nearly every time. A disciplined close-out forces a lower percentage shot without risking the foul.",
        "Anticipation over reaction: elite defenders read the play before it happens. They watch the offensive player's hips (not the ball, which can be pump-faked) and their eyes (which reveal where they intend to pass). A defender who reacts to every move is always a step late. A defender who reads body language is early.",
      ],
      keyPoints: [
        "Stance: hips lower than your opponent's, weight on balls of feet",
        "Slide steps, not crossover steps — never cross your feet",
        "Ball-you-man: always see the ball, always see your man",
        "Close out under control — a foul is worse than a contested shot",
        "Watch hips and eyes, not the ball — the ball can be pump-faked",
      ],
      videos: [
        {
          title: "Defensive Stance & Footwork — Fundamentals",
          youtubeId: "j9R0ECx-WqY",
          duration: "10:05",
          channel: "Coach Daniel",
        },
        {
          title: "On-Ball Defense — How to Guard Without Fouling",
          youtubeId: "RiVhJTpvLmM",
          duration: "9:22",
          channel: "ILoveBasketballTV",
        },
        {
          title: "Help Defense Concepts — Reading the Play",
          youtubeId: "K7Sb1q5C9wI",
          duration: "11:48",
          channel: "Coach Daniel",
        },
      ],
    },
    {
      id: "footwork",
      name: "Footwork & Pivoting",
      summary:
        "Basketball footwork is about creating space, maintaining a legal position, and getting into your shot or pass without traveling. The pivot is the most under-coached and most violated fundamental in the sport.",
      body: [
        "The pivot foot: when a player receives the ball while stationary, they choose a pivot foot by lifting the other foot first. Once the pivot foot is established, it cannot be lifted until the player passes or shoots. Dragging or lifting the pivot foot before releasing the ball is a travel — the single most common unalled violation at every level below elite.",
        "The two-step stop is used to absorb momentum when catching the ball on the move. The first foot to land is the pivot foot; the second foot lands beside it. This is a legal gather step under most rules. Confusion between the jump stop and the two-step stop leads to most catch-and-drive travel violations.",
        "The jab step is the most powerful footwork move in basketball. From a triple-threat position (ball in shooting pocket, either foot as pivot), the non-pivot foot jabs aggressively toward the defender. If the defender retreats, the jab turns into a drive. If the defender holds, the player pulls back into a shooting position. The jab must be fast and believable to get a reaction.",
        "Triple threat position is the starting point for every catch away from the basket. Feet staggered, ball in the shooting pocket (between hip and shoulder on the shooting side), weight slightly forward. From triple threat, the player threatens to drive, pass, or shoot — the defender cannot commit to defending only one option.",
        "Creating separation: the step-back and side-step are the two primary moves for creating shot space. The step-back drives into the defender, then pushes off the front foot to step backward into a shot. The side-step moves laterally away from a closing defender. Both require a clean gather and a full two steps — anything more is a travel.",
      ],
      keyPoints: [
        "Establish the pivot foot immediately on catching — don't wait",
        "Two-step stop: first foot is the pivot; second foot lands beside it",
        "Jab step must be fast and committed — a slow jab gets no reaction",
        "Triple threat on every catch away from the basket — never stand flat",
        "Step-back and side-step: two steps max from the gather, or it's a travel",
      ],
      videos: [
        {
          title: "Triple Threat Position — How to Use It",
          youtubeId: "nPYHaFOfKmg",
          duration: "9:15",
          channel: "ILoveBasketballTV",
        },
        {
          title: "Pivot Foot Rules Explained — Avoid Traveling",
          youtubeId: "oPj0RgEkWNo",
          duration: "7:40",
          channel: "Coach Daniel",
        },
        {
          title: "Jab Step & Step-Back — Creating Separation",
          youtubeId: "c4R8qjFnAME",
          duration: "10:22",
          channel: "ILoveBasketballTV",
        },
      ],
    },
    {
      id: "passing",
      name: "Passing",
      summary:
        "Passing is the skill that makes teammates better. A well-placed pass is faster than any dribble drive. The best passers don't just throw the ball — they deliver it where their teammate can immediately use it.",
      body: [
        "The chest pass is the foundation. Ball held at chest height, fingers spread, thumbs behind the ball. The pass is delivered with a step forward, arms extending fully, wrists snapping forward and turning out so thumbs finish pointing down. A chest pass without a step loses half its velocity and accuracy.",
        "The bounce pass is used to get the ball through a defender's reach — particularly on drive and kick passes and interior feeds. It should bounce roughly two-thirds of the way to the receiver so it arrives at waist height. A bounce pass that bounces once and arrives high is easily intercepted. One that bounces too close arrives too low.",
        "The overhead pass is used over a defender — entering a post player, making a skip pass, or inbounding. Two hands grip the ball overhead (not behind the head), and the pass is snapped from above with both wrists. A two-hand overhead pass is much harder to deflect than a one-handed lob.",
        "Passing angles and anticipation: the best pass leads the receiver to where they are going, not where they are. A player cutting to the basket needs the ball delivered in front of them so they can catch in stride. A pass thrown to where the cutter was forces them to slow down and gives the defense time to recover.",
        "No-look passes are not tricks — they are a deliberate deception. The passer looks one direction while passing another to freeze the defender. The technique requires the passer to know exactly where the receiver is before looking away, and to have trained the pass enough that execution doesn't require visual confirmation.",
      ],
      keyPoints: [
        "Step into every pass — a stationary pass loses velocity and arc control",
        "Bounce pass lands two-thirds of the way — arrives waist-high to the receiver",
        "Lead the receiver — pass to where they're going, not where they are",
        "Overhead pass: ball above the head, not behind — wrists snap forward",
        "No-look passes require pre-reading the receiver before looking away",
      ],
      videos: [
        {
          title: "Passing Fundamentals — Chest, Bounce, Overhead",
          youtubeId: "HQQ8E14n1Ao",
          duration: "8:55",
          channel: "Coach Daniel",
        },
        {
          title: "How to Pass Like a Pro — Angles & Timing",
          youtubeId: "VE9a4sMVrng",
          duration: "10:30",
          channel: "ILoveBasketballTV",
        },
        {
          title: "Entry Passing to the Post — Feeding Big Men",
          youtubeId: "g7KRbMnzdKo",
          duration: "7:18",
          channel: "Coach Daniel",
        },
      ],
    },
  ],
  resources: [
    {
      title: "The Mamba Mentality — Kobe Bryant",
      type: "book",
      description:
        "Kobe Bryant's breakdown of his own approach to the game — preparation, film study, technique obsession, and competitive mindset. Less tactical manual, more on how elite players think about their craft.",
      url: "https://www.goodreads.com/book/show/43397869-the-mamba-mentality",
    },
    {
      title: "Basketball on Paper — Dean Oliver",
      type: "book",
      description:
        "The foundational text of basketball analytics. Oliver's four factors framework changed how the sport was evaluated at every level. Essential for understanding what winning basketball actually looks like statistically.",
      url: "https://www.goodreads.com/book/show/122386.Basketball_on_Paper",
    },
    {
      title: "ILoveBasketballTV — YouTube",
      type: "video",
      description:
        "One of the most thorough skill-development channels on YouTube. Strong on shooting mechanics, ball handling progressions, and footwork drills with professional-level demonstrations.",
      url: "https://www.youtube.com/@ILoveBasketballTV",
    },
    {
      title: "Coach Daniel — YouTube",
      type: "video",
      description:
        "Tactical and technical breakdowns aimed at serious players and coaches. Covers individual skills, team concepts, and analysis of how pro players execute specific moves.",
      url: "https://www.youtube.com/@CoachDanielBasketball",
    },
    {
      title: "USA Basketball — Player Development",
      type: "guide",
      description:
        "Official USA Basketball coaching resources including skill progressions by age group, drill libraries, and the national team's development framework. The benchmark for how the sport structures learning.",
      url: "https://www.usab.com/youth/coach-education.aspx",
    },
    {
      title: "Cleaning the Glass — Ben Falk",
      type: "article",
      description:
        "The best basketball analytics site available. Ben Falk's shot quality metrics, lineup data, and contextual analysis are used by NBA front offices. Good for understanding what separates efficient players from inefficient ones.",
      url: "https://cleaningtheglass.com",
    },
  ],
};
