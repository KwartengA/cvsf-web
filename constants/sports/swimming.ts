import type { Sport } from "./types";

export const swimming: Sport = {
  slug: "swimming",
  name: "Swimming",
  tagline: "Efficiency in the water is a technique problem, not a fitness one.",
  description:
    "Swimming rewards those who understand the water. Drag, buoyancy, and propulsion are the three forces every swimmer is always managing. Learn the mechanics of each stroke, what good body position actually looks like, and how to build technique that holds up when you're tired.",
  heroImage: "/assets/images/swimming_003.jpg",
  accentColor: "#A09C8E",
  techniques: [
    {
      id: "freestyle",
      name: "Freestyle",
      summary:
        "Freestyle — the front crawl — is the fastest and most efficient stroke. It's built on a high body position, a rhythmic 6-beat kick, and an underwater pull that catches and accelerates through the stroke cycle.",
      body: [
        "Body position is where freestyle begins. The goal is a flat, horizontal line in the water with the hips near the surface. A dropped hip position creates drag that no amount of arm power can overcome. The head position controls the hips — eyes looking down at roughly 45°, with the waterline at the hairline, keeps the body flat.",
        "The catch is the most technically demanding moment in freestyle. As the lead arm enters the water and extends forward, the elbow bends and rises to the surface while the forearm and hand angle downward. This is the high-elbow catch (also called early vertical forearm). A flat, dropped-elbow catch wastes the first third of the pull.",
        "The pull phase drives propulsion. From the catch, the forearm sweeps back under the body in an S-curve path, accelerating through the hip. The hand exits near the thigh — not the knee. A pull that finishes early loses 20-30% of the propulsive phase.",
        "Body rotation is not optional in freestyle — it's what allows the long muscles of the back and shoulder to contribute to the pull. The body rotates 40-60° to each side on each stroke. Swimmers with a flat, rigid torso are pulling only with the arm; swimmers with good rotation are pulling with the entire side of the body.",
        "The kick in freestyle has two functions: balance and propulsion. A 6-beat kick (6 kicks per stroke cycle) is the standard for distance and sprint. The kick originates at the hip — not the knee. A bent-knee kick creates drag; a flutter kick from the hip with relaxed ankles and feet slightly turned inward is efficient.",
      ],
      keyPoints: [
        "Eyes down at 45° — head position sets hip position",
        "High elbow catch: elbow up, forearm vertical before pulling",
        "Pull finishes at the thigh, not the knee",
        "Rotate 40-60° to each side — don't swim flat",
        "Kick from the hip with loose ankles, not from the knee",
      ],
      videos: [
        {
          title: "Freestyle Technique — Full Breakdown",
          youtubeId: "5HLW2AI1Ink",
          duration: "12:44",
          channel: "Global Triathlon Network",
        },
        {
          title: "High Elbow Catch — How to Do It Correctly",
          youtubeId: "byXkDFtERvg",
          duration: "8:22",
          channel: "Effortless Swimming",
        },
        {
          title: "Freestyle Body Rotation — Drills & Explanation",
          youtubeId: "5cJCfMJmb4k",
          duration: "9:15",
          channel: "Effortless Swimming",
        },
      ],
    },
    {
      id: "breaststroke",
      name: "Breaststroke",
      summary:
        "Breaststroke is the slowest competitive stroke but the most technically punishing to get wrong. Timing between the pull, breath, kick, and glide determines everything — even a half-beat mistiming creates drag that kills momentum.",
      body: [
        "The stroke cycle in breaststroke follows a precise sequence: pull → breathe → kick → glide. Breaking this sequence — breathing late, kicking before the pull is complete, not gliding — destroys efficiency. Every part of the cycle must finish before the next begins.",
        "The pull is narrow and circular. Arms start extended forward, sweep outward to just past shoulder width, then pull inward and forward in a circular path back to the streamline position. The hands should never pull past the shoulder line — a wide, deep pull creates drag and loses the streamline on recovery.",
        "The breath happens at the natural peak of the pull — when the hands are at their widest and the body is highest in the water. The head lifts forward (not tilted back), chin near the surface. The breath must be quick — the head returns to the water before the kick begins.",
        "The breaststroke kick — the whip kick — is unique. Heels draw toward the glutes, knees hip-width apart (not wide), feet flex outward (dorsiflexion), then snap backward and together in a whipping motion, finishing in a pointed streamline. Wide knees and a bicycle kick are the two most common faults and both generate enormous drag.",
        "The glide is where breaststroke separates from other strokes — it's the only stroke with a deliberate pause. At the end of each cycle, the swimmer is in a tight streamline: arms extended forward, feet together, body horizontal. Rushing out of the glide too early kills the momentum built from the kick.",
      ],
      keyPoints: [
        "Sequence: pull → breathe → kick → glide — never skip or overlap steps",
        "Pull stays inside the shoulder line — no wide, deep sweeps",
        "Knees hip-width apart on kick recovery, not wide",
        "Feet flex outward before the snap — the whip comes from ankle flexion",
        "Hold the glide until momentum drops — don't rush the next pull",
      ],
      videos: [
        {
          title: "Breaststroke Technique — Complete Guide",
          youtubeId: "2CzLkKCtkKM",
          duration: "10:38",
          channel: "Swim England",
        },
        {
          title: "Breaststroke Kick — How to Do the Whip Kick",
          youtubeId: "LgpYjxs2HcY",
          duration: "7:55",
          channel: "Global Triathlon Network",
        },
        {
          title: "Breaststroke Timing — The Most Common Mistake",
          youtubeId: "Ffy8HxiGccQ",
          duration: "6:44",
          channel: "Effortless Swimming",
        },
      ],
    },
    {
      id: "backstroke",
      name: "Backstroke",
      summary:
        "Backstroke mirrors freestyle mechanics — rotation, high elbow pull, 6-beat kick — but inverted. The unique challenge is swimming blind to the wall and maintaining a flat, stable head position without a visual horizon.",
      body: [
        "Head position in backstroke is the foundation of everything else. The head stays still and neutral — ears in the water, chin slightly tucked, eyes looking straight up or very slightly toward the feet. Any head movement triggers hip and leg drop, immediately increasing drag.",
        "Body rotation in backstroke should be 40-60° to each side, same as freestyle. A common misconception is that backstroke is swum flat. It is not — the rotation allows the shoulder to clear the water on recovery and puts the large back muscles into the pull. Flat backstroke is arm-only backstroke.",
        "The entry and catch: the hand enters the water pinky-first, directly in line with the shoulder — not across the body centerline (which causes snake-like weaving) and not wide of the shoulder (which shortens the pull). After entry, the arm extends back before the elbow bends and the high-elbow catch begins, mirroring the freestyle pull path.",
        "The recovery is the visible arc of the arm above water. It should be straight — arm fully extended, hand passing through directly above the shoulder line. A bent arm recovery shortens the stroke and reduces the rotation trigger.",
        "The kick is the same flutter kick as freestyle: hip-driven, loose ankles, 6-beat rhythm. Because the body is inverted, the upkick (toward the surface) is the propulsive phase — the downkick is the recovery. Many backstroke swimmers neglect the upkick and lose significant propulsion.",
      ],
      keyPoints: [
        "Head stays completely still — any movement drops the hips",
        "Rotate 40-60° per side, same as freestyle — don't swim flat",
        "Entry pinky-first, directly in line with the shoulder",
        "Recovery arm is fully straight above the water",
        "Upkick is the propulsive phase — drive it toward the surface",
      ],
      videos: [
        {
          title: "Backstroke Technique — Full Breakdown",
          youtubeId: "pJxMHTBrpM4",
          duration: "11:22",
          channel: "Global Triathlon Network",
        },
        {
          title: "Backstroke Body Rotation — Why It Matters",
          youtubeId: "K3xB0kILYHE",
          duration: "8:05",
          channel: "Effortless Swimming",
        },
        {
          title: "Backstroke Entry & Catch — Fix the Most Common Error",
          youtubeId: "wgH3HBpON3o",
          duration: "7:30",
          channel: "Swim England",
        },
      ],
    },
    {
      id: "butterfly",
      name: "Butterfly",
      summary:
        "Butterfly is the most physically demanding stroke. It relies on a full-body undulation driven from the chest, a double dolphin kick, and a simultaneous arm recovery. Timing between the kick and the pull is everything.",
      body: [
        "The undulation is the defining motion of butterfly. The movement is a wave that travels from the chest through the hips and out through the feet. It is not a hip-up, hip-down motion — the chest presses down into the water, which causes the hips to rise, which drives the kick. Swimmers who only move at the hips are missing most of the power source.",
        "There are two kicks per stroke cycle in butterfly — the first kick happens as the hands enter the water at the front, the second as the hands exit at the back. The first kick drives the body forward into the catch. The second kick, which is typically stronger, drives the hips up and assists the recovery. Missing or weakening the first kick causes the body to stall.",
        "The pull in butterfly is similar to the freestyle pull — a high-elbow catch followed by a powerful sweep through and back. The difference is both arms move simultaneously. The hands enter shoulder-width apart and keyhole outward slightly, then sweep in and back, accelerating through the hips.",
        "The breath is taken at the peak of the second kick, when the body and head are naturally at their highest point. The chin skims the water surface — the head does not lift back. A high head lift delays the re-entry of the arms and destroys rhythm.",
        "Recovery is the simultaneous arc of both arms over the water surface, entering wide at shoulder width. The arms must be relaxed during recovery — tense arms slow the recovery and require more energy to keep the rhythm.",
      ],
      keyPoints: [
        "Undulation starts from the chest pressing down, not from the hips",
        "Two kicks per cycle — first kick on entry, second kick on exit",
        "Breath at the natural high point — chin on the surface, not head lifted back",
        "High-elbow catch before the pull, same as freestyle",
        "Relax the arms during recovery — tension kills rhythm",
      ],
      videos: [
        {
          title: "Butterfly Technique — Full Stroke Breakdown",
          youtubeId: "wgcXFJkN-Kc",
          duration: "13:10",
          channel: "Global Triathlon Network",
        },
        {
          title: "Butterfly Kick — Dolphin Kick Drills",
          youtubeId: "kF-PKtRHloY",
          duration: "9:44",
          channel: "Effortless Swimming",
        },
        {
          title: "Butterfly Timing — Two Kicks, One Pull",
          youtubeId: "ZjMPpEJklBo",
          duration: "8:18",
          channel: "Swim England",
        },
      ],
    },
    {
      id: "turns",
      name: "Turns & Starts",
      summary:
        "Turns and starts are where races are won and lost in the margins. A 0.2-second improvement in a flip turn repeated across 8 laps is 1.6 seconds — often more than the gap between first and third place.",
      body: [
        "The freestyle flip turn begins with the approach. As the hand touches the flags (5m from the wall), the swimmer counts strokes to the wall — usually 2 or 3. The goal is to arrive at the wall in a position that allows a compact, fast rotation without having to glide in or lunge at the wall.",
        "The rotation in a flip turn is a forward somersault. The swimmer tucks the chin, pulls the knees to the chest, and rotates 180°. The feet plant on the wall at shoulder width, knees bent at roughly 90°. Plants that are too high (near the water surface) or too low (deep) cost power off the wall.",
        "The push-off and streamline after the turn determines how much speed is carried into the lap. The push is explosive, legs fully extending, immediately locking into a tight streamline — arms squeezed against the head, hands stacked, body horizontal. Any break in the streamline (arms loose, head up, hips sagged) creates drag that bleeds the speed from the push.",
        "Underwater dolphin kicks off the wall are the fastest phase of any lap — the swimmer is moving faster underwater than on the surface. Elite swimmers hold a tight underwater dolphin kick for 10-15 meters off every wall. The transition to the surface stroke should be smooth, timed so the first stroke matches the swimmer's breathing cycle.",
        "The start — the dive from the block — is a separate technical skill. The grab start (hands grip the block front) and the track start (one foot forward, one back) are the two variants used competitively. Either way, the goal is a flat, shallow entry angle that minimizes water resistance and carries the momentum from the block into the underwater phase.",
      ],
      keyPoints: [
        "Count strokes to the wall from the flags — arrive in position, don't lunge",
        "Feet plant shoulder-width, knees at 90° — not too high, not too deep",
        "Lock into streamline immediately after the push — before surfacing",
        "Dolphin kicks off the wall are the fastest phase of the lap — hold them longer",
        "Entry angle on starts should be shallow — deep entry kills momentum",
      ],
      videos: [
        {
          title: "Freestyle Flip Turn — Step by Step",
          youtubeId: "ykNE0YVXQEU",
          duration: "8:52",
          channel: "Global Triathlon Network",
        },
        {
          title: "Underwater Dolphin Kick — How to Do It Off the Wall",
          youtubeId: "cB9V9R_M5S0",
          duration: "7:14",
          channel: "Effortless Swimming",
        },
        {
          title: "Swimming Race Start — Block Start Technique",
          youtubeId: "n1LrY49OONA",
          duration: "6:30",
          channel: "Swim England",
        },
      ],
    },
  ],
  resources: [
    {
      title: "Total Immersion — Terry Laughlin",
      type: "book",
      description:
        "The definitive text on efficient freestyle. Laughlin's whole-body approach to swimming technique transformed how recreational and competitive swimmers think about drag reduction and efficient propulsion.",
      url: "https://www.goodreads.com/book/show/209312.Total_Immersion",
    },
    {
      title: "Swimming Fastest — Ernest Maglischo",
      type: "book",
      description:
        "The most comprehensive scientific guide to competitive swimming technique and training. Dense and technical — the reference book that coaches and serious swimmers come back to repeatedly.",
      url: "https://www.goodreads.com/book/show/1485497.Swimming_Fastest",
    },
    {
      title: "Effortless Swimming — YouTube",
      type: "video",
      description:
        "Brenton Ford's channel is one of the best for adult learners and intermediate swimmers. Clear technique breakdowns with underwater footage, slow-motion analysis, and practical drills.",
      url: "https://www.youtube.com/@effortlessswimming",
    },
    {
      title: "Global Triathlon Network — YouTube",
      type: "video",
      description:
        "GTN covers open water and pool technique for triathletes. Particularly good for freestyle technique, wetsuit swimming, and open-water navigation — practical content for real conditions.",
      url: "https://www.youtube.com/@GTN",
    },
    {
      title: "USA Swimming — Technique Library",
      type: "guide",
      description:
        "Official USA Swimming coaching resources. Drill libraries, age-group training progressions, and national team technique standards. The authoritative reference for competitive swimmers.",
      url: "https://www.usaswimming.org/coaches/coaches-education",
    },
    {
      title: "SwimSwam — News & Analysis",
      type: "article",
      description:
        "The leading swimming news site. Covers elite competition results, technique analysis of top swimmers, training deep-dives, and equipment reviews. Good for seeing what elite swimming actually looks like.",
      url: "https://swimswam.com",
    },
  ],
};
