import type { Sport } from "./types";

export const gym: Sport = {
  slug: "gym",
  name: "Gym",
  tagline: "Every rep is either building the pattern or reinforcing the wrong one.",
  description:
    "The gym rewards consistency and punishes bad mechanics. Squats, core work, and compound movements all have precise biomechanical patterns that determine whether you're building strength or building injury. Learn what correct movement looks like before the weight gets heavy.",
  heroImage: "/assets/images/gym_001.jpg",
  accentColor: "#8B9180",
  techniques: [
    {
      id: "squat",
      name: "Squat",
      summary:
        "The squat is the most fundamental lower-body movement in training. Depth, bar path, knee tracking, and bracing are the four elements that determine whether a squat builds strength or causes injury.",
      body: [
        "Stance width varies by anatomy — there is no single correct stance. Hip-width to slightly wider is the starting point. Toes are turned out 15-30°. The goal is a stance that allows the hips to descend between the knees without the lower back rounding at the bottom. If the hips can't get below parallel without lumbar flexion, the stance may need to widen or the toes turn out further.",
        "Bracing before descent is non-negotiable. A 360° brace — breathing deep into the belly, expanding outward in all directions, locking the core like a cylinder — creates intra-abdominal pressure that protects the spine under load. Bracing only the front of the abs (sucking in) reduces spinal support. The brace is set before the bar moves, held for the entire rep.",
        "The descent: hips break first, simultaneously with the knees tracking over the toes. The chest stays up. The bar travels in a vertical line directly above the mid-foot — the most mechanically efficient bar path. If the bar drifts forward, the lower back has to fight to stay upright under the load. Cue: push the floor apart with your feet as you descend.",
        "Depth: parallel (crease of the hip at or below the top of the knee) is the standard for strength training. Below parallel is achievable for most people with adequate hip and ankle mobility. The knees-past-toes myth is not supported by evidence — knees tracking over the toes is correct and necessary for a full range of motion squat.",
        "The drive out of the hole: lead with the chest, not the hips. A common error is the hips rising faster than the chest (the squat morning), which shifts the load from the legs onto the lower back. Drive the upper back into the bar, push through the full foot, and maintain the vertical bar path on the way up.",
      ],
      keyPoints: [
        "Brace 360° before the bar moves — not just the front of the abs",
        "Bar stays over mid-foot for the entire movement",
        "Hips and knees break simultaneously on descent",
        "Knees track over toes throughout — the knees-past-toes myth is false",
        "Drive the chest up out of the hole — don't lead with the hips",
      ],
      videos: [
        {
          title: "Squat Technique — Complete Beginner to Intermediate Guide",
          youtubeId: "ultWZbUMPL8",
          duration: "13:48",
          channel: "Alan Thrall",
        },
        {
          title: "How to Squat — Bar Path, Depth & Bracing",
          youtubeId: "C_VkDs8VoxU",
          duration: "11:22",
          channel: "Barbell Medicine",
        },
        {
          title: "Fix Your Squat — Most Common Errors Corrected",
          youtubeId: "nhoikoUEI8U",
          duration: "9:55",
          channel: "Alan Thrall",
        },
      ],
    },
    {
      id: "deadlift",
      name: "Deadlift",
      summary:
        "The deadlift is the simplest test of total-body strength and the most commonly butchered lift. The setup — bar position, grip, hinge, brace — determines the entire rep before the bar leaves the floor.",
      body: [
        "Bar position: the bar starts over the mid-foot, roughly 1 inch from the shins. Not touching the shins, not 6 inches away. When you look straight down at the bar from standing, it should bisect your foot. Most beginners set up with the bar too far forward, which drags the bar away from the body on the pull and loads the lower back unnecessarily.",
        "The hip hinge is the foundational movement of the deadlift — not a squat. The hips push back, the torso hinges forward, the shins stay relatively vertical. A deadlift that starts with the hips too low (squatting down to the bar) shifts the mechanics toward a squat and usually causes the hips to rise before the weight breaks the floor.",
        "Before pulling: the lats engage by trying to 'put your shoulder blades in your back pockets' — this locks the upper back and keeps the bar tight to the body. The chest is up, the lower back is neutral (not rounded, not hyperextended). The brace is the same 360° cylinder as the squat — held through the entire rep.",
        "The pull: the floor is pushed away rather than the bar being pulled up. The legs drive into the ground, the hips drive forward as the bar clears the knees, the lockout is a simultaneous hip extension and knee lockout at the top. Hyperextending the lower back at lockout (leaning back excessively) puts unnecessary load on the lumbar spine.",
        "The descent: controlled, hinging at the hip as the bar lowers. Many beginners drop the bar or lower it with a rounded back — both are injuries waiting to happen under load. The reverse of the pull: hips hinge back first, knees bend as the bar passes them, bar returns to mid-foot.",
      ],
      keyPoints: [
        "Bar starts 1 inch from shins, directly over mid-foot",
        "Hip hinge — not a squat. Hips back, not hips down",
        "Lats engaged before pulling — bar stays against the body the whole way up",
        "Push the floor away — leg drive first, then hip drive through the top",
        "Neutral lower back throughout — not rounded, not hyperextended at lockout",
      ],
      videos: [
        {
          title: "How to Deadlift — Setup, Pull & Common Mistakes",
          youtubeId: "wYREQkVtvEc",
          duration: "12:10",
          channel: "Alan Thrall",
        },
        {
          title: "Deadlift Technique for Beginners — Step by Step",
          youtubeId: "1ZXobu7JvvE",
          duration: "10:44",
          channel: "Barbell Medicine",
        },
        {
          title: "Fix Your Deadlift — Hip Hinge vs Squat",
          youtubeId: "op9kVnSso6Q",
          duration: "8:30",
          channel: "Alan Thrall",
        },
      ],
    },
    {
      id: "core",
      name: "Core Training",
      summary:
        "The core is not the abs — it's the entire cylinder of muscle surrounding the spine. Training it means building stability and resistance to movement, not just the ability to crunch. Anti-extension, anti-rotation, and anti-lateral-flexion are the three functions to train.",
      body: [
        "The core's primary job in the gym is to resist movement, not create it. Crunches train spinal flexion — a movement pattern the spine performs under almost no load in daily life. Planks, deadbugs, and Pallof presses train the core to stay rigid under load, which is what it actually needs to do when squatting, deadlifting, or carrying.",
        "Anti-extension training: the plank and its variations (RKC plank, plank with reach, ab wheel rollout) train the core to resist the spine being pulled into extension under load. The ab rollout is the most demanding anti-extension exercise — the extended position creates enormous demand on the anterior core to prevent the lower back from sagging.",
        "Anti-rotation training: the Pallof press (a cable or band press held at chest height, pressing directly forward) creates rotational force that the core must resist. It trains the deep stabilizers — the transverse abdominis and multifidus — that are critical for spine stability under asymmetrical loads like carrying or single-leg movements.",
        "Anti-lateral-flexion: suitcase carries (a heavy dumbbell or kettlebell held in one hand, walking) force the core to resist the body tipping toward the loaded side. This trains the quadratus lumborum and obliques under real load in a way that side planks alone cannot replicate.",
        "Breathing and bracing should be trained as a skill, not assumed. Learning to brace properly — the 360° cylinder described in the squat section — and to exhale against resistance (during the hardest part of a movement) is a transferable skill that carries over into every compound lift.",
      ],
      keyPoints: [
        "Core training = resistance to movement, not creation of it",
        "Anti-extension: planks, ab rollouts — resist the spine being pulled into extension",
        "Anti-rotation: Pallof press — resist twisting under load",
        "Anti-lateral-flexion: suitcase carries — resist tipping sideways",
        "Bracing is a trainable skill — 360° cylinder, not just sucking in",
      ],
      videos: [
        {
          title: "Core Training — Anti-Extension, Anti-Rotation Explained",
          youtubeId: "4BOTvaRaDjI",
          duration: "10:15",
          channel: "Barbell Medicine",
        },
        {
          title: "Ab Wheel Rollout — How to Do It Correctly",
          youtubeId: "p7j-7YKIUQA",
          duration: "7:44",
          channel: "Alan Thrall",
        },
        {
          title: "Pallof Press — The Core Exercise Most People Miss",
          youtubeId: "AH_QZLm_0-s",
          duration: "6:30",
          channel: "Barbell Medicine",
        },
      ],
    },
    {
      id: "abs",
      name: "Ab Training",
      summary:
        "Visible abs are mostly a nutrition outcome. Strong abs are a training outcome. The two are related but different. Training the abs through their full range — flexion, rotation, and loaded carries — builds the strength that also makes them visible when body fat allows it.",
      body: [
        "The rectus abdominis (the six-pack muscle) runs vertically from the sternum to the pelvis. It contracts to flex the spine — pulling the ribcage toward the pelvis. Crunches, leg raises, and cable crunches all train this. The common error in crunches is pulling the head with the hands rather than curling the ribcage toward the pelvis — this strains the neck and reduces ab involvement.",
        "Leg raises and hanging knee raises train the lower portion of the rectus abdominis and the hip flexors simultaneously. The critical cue is a posterior pelvic tilt at the top — tilting the pelvis backward to bring the lower abs fully into contraction. Without the pelvic tilt, leg raises are predominantly a hip flexor exercise.",
        "The obliques (internal and external) run diagonally and are responsible for rotation and lateral flexion. Bicycle crunches, cable rotations, and Russian twists train them. The obliques are also heavily involved in heavy compound lifts — they brace the torso during squats and deadlifts and are the stabilisers in overhead pressing.",
        "Cable crunches are one of the most underrated and underused ab exercises. By attaching a rope to a high cable pulley and kneeling, the abs are trained through a full range of motion under consistent tension — something bodyweight crunches cannot provide as the resistance diminishes at the top of the movement. The hips stay fixed; the ribcage pulls toward the pelvis.",
        "Ab training frequency: the abs recover quickly and can be trained 3-5 times per week. However, chasing ab soreness is not the goal — progressive overload is. Adding weight to cable crunches, extending ab rollout distance, and increasing the difficulty of loaded carries over time is what builds stronger abs, not adding more reps of the same exercise.",
      ],
      keyPoints: [
        "Curl the ribcage toward the pelvis — don't pull the head with your hands",
        "Leg raises: posterior pelvic tilt at the top or it's mostly hip flexors",
        "Cable crunches provide consistent tension through the full range — use them",
        "Obliques brace everything — train them through rotation and lateral resistance",
        "Progressive overload applies to ab training — add load, not just reps",
      ],
      videos: [
        {
          title: "Ab Training — What Actually Works",
          youtubeId: "DHD1-2P4jfk",
          duration: "11:30",
          channel: "Renaissance Periodization",
        },
        {
          title: "Cable Crunch — How to Do It for Maximum Ab Activation",
          youtubeId: "taI4XduLpTk",
          duration: "7:22",
          channel: "Alan Thrall",
        },
        {
          title: "Hanging Leg Raises — Correct Form & Progression",
          youtubeId: "Pr1ieGZ5ATk",
          duration: "8:15",
          channel: "Renaissance Periodization",
        },
      ],
    },
    {
      id: "bench",
      name: "Bench Press",
      summary:
        "The bench press is not just a chest exercise — it's a full upper-body push pattern. Leg drive, arch, shoulder blade retraction, and bar path all determine whether the press is safe and efficient or stressful on the shoulders.",
      body: [
        "Setup: shoulder blades retracted and depressed (pulled together and down) before the bar is unracked and maintained throughout. This creates a stable shelf for the bar and protects the shoulder joint. Bench pressing with loose, protracted shoulder blades loads the front of the shoulder (the AC joint and rotator cuff) and is the primary cause of bench-related shoulder injuries.",
        "The arch: a natural thoracic arch is both legal and biomechanically sensible — it shortens the range of motion slightly and keeps the shoulder in a safer position. The arch should come from the upper back (thoracic spine), not by bridging the lower back off the bench. A contact point on the upper back and glutes on the bench is the standard.",
        "Leg drive: the feet are planted flat on the floor (or on the bench for shorter lifters) and drive into the ground throughout the press. This creates full-body tension and transfers force from the legs through the torso into the bar. A bench press where the feet are floating or kicking has lost 15-20% of its potential force.",
        "Bar path: the bar does not travel straight up and down — it arcs. The bar is unracked over the lower chest/upper stomach, lowered to the lower chest (roughly the nipple line), and pressed back up and slightly toward the face. A bar path that goes straight up and down from the nipple line puts the shoulder in impingement position at lockout.",
        "Grip width: typically slightly wider than shoulder width — elbows at 45-75° to the torso at the bottom (not flared to 90°, not tucked to 0°). A wide grip shortens range of motion but increases shoulder stress. A narrow grip increases range of motion and tricep involvement. Most lifters do best slightly wider than shoulder width.",
      ],
      keyPoints: [
        "Shoulder blades retracted and depressed before the bar is unracked — hold it",
        "Arch comes from the upper back, not by bridging the lower back",
        "Feet flat, driving into the floor — leg drive transfers force into the bar",
        "Bar arcs: unrack over lower chest, lower to nipple line, press toward the face",
        "Elbows 45-75° to the torso at the bottom — not flared, not tucked",
      ],
      videos: [
        {
          title: "Bench Press Technique — Setup, Arch & Bar Path",
          youtubeId: "BYKScL2sgCs",
          duration: "12:44",
          channel: "Alan Thrall",
        },
        {
          title: "How to Bench Press — Beginner to Intermediate",
          youtubeId: "vcBig73ojpE",
          duration: "10:18",
          channel: "Barbell Medicine",
        },
        {
          title: "Shoulder-Safe Bench Press — Fixing the Setup",
          youtubeId: "SCVCLChPQEs",
          duration: "9:05",
          channel: "Renaissance Periodization",
        },
      ],
    },
  ],
  resources: [
    {
      title: "Starting Strength — Mark Rippetoe",
      type: "book",
      description:
        "The most thorough technical breakdown of the squat, deadlift, press, and bench press ever written. Dense with biomechanical detail. The reference text for barbell training fundamentals — correct as a starting point even if you later diverge from the programming.",
      url: "https://www.goodreads.com/book/show/2098799.Starting_Strength",
    },
    {
      title: "The Science and Practice of Strength Training — Zatsiorsky",
      type: "book",
      description:
        "The academic foundation of strength training methodology. Covers periodization, force-velocity relationships, and motor learning. More scientific than Starting Strength — essential reading once the basics are solid.",
      url: "https://www.goodreads.com/book/show/740483.Science_and_Practice_of_Strength_Training",
    },
    {
      title: "Alan Thrall — YouTube",
      type: "video",
      description:
        "Clear, no-nonsense technique breakdowns for the big compound lifts. Alan is particularly good on squat and deadlift mechanics, and his explanations are accessible without being dumbed down.",
      url: "https://www.youtube.com/@AlanThrall",
    },
    {
      title: "Renaissance Periodization — YouTube",
      type: "video",
      description:
        "Dr. Mike Israetel's channel covers hypertrophy science, programming, and technique. The best resource for understanding volume, frequency, and how to structure training for muscle growth specifically.",
      url: "https://www.youtube.com/@RenaissancePeriodization",
    },
    {
      title: "Barbell Medicine — Evidence-Based Training",
      type: "guide",
      description:
        "A team of physician-coaches applying evidence-based medicine to strength training. Particularly good on injury management, return to training, and debunking common gym myths with actual research.",
      url: "https://www.barbellmedicine.com",
    },
    {
      title: "ExRx — Exercise Prescription on the Net",
      type: "article",
      description:
        "The most comprehensive exercise database online. Muscle diagrams, technique instructions, and exercise classifications for thousands of movements. Good reference when programming accessory work.",
      url: "https://exrx.net",
    },
  ],
};
