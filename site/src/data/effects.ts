/**
 * The "what do you want to develop?" guide: each effect the manuscript promises,
 * with the exercises the text assigns to it. `why` quotes or paraphrases the
 * author's own claim so the reader can see where the link comes from.
 * role: primary = the text names this as the exercise's purpose;
 *       supporting = the text mentions the effect in passing, or the exercise prepares for it.
 */
export interface EffectEntry { slug: string; role: 'primary' | 'supporting'; why: string; }
export interface Effect {
  slug: string;
  title: string;           // noun phrase
  want: string;            // completes "I want to …"
  group: string;
  intro: string;           // what the text says about this effect, 1–3 sentences
  startWith?: string;      // slug of the recommended first step
  entries: EffectEntry[];
}

export const EFFECT_GROUPS = ['Foundations', 'Faculties of perception', 'Will and power', 'Body and energy', 'Healing', 'Inner states', 'Magical work'];

export const EFFECTS: Effect[] = [
  {
    slug: 'master-rhythm', title: 'The Master rhythm', want: 'establish the Master rhythm and start the system',
    group: 'Foundations',
    intro: 'Everything in the book rests on the 7 · 1 · 7 · 1 breath. The text says the First Master Arcane "establishes the Master rhythm", and that the Short Path of the seven Master Arcanes is "the seven keys of absolute liberation". Begin here whatever else you want.',
    startWith: 'first-master-arcane',
    entries: [
      { slug: 'first-master-arcane', role: 'primary', why: '"Arcane establishing the master rhythm" (Index). The seated template all other Master Arcanes follow.' },
      { slug: 'sun-and-moon-breath-posture', role: 'primary', why: 'Every Master Arcane starts by noting whether you are in Sun or Moon breath; this posture changes it in three minutes.' },
      { slug: 'master-system-postures', role: 'primary', why: 'The sitting and standing "signs" of the Master System, both to be held "(Master Breath)" in daily life.' },
      { slug: 'second-master-arcane', role: 'supporting', why: 'The standing form of the twelve breaths; the text pairs it with the First.' },
      { slug: 'third-master-arcane', role: 'supporting', why: 'Adds the affirmation "Breath is life" to the same twelve breaths.' },
    ],
  },
  {
    slug: 'clairvoyance', title: 'Sight and clairvoyance', want: 'develop sight, inner vision and clairvoyance',
    group: 'Faculties of perception',
    intro: 'The First Master Arcane "develops sight and clairvoyance"; the Seventh Lesser Arcane then trains the eyes step by step, from sun-gazing to "splitting the ether", the far-away gaze and crystal gazing, and promises "clairvoyance, thought form reading, aura, and psychometry".',
    startWith: 'first-master-arcane',
    entries: [
      { slug: 'first-master-arcane', role: 'primary', why: '"Develops sight and clairvoyance."' },
      { slug: 'concentration', role: 'primary', why: 'Concentration between the eyebrows; "being in passive state you will see the things… then it is clairvoyant state."' },
      { slug: 'splitting-the-ether', role: 'primary', why: '"The exercise used for splitting the ether, for clairvoyance": the third finger, the third candle, the third eye.' },
      { slug: 'crystal-gazing', role: 'primary', why: '"Now you can do crystal gazing. For clairvoyance and also to transmute the thoughts at a distance."' },
      { slug: 'inner-and-far-gaze', role: 'supporting', why: '"This develops the inner gaze… Practice until you can look thru things. This is far away gaze."' },
      { slug: 'sun-gazing', role: 'supporting', why: 'Gazing at the Sun and working the after-image "to help to develop this faculty".' },
      { slug: 'sky-gazing', role: 'supporting', why: '"Makes eyes sensitive to ultra violet and infra-red rays and develops faculty of seeing aura."' },
      { slug: 'eye-muscle-exercises', role: 'supporting', why: 'Control of the eye muscles, convergence and crossing, as groundwork for the gazes.' },
      { slug: 'exciting-the-life-energy', role: 'supporting', why: '"Strengthens the penetrating quality of the eyes."' },
    ],
  },
  {
    slug: 'clairaudience', title: 'Hearing and clairaudience', want: 'develop hearing and clairaudience',
    group: 'Faculties of perception',
    intro: 'The Second Master Arcane "develops hearing, clairaudience and harmony"; the text ties hearing to the great toe and the feet, and the Sixth Lesser Arcane teaches listening inward to the "Voice of the Silence".',
    startWith: 'second-master-arcane',
    entries: [
      { slug: 'second-master-arcane', role: 'primary', why: '"It develops clairaudience and harmony."' },
      { slug: 'soundless-sound-aum', role: 'primary', why: 'With the ears stopped: the trumpet, the bee, the bell, the flute, then "the hum of the rhythm of the world".' },
      { slug: 'care-of-the-feet', role: 'supporting', why: '"Great toe is connected with hearing (auditory nerve) and coordinates harmony, and rhythm in the body."' },
      { slug: 'foot-massage', role: 'supporting', why: 'Massage and pulling of the toes, "especially the great toe".' },
    ],
  },
  {
    slug: 'inner-sound', title: 'The inner sound, Aum', want: 'hear the soundless sound, the "Aum"',
    group: 'Faculties of perception',
    intro: '"This is hearing of the vibration of the world, sound of rhythm which permeates the universe the Holy and Sacred Aum." The posture with the thumbs in the ears is shared with the dream-consciousness work.',
    startWith: 'soundless-sound-aum',
    entries: [
      { slug: 'soundless-sound-aum', role: 'primary', why: 'The exercise itself; "find the true sound of Aum and try to learn the sounding of it".' },
      { slug: 'second-master-arcane', role: 'supporting', why: '"To get the best results, and have them the quickest way, start the exercise with II Master Arcane."' },
      { slug: 'first-master-arcane', role: 'supporting', why: 'The twelve Master breaths are taken first, in the listening posture.' },
    ],
  },
  {
    slug: 'will', title: 'Will and command', want: 'strengthen the will and learn to command',
    group: 'Will and power',
    intro: 'The Fourth Master Arcane "develops the commanding will, and electricity storing it in ganglia of the body ready to use". The Fourteenth Arcane turns a desire into a command; the Creation Exercise transmutes desire "into will power"; developing the thumbs "strengthens the will power".',
    startWith: 'fourth-master-arcane',
    entries: [
      { slug: 'fourth-master-arcane', role: 'primary', why: '"Developing the commanding will."' },
      { slug: 'demand-command', role: 'primary', why: '"I demand!" "I command": the pounding fist and the three silent hand positions.' },
      { slug: 'creation-exercise', role: 'primary', why: '"Awakening of the desire and transmuting it into will power."' },
      { slug: 'hand-exercises-and-thumbs', role: 'supporting', why: '"This exercise develops the thumbs, and developing them grows and strengthens the will power."' },
      { slug: 'order-of-the-serpent', role: 'supporting', why: 'Tensing and relaxing the medulla "at will"; the text calls it the "straight path in self-realisation and mastery".' },
    ],
  },
  {
    slug: 'materialise', title: 'Obtaining what you desire', want: 'make a desire come true',
    group: 'Will and power',
    intro: 'The Creation Exercise "materialises things you want"; Demand-Command sends the wish "as ripples on the ether"; the Magical Projection works "in scale" on the altar. The conclusion says: "Instead of going after things command them to come to you."',
    startWith: 'creation-exercise',
    entries: [
      { slug: 'creation-exercise', role: 'primary', why: '"It materialises things you want… used in everything of importance."' },
      { slug: 'demand-command', role: 'primary', why: '"Striving to attain the things in life… inhale deeply… bring the arm and the closed tense fist down on the desk."' },
      { slug: 'magical-projection', role: 'supporting', why: '"Sending the loaded with feelings and willified thought is the work of magick."' },
      { slug: 'fourth-master-arcane', role: 'supporting', why: 'The will and stored "electricity" that the other two draw on.' },
      { slug: 'sixth-master-arcane', role: 'supporting', why: 'The Creation Exercise "uses same powers consciously directed, as are awakened in the Sixth Master Arcane".' },
    ],
  },
  {
    slug: 'protection', title: 'Protection and facing enemies', want: 'protect myself and face adversaries',
    group: 'Will and power',
    intro: 'The Ritual of the Pentagram builds "the wall of absolute protection against adverse powers and thoughts"; the Second Master Arcane "teaches us how to face friends and enemies, how to defend and aggress"; the Master rhythm itself is called liberation "from adverse surroundings, influences and hereditary chains".',
    startWith: 'ritual-of-the-pentagram',
    entries: [
      { slug: 'ritual-of-the-pentagram', role: 'primary', why: 'Drawn "to the four corners of the Earth, above and below" it is the wall of protection; with the thrust, a weapon.' },
      { slug: 'second-master-arcane', role: 'primary', why: '"How to face friends and enemies. How to defend and aggress."' },
      { slug: 'master-system-postures', role: 'supporting', why: 'The standing sign "when you meet another human being".' },
      { slug: 'magical-projection', role: 'supporting', why: 'The circle "is protection from your own volitional and intentional emanations"; the words of Master Protection.' },
    ],
  },
  {
    slug: 'influence', title: 'Tuning in with others', want: 'connect with, tune or influence another person',
    group: 'Will and power',
    intro: 'The Fifteenth Arcane establishes "a mental connection with the person present or absent" by breathing in unison; the third-eye exercise "gives the very great power over human beings and animals"; telepathic messages go out on the yawning breath or through the crystal.',
    startWith: 'mental-connection',
    entries: [
      { slug: 'mental-connection', role: 'primary', why: 'Breathing in unison, tuning crowds with "Aum", the object or effigy for a person at a distance.' },
      { slug: 'splitting-the-ether', role: 'supporting', why: 'Looking into someone\'s eyes "until you will see the third eye in between… gives the very great power over human beings and animals".' },
      { slug: 'crystal-gazing', role: 'supporting', why: '"For telepathic transference, use same means like crystal gazing, only… repeat the formula you want to convey."' },
      { slug: 'yawning-exercise', role: 'supporting', why: '"The best way of sending out of telepathic messages is to begin with yawning exercise."' },
      { slug: 'demand-command', role: 'supporting', why: 'The silent form "when necessity arises to use it on human being directly".' },
    ],
  },
  {
    slug: 'energy', title: 'Energy when tired', want: 'recover energy quickly when tired',
    group: 'Body and energy',
    intro: 'The Fourth Lesser Arcane is "a quick helping exercise… to be used when you are tired physically, mentally, spiritually or psychically"; yawning is the body\'s own way "to stir up the spinal fluid"; the rods of power are said to raise the energy "one hundred percent" for a day.',
    startWith: 'exciting-the-life-energy',
    entries: [
      { slug: 'exciting-the-life-energy', role: 'primary', why: 'One tensed breath and "Ha": "it brings alertness and magnetic and electric powers of the body into play".' },
      { slug: 'yawning-exercise', role: 'primary', why: '"Yawning the great factor in adjusting the energy in the spine."' },
      { slug: 'recharging-nervous-energy', role: 'primary', why: 'The Sun and Moon rods, "raising the potential of energy one hundred percent, and lasting for a day and a night".' },
      { slug: 'jaw-exercise', role: 'supporting', why: '"You will discover the one most important key to energy and power."' },
      { slug: 'nape-exercise', role: 'supporting', why: 'For "the expansion of energies"; develops the medulla.' },
      { slug: 'rejuvenation-of-energy', role: 'supporting', why: 'The theory of the spinal fluid as "body battery of life energy".' },
      { slug: 'foot-massage', role: 'supporting', why: '"It will awaken nerves, bring about increased stimulation of blood."' },
    ],
  },
  {
    slug: 'rejuvenation', title: 'Rejuvenation of the body', want: 'rejuvenate face, head, blood and glands',
    group: 'Body and energy',
    intro: 'The Twelfth Arcane "rejuvenates brain, hearing, taste, smell, teeth, hair, skin and muscles" by purifying the blood and directing it to the head; the Eleventh cleans the bowel; the Thirteenth renews the energy in the spinal fluid "for increasing span of life".',
    startWith: 'face-and-head-rejuvenation',
    entries: [
      { slug: 'face-and-head-rejuvenation', role: 'primary', why: 'The kneel-and-prostrate cycle "sending blood to head and face".' },
      { slug: 'blood-purification-regimen', role: 'primary', why: 'Juices, milk and enemas: "purifying and strengthening of the blood".' },
      { slug: 'thyroid-exercises', role: 'primary', why: 'Secretions "which are rejuvenating to the tissues and the body".' },
      { slug: 'mullah-mudra', role: 'supporting', why: '"Also for rejuvenation and cleaning of the intestinal tract."' },
      { slug: 'rejuvenation-of-energy', role: 'supporting', why: '"Rejuvenation of energy and increasing span of life."' },
      { slug: 'blood-circulation-control', role: 'supporting', why: '"To renew and clean the tissues in different parts of the body you have to learn the way of sending the blood to them."' },
      { slug: 'neck-massage-blood-pressure', role: 'supporting', why: '"To change the blood pressure, making it normal."' },
    ],
  },
  {
    slug: 'balance', title: 'Balance, weight and levitation', want: 'gain balance and control over the body\'s weight',
    group: 'Body and energy',
    intro: 'The Fifth Master Arcane "gives control over attraction of the Earth (weight), enabling to raise in the air, fly and walk on water"; the Second works "tension and relaxation, balance". The Sixth warns: "you do not want levitation to occur".',
    startWith: 'fifth-master-arcane',
    entries: [
      { slug: 'fifth-master-arcane', role: 'primary', why: '"Control over attraction of the Earth. (weight)"' },
      { slug: 'second-master-arcane', role: 'primary', why: '"Tension and relaxation, balance" (Index); rising on the balls of the feet.' },
      { slug: 'sixth-master-arcane', role: 'supporting', why: 'Kneeling balanced on the balls of the feet; "if your knees rise from the floor or body rises in the air, stop at once".' },
    ],
  },
  {
    slug: 'healing-others', title: 'Healing others', want: 'heal, stop pain or bleeding, lay on hands',
    group: 'Healing',
    intro: 'The Fifth Lesser Arcane heals "wounds, stop[s] bleeding, remove[s] pain" with breath and the silent word; the hands are charged for it by the magnetic-electric exercise; the trance of the Sixth Master Arcane "gives the power of laying on of hands".',
    startWith: 'healing-power',
    entries: [
      { slug: 'healing-power', role: 'primary', why: 'Blowing the breath and "Yat-Ha-Ah-Hu-Vai-Rio — Om" over the affected part.' },
      { slug: 'laying-on-of-hands', role: 'primary', why: '"Giving and conveying hand is the right hand… the left hand… as a receiving pole for the healing power."' },
      { slug: 'magnetic-electric-hands', role: 'primary', why: '"Making them pour out the healing current, used in putting on hands to alleviate pain."' },
      { slug: 'sixth-master-arcane', role: 'supporting', why: '"The trance state however is healing and gives the power of laying on of hands."' },
      { slug: 'doctrine-of-the-heart', role: 'supporting', why: 'The two fingers on the heart: "It also is used in healing."' },
      { slug: 'creation-exercise', role: 'supporting', why: '"Cures diseases yours and others."' },
    ],
  },
  {
    slug: 'healing-self', title: 'Healing and cleansing oneself', want: 'treat my own digestion, bowel, blood pressure or pain',
    group: 'Healing',
    intro: 'Several practical remedies are scattered through the later arcanes: breathing through the rectum for "gastritis, appendicitis"; the tongue stick for stomach and sex disorders; neck massage for blood pressure; the Creation Exercise for self-anaesthesia.',
    startWith: 'mullah-mudra',
    entries: [
      { slug: 'mullah-mudra', role: 'primary', why: '"Makes away with the indigestions and constipation… very healing in case of [gastritis?], and appendix."' },
      { slug: 'tongue-stick-exercise', role: 'primary', why: '"To cure stomach conditions and also to make bowels move, and improve the general tone of sex organs."' },
      { slug: 'neck-massage-blood-pressure', role: 'primary', why: 'Massage below the ears "to change the blood pressure, making it normal".' },
      { slug: 'blood-purification-regimen', role: 'supporting', why: 'The juice, milk and enema regimen.' },
      { slug: 'care-of-the-feet', role: 'supporting', why: 'Dry, oiled, well-clothed feet "prevent colds, coughs, and affections of ears, eyes and throat".' },
      { slug: 'creation-exercise', role: 'supporting', why: '"Will make you insensible to pain (self anaesthesia)."' },
    ],
  },
  {
    slug: 'concentration', title: 'Concentration, meditation, the Light', want: 'learn to concentrate, meditate and see the Light',
    group: 'Inner states',
    intro: 'The Seventh Lesser Arcane defines the ladder: attention, concentration ("setting the heart on the object"), meditation or contemplation, and "the Light… so bright, that the light of the Sun will seem only a shadow".',
    startWith: 'concentration',
    entries: [
      { slug: 'concentration', role: 'primary', why: 'The thought held at the point between the eyebrows; "always look for the light, and it will come to you".' },
      { slug: 'first-master-arcane', role: 'supporting', why: 'Concentration begins by doing "the complete First Master Arcane".' },
      { slug: 'third-master-arcane', role: 'supporting', why: '"Holding the constant attraction of great centralising principle."' },
      { slug: 'soundless-sound-aum', role: 'supporting', why: 'The same inward turn of the eyes, with the ears stopped.' },
      { slug: 'doctrine-of-the-heart', role: 'supporting', why: 'Withdrawing within, watching the heartbeat, "you worship then and commune".' },
    ],
  },
  {
    slug: 'love', title: 'Love, discrimination and the heart', want: 'open the heart, develop love and discrimination',
    group: 'Inner states',
    intro: 'The Doctrine of the Heart "is the development of love and discrimination"; the heart "should be consulted in every important undertaking". The Third Master Arcane "develops good taste and judgement of distance".',
    startWith: 'doctrine-of-the-heart',
    entries: [
      { slug: 'doctrine-of-the-heart', role: 'primary', why: '"Consciously fill it with love… the holy word which opens the heart."' },
      { slug: 'third-master-arcane', role: 'supporting', why: '"Develops good taste and judgement of distance."' },
      { slug: 'mental-connection', role: 'supporting', why: '"The people that love each other, tune in on each other vibration by kissing."' },
    ],
  },
  {
    slug: 'dreams', title: 'Dream consciousness', want: 'become conscious in my dreams',
    group: 'Inner states',
    intro: 'The Eighth Arcane leads to "the dream state, when one is fully awake outside of the body, during the sleep": two days of mantram, a week apart, with fasting, then "awakening in it to the dream consciousness". The sleeping postures and the head to the North belong to the same work.',
    startWith: 'dream-consciousness',
    entries: [
      { slug: 'dream-consciousness', role: 'primary', why: 'The two-day mantram programme and the notes on sleep.' },
      { slug: 'soundless-sound-aum', role: 'supporting', why: 'The posture is "exactly like the sixth L. Arcane — Soundless Sound Aum".' },
      { slug: 'sun-and-moon-breath-posture', role: 'supporting', why: 'Falling asleep on the left or right side to choose the breath and the planes it feeds.' },
    ],
  },
  {
    slug: 'trance', title: 'Trance and hibernation', want: 'enter trance, catalepsy or hibernation',
    group: 'Inner states',
    intro: 'The Sixth Master Arcane may pass into "a sleep or trance state"; the Creation Exercise "will put you in trance, cataleptic state or in lethargic (hibernating) condition"; Kechara and Mullah Mudra are "preparation for hibernating (going into lethargic trance)" for "3 to 6 months".',
    startWith: 'sixth-master-arcane',
    entries: [
      { slug: 'sixth-master-arcane', role: 'primary', why: '"When things suddenly go dark… you will go into a sleep or trance state."' },
      { slug: 'creation-exercise', role: 'primary', why: '"Induces cataleptic state, lethargic condition, self-anaesthesia."' },
      { slug: 'kechara-mudra', role: 'primary', why: '"Preparation for hibernating… enables one to center the life energies in the head."' },
      { slug: 'mullah-mudra', role: 'primary', why: '"Used in the development for hibernation."' },
    ],
  },
  {
    slug: 'self-knowledge', title: 'Self-knowledge and mastery of thought', want: 'know myself and master my thought',
    group: 'Inner states',
    intro: '"To know thyself — is to go inside of one\'s entity and to watch study and apply." The three tension points in the head "are the keys and the locks to knowledge of yourself"; thought is formed in a tension the medulla can relax or tense.',
    startWith: 'order-of-the-serpent',
    entries: [
      { slug: 'order-of-the-serpent', role: 'primary', why: '"Learn to know those points within yourself, they are the keys and the locks to knowledge of yourself."' },
      { slug: 'concentration', role: 'primary', why: 'Turning a thought "on all the modes and manners… this is called careful observation".' },
      { slug: 'demand-command', role: 'supporting', why: '"Concentrate on the self realisation. — I, — I am — ponder on the truth of your being."' },
      { slug: 'first-master-arcane', role: 'supporting', why: 'Master thought is reached "by relaxation in positive attitude", the posture of the seated arcanes.' },
    ],
  },
  {
    slug: 'weather', title: 'Weather control', want: 'work on the weather',
    group: 'Magical work',
    intro: 'The Seventh Master Arcane is "a purely magical work, connected with weather control": sighing, moaning and roaring breaths over a vessel of water, with the word I-Hau-Haa, "with help of the mighty spirits El Borach (spirit of the lightning) and Waat (spirit of the wind)".',
    startWith: 'seventh-master-arcane',
    entries: [
      { slug: 'seventh-master-arcane', role: 'primary', why: '"Changes surrounding climatic conditions."' },
    ],
  },
  {
    slug: 'magic', title: 'Ceremonial and projection', want: 'do ceremonial and projective magic',
    group: 'Magical work',
    intro: 'The Compendium defines magick as "practical application… to make things appear, disappear and change one thing into the other". The manuscript gives the pentagram ritual, the rods and metals, and an unfinished chapter on the magical circle, altar and wand.',
    startWith: 'ritual-of-the-pentagram',
    entries: [
      { slug: 'ritual-of-the-pentagram', role: 'primary', why: '"Projecting of power": the pentagram drawn in the air with Yat-Ha-Ah-Hu-Vo.' },
      { slug: 'magical-projection', role: 'primary', why: '"Invocation of the host of angels or powers"; circle, altar, wand, the triangle for elementals.' },
      { slug: 'recharging-nervous-energy', role: 'supporting', why: 'The rods of power, Auricallum and the planetary metals.' },
      { slug: 'first-master-arcane', role: 'supporting', why: '"Charge your body with powers according to the 1st Master Arcane before starting the projection."' },
    ],
  },
  {
    slug: 'conception', title: 'Conception and the sex of a child', want: 'influence conception and the sex of a child',
    group: 'Magical work',
    intro: 'The Sixteenth Arcane makes the sex of the child depend on the Sun or Moon breath of each parent at the moment of union, and the "Om" of the man\'s final breath the conveyor of the spark of life.',
    startWith: 'birth-control-and-predestination',
    entries: [
      { slug: 'birth-control-and-predestination', role: 'primary', why: 'The postures and breaths that, the text says, decide a male or female child.' },
      { slug: 'sun-and-moon-breath-posture', role: 'supporting', why: 'The lying postures that establish the Sun or Moon breath.' },
      { slug: 'tongue-stick-exercise', role: 'supporting', why: '"Improve the general tone of sex organs."' },
    ],
  },
];
