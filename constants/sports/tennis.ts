import type { Sport } from "./types";

export const tennis: Sport = {
  slug: "tennis",
  name: "Tennis",
  tagline: "Master the mechanics that separate good from great.",
  description:
    "Tennis is a game of repeatable technique. Every shot — serve, forehand, backhand, volley — has a biomechanical blueprint. Learn the fundamentals, understand why each movement matters, and use the resources here to build a foundation worth coaching.",
  heroImage: "/assets/images/tennis_001.jpg",
  accentColor: "#8B9180",
  techniques: [
    {
      id: "serve",
      name: "The Serve",
      summary:
        "The serve is the only shot in tennis you fully control. A technically sound serve combines a consistent toss, full shoulder rotation, and a precise contact point above the hitting shoulder.",
      body: [
        "The serve starts in the stance. A platform stance (feet roughly parallel) gives stability; a pinpoint stance (back foot draws forward at the trophy position) generates more hip drive. Neither is wrong — consistency is the goal.",
        "The trophy position is the moment every serve is built around. At this point the non-dominant arm holds the ball toss at full extension overhead, the racket arm is bent at roughly 90° with the racket pointing up, and the knees are loaded. Think of it as a slingshot fully pulled back.",
        "Ball toss placement determines everything downstream. For a flat serve, the toss sits slightly inside the baseline and slightly forward of the head. A slice serve moves the toss further to the right (for right-handers). Kick serves toss slightly behind and to the left. The toss arm stays up until contact — dropping it early collapses the entire kinetic chain.",
        "The kinetic chain runs from ground → legs → hips → torso → shoulder → elbow → wrist → racket. Every link must fire in sequence. A stiff wrist, a dropped elbow, or an early hip rotation all bleed power before the racket reaches the ball.",
        "Pronation at contact is what distinguishes a flat serve from a push. The forearm rotates inward as the racket face strikes the ball, accelerating the tip through the contact zone. Without pronation, the serve is flat and slow.",
      ],
      keyPoints: [
        "Toss is the most consistent predictor of serve accuracy — practice it in isolation",
        "Contact point should be at maximum reach, not pulled down by an early elbow drop",
        "Knees load and drive upward — the serve is not an arm-only motion",
        "Follow-through crosses the body to the opposite hip on the dominant side",
        "First serves go for pace and placement; second serves prioritize spin and depth",
      ],
      videos: [
        {
          title: "Serve Technique Breakdown — Trophy Position & Toss",
          youtubeId: "c4JdGJQ_KyQ",
          duration: "9:12",
          channel: "Top Tennis Training",
        },
        {
          title: "How to Hit a Kick Serve — Step by Step",
          youtubeId: "xT3D3RNAaM4",
          duration: "11:34",
          channel: "Essential Tennis",
        },
        {
          title: "Fix Your Serve Toss in 5 Minutes",
          youtubeId: "o0D3Doj5slA",
          duration: "5:27",
          channel: "Intuitive Tennis",
        },
      ],
    },
    {
      id: "forehand",
      name: "Forehand",
      summary:
        "The forehand is the most attacked shot in tennis. Modern technique uses a semi-western or western grip, a low-to-high swing path, and explosive hip rotation to generate topspin and pace simultaneously.",
      body: [
        "Grip is the foundation of the forehand. An eastern grip produces a flatter ball — good for low balls and slices. A semi-western grip (knuckle on bevel 4) is the most common modern grip — it allows heavy topspin while still producing a comfortable contact point at waist to shoulder height. A western grip goes even higher, suits high-bouncing clay courts, but is harder to manage on low balls.",
        "Unit turn — rotating the shoulders and hips together as the ball approaches — is the most neglected fundamental. Players who don't unit turn are always playing catch-up. The turn should happen as soon as you read the incoming ball direction. The non-dominant hand stays on the throat of the racket during the turn, guiding the take-back.",
        "The take-back in modern tennis is a loop, not a straight-back pull. The racket drops below the contact zone before swinging up through the ball. This creates the low-to-high swing path responsible for topspin. A straight-back take-back removes the loop and reduces both power and spin potential.",
        "Contact is in front of the body — roughly even with the lead foot or slightly ahead. Contacting the ball late (beside or behind the hip) removes the ability to rotate through the shot and forces an arm-dominant swing, which both reduces power and increases injury risk.",
        "The follow-through completes the kinetic chain. A windshield-wiper finish (racket finishes across the body, low) is used for heavy topspin on baseline groundstrokes. A high finish (racket ends over the shoulder) flattens the ball out and is used for approach shots and when going down the line.",
      ],
      keyPoints: [
        "Unit turn begins reading, not after — late turns mean late contact",
        "Drop the racket head below the ball before swinging up through contact",
        "Contact point is in front of the body, not beside the hip",
        "Lead with the butt cap of the racket toward the ball — wrist lays back, snaps through contact",
        "Non-dominant arm drives shoulder rotation; it's not passive",
      ],
      videos: [
        {
          title: "Modern Forehand Technique — Full Breakdown",
          youtubeId: "gTgkjH0c3xc",
          duration: "14:08",
          channel: "Top Tennis Training",
        },
        {
          title: "The Inside-Out Forehand — When and How",
          youtubeId: "k9sZYfK_Rak",
          duration: "8:44",
          channel: "Essential Tennis",
        },
        {
          title: "Semi-Western Grip Forehand Masterclass",
          youtubeId: "gL5bQBKTL3A",
          duration: "10:55",
          channel: "Intuitive Tennis",
        },
      ],
    },
    {
      id: "backhand",
      name: "Backhand",
      summary:
        "Both the two-handed and one-handed backhands can be weapons. The two-hander is more consistent under pressure; the one-hander has a longer reach and disguise. Both require early preparation and a stable contact point.",
      body: [
        "The two-handed backhand is driven by the non-dominant arm. This surprises most players — the dominant hand grips at eastern forehand, the non-dominant hand grips continental near the top. Think of it as a left-handed forehand (for right-handers) with the dominant hand guiding the racket face. Players who neglect the non-dominant arm produce weak, inconsistent backhands.",
        "The one-handed backhand demands an even earlier unit turn than the forehand. Because the shoulder has to travel further to come around, a late turn almost always results in a late contact point. Players struggling with one-handers should film their preparation — nearly every problem traces back to a slow turn or a dropped elbow.",
        "For the one-hander, the contact point is further out in front than most players realise. The racket arm extends almost fully at contact; a bent elbow at contact signals the ball is being hit too close to the body. The non-dominant hand releases the throat of the racket just before or at contact and swings wide to open the shoulders.",
        "The two-handed backhand follow-through is shoulder-high and across the body. The one-handed follow-through finishes high above the hitting shoulder, racket pointing skyward. Both grips: the wrist remains firm through contact — there should be no collapse or roll at the moment of impact.",
        "The slice backhand is a separate shot, not a defensive bail-out. Proper slice uses a continental grip, a high take-back, and a downward swing path that skims the back of the ball. The angle of the racket face at contact controls how much slice is imparted. Used correctly, the slice stays low, skids, and pushes opponents out wide or forces a high sitter.",
      ],
      keyPoints: [
        "Two-hander: non-dominant arm does most of the work — don't neglect it",
        "One-hander: contact point is far in front, arm nearly fully extended",
        "Non-dominant hand on the throat of racket during prep keeps the take-back compact",
        "Wrist firm through contact — no flip or roll",
        "Slice backhand is an attacking weapon, not just a defensive shot",
      ],
      videos: [
        {
          title: "Two-Handed Backhand — Complete Technical Guide",
          youtubeId: "I3Vno2OYZHU",
          duration: "13:22",
          channel: "Top Tennis Training",
        },
        {
          title: "One-Handed Backhand Masterclass",
          youtubeId: "cMXm3QZZMKY",
          duration: "16:48",
          channel: "Intuitive Tennis",
        },
        {
          title: "Backhand Slice — How to Hit It Properly",
          youtubeId: "FJuCMJZYBoo",
          duration: "7:15",
          channel: "Essential Tennis",
        },
      ],
    },
    {
      id: "volley",
      name: "Volley",
      summary:
        "The volley is a redirecting shot, not a swing. A short, compact punch with a continental grip, firm wrist, and racket above the wrist at all times defines clean net play.",
      body: [
        "The continental grip is non-negotiable for volleys. It is the only grip that allows both forehand and backhand volleys without a grip change — there is no time at net to switch. Players using eastern grips at net will struggle to volley on the forehand side without opening the face too far, and will be nearly defenceless on the backhand side.",
        "The volley is a punch, not a swing. Take the racket back only as far as the opposite shoulder — any further and you will be swinging through the volley, losing control and pace. The forward motion is short, compact, and angled — punching slightly downward to keep the ball low over the net.",
        "Racket above the wrist is the most important technical cue for a clean volley. If the racket head drops below the wrist, the player must lift the ball, creating an upward swing path that produces a floaty, attackable volley. The racket stays up; the body crouches down to meet low balls rather than dropping the racket.",
        "The split step is what gets players into position for volleys. Just as the opponent makes contact, the volleyer hops into a wide, balanced stance. Without the split step, the feet are flat and the player reacts a half-second late — enough to be passed.",
        "Positioning at net matters as much as technique. The ideal net position is 8-10 feet from the net — close enough to angle volleys, far enough to handle lobs. Players hugging the net get lobbed; players too deep lose the angle advantage.",
      ],
      keyPoints: [
        "Continental grip only — no grip changes at net",
        "Compact take-back: no further than opposite shoulder",
        "Racket head above wrist at all times — crouch body, don't drop racket",
        "Punch motion with a firm wrist — the ball is redirected, not hit",
        "Split step on every opponent contact — without it, footwork falls apart",
      ],
      videos: [
        {
          title: "Volley Technique — The Punch Volley Explained",
          youtubeId: "O3kNPkwvlo4",
          duration: "8:33",
          channel: "Top Tennis Training",
        },
        {
          title: "Net Play Fundamentals — Volley Positioning & Movement",
          youtubeId: "wHHhJ9H55bI",
          duration: "10:12",
          channel: "Essential Tennis",
        },
        {
          title: "The Drop Volley — Touch Shots at Net",
          youtubeId: "bCVByGnzQgw",
          duration: "6:45",
          channel: "Intuitive Tennis",
        },
      ],
    },
    {
      id: "footwork",
      name: "Footwork & Movement",
      summary:
        "Footwork is the skill that multiplies every other technique. Recovery to the ready position after every shot, split stepping on cue, and loading into the shot before swinging separate athletic players from mechanical ones.",
      body: [
        "The ready position is the reset point for all movement. Feet shoulder-width apart, slight forward lean on the balls of the feet, racket out in front with the non-dominant hand supporting the throat. Players who let their heels sink lose the first step in every direction.",
        "Split step timing is precise. The hop happens as the opponent's racket starts forward into their swing — not after contact, not during their take-back. A correctly timed split step lands exactly as the ball leaves the strings, giving the player maximum time to push off in the right direction.",
        "Crossover steps cover ground; adjustment steps fine-tune position at the ball. A player taking only small steps to the ball arrives in the wrong position. Large crossover strides to close the gap, then 1-2 small adjustment steps to set the feet before contact is the correct sequence.",
        "Open stance vs. closed stance: Open stance (back foot behind and to the side, hips open to the net) suits wide balls and allows fast recovery. Closed stance (front foot steps across, body turns sideways) is better for down-the-line shots and low balls that need more shoulder rotation. Elite players use both depending on the situation.",
        "Recovery after every shot is non-negotiable. The tactical default is to recover toward the centre of the likely opponent replies — which is not always the geometric centre of the court. After hitting a wide forehand crosscourt, the recovery is slightly left of centre. Most beginners recover toward the geometric centre and get caught going the wrong way.",
      ],
      keyPoints: [
        "Ready position on the balls of the feet, never heels",
        "Split step timing: as opponent's racket swings forward, not after contact",
        "Big crossover strides to close distance, small adjustment steps at the ball",
        "Recovery position is tactical — think about where the next ball is most likely to go",
        "Every shot ends with the start of recovery — there is no standing and watching",
      ],
      videos: [
        {
          title: "Tennis Footwork — Split Step & Recovery Drills",
          youtubeId: "QkELz97H1eM",
          duration: "11:05",
          channel: "Top Tennis Training",
        },
        {
          title: "How to Move Like a Pro — Footwork Patterns",
          youtubeId: "c6SZRYUzDSQ",
          duration: "9:48",
          channel: "Essential Tennis",
        },
        {
          title: "Agility Ladder Drills for Tennis",
          youtubeId: "Y4iFl73FMOA",
          duration: "7:30",
          channel: "Intuitive Tennis",
        },
      ],
    },
  ],
  resources: [
    {
      title: "The Inner Game of Tennis",
      type: "book",
      description:
        "W. Timothy Gallwey's foundational text on the mental side of tennis. The concepts of Self 1 and Self 2 explain why overthinking destroys technique and how to train instinctively.",
      url: "https://www.goodreads.com/book/show/905.The_Inner_Game_of_Tennis",
    },
    {
      title: "Winning Ugly — Brad Gilbert",
      type: "book",
      description:
        "Strategic tennis from one of the game's most tactical minds. Less about technique, more about reading opponents, managing matches, and winning points you have no business winning.",
      url: "https://www.goodreads.com/book/show/171607.Winning_Ugly",
    },
    {
      title: "Top Tennis Training — YouTube",
      type: "video",
      description:
        "One of the most thorough technique channels on YouTube. Clear biomechanical breakdowns for every shot, with professional demonstrations and slow-motion analysis.",
      url: "https://www.youtube.com/@TopTennistraining",
    },
    {
      title: "Essential Tennis — YouTube",
      type: "video",
      description:
        "Ian Westermann's channel covers technique, tactics, and the mental game. Consistently good Q&A format that addresses real player problems.",
      url: "https://www.youtube.com/@EssentialTennis",
    },
    {
      title: "USTA Player Development Resources",
      type: "guide",
      description:
        "Official USTA coaching and player development guides. Includes age-appropriate training progressions, drill libraries, and tournament pathway information.",
      url: "https://www.usta.com/en/home/play/adult-tennis/programs/national/player-development.html",
    },
    {
      title: "Tennis Abstract — Match Data & Stats",
      type: "article",
      description:
        "Jeff Sackmann's tennis analytics site. Detailed ATP and WTA match statistics, serve data, and return data. Great for understanding what elite performance looks like numerically.",
      url: "https://www.tennisabstract.com",
    },
  ],
};
