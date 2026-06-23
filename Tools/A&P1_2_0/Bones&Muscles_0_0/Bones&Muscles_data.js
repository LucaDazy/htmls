// A&P 1 Master Database: Bones & Muscles
// t: type ('b' = bone, 'm' = muscle)
// p: priority (1 = major, 2 = minor)
// r: region (bones), l: landmarks (bones)
// o: origin (muscles), i: insertion (muscles), a: action (muscles)

const rawDB = [
    // --- OSTEOLOGY (BONES) - PRIORITY 1 ---
    { t: 'b', p: 1, n: 'Frontal Bone', r: 'Axial (Cranial)', l: 'Supraorbital foramen' },
    { t: 'b', p: 1, n: 'Parietal Bone', r: 'Axial (Cranial)', l: 'Forms vault/roof of skull' },
    { t: 'b', p: 1, n: 'Temporal Bone', r: 'Axial (Cranial)', l: 'Squamous region, petrous region, zygomatic process, mandibular fossa, mastoid process, styloid process, external auditory meatus' },
    { t: 'b', p: 1, n: 'Sphenoid Bone', r: 'Axial (Cranial)', l: 'Greater wings, lesser wings, sella turcica (hypophyseal fossa), pterygoid process, superior orbital fissure, foramen rotundum, foramen ovale, foramen spinosum, optic canal' },
    { t: 'b', p: 1, n: 'Occipital Bone', r: 'Axial (Cranial)', l: 'Occipital condyles, foramen magnum, external occipital protuberance' },
    { t: 'b', p: 1, n: 'Maxilla', r: 'Axial (Facial)', l: 'Alveolar margin, palatine process, infraorbital foramen' },
    { t: 'b', p: 1, n: 'Mandible', r: 'Axial (Facial)', l: 'Body, alveolar margin, ramus, angle, mandibular condyle, coronoid process, mental foramen, mandibular foramen' },
    { t: 'b', p: 1, n: 'Sternum', r: 'Axial (Thoracic Cage)', l: 'Manubrium, body, xiphoid process' },
    { t: 'b', p: 1, n: 'Ribs', r: 'Axial (Thoracic Cage)', l: 'True (vertebrosternal), False (vertebrochondral), Floating' },
    { t: 'b', p: 1, n: 'Clavicle', r: 'Appendicular (Pectoral Girdle)', l: 'Sternal end, acromial end' },
    { t: 'b', p: 1, n: 'Scapula', r: 'Appendicular (Pectoral Girdle)', l: 'Body, spine, superior/medial/lateral borders, superior/inferior/lateral angles, glenoid cavity, coracoid process, acromion process, subscapular fossa' },
    { t: 'b', p: 1, n: 'Humerus', r: 'Appendicular (Upper Limb)', l: 'Head, anatomical/surgical neck, greater/lesser tubercle, intertubercular groove, shaft, deltoid tuberosity, medial/lateral epicondyle, coronoid/olecranon fossa, capitulum, trochlea' },
    { t: 'b', p: 1, n: 'Radius', r: 'Appendicular (Forearm)', l: 'Head, radial tuberosity, styloid process, ulnar notch' },
    { t: 'b', p: 1, n: 'Ulna', r: 'Appendicular (Forearm)', l: 'Olecranon process, trochlear notch, coronoid process, radial notch, head, styloid process' },
    { t: 'b', p: 1, n: 'Os Coxa (Pelvis)', r: 'Appendicular (Pelvic Girdle)', l: 'Ilium (iliac fossa, arcuate line, iliac crest, ASIS, AIIS, PSIS, PIIS, greater sciatic notch), Ischium (ischial spine, lesser sciatic notch, ischial tuberosity), Pubis (superior/inferior ramus, pubic symphysis), Acetabulum, Obturator foramen' },
    { t: 'b', p: 1, n: 'Femur', r: 'Appendicular (Lower Limb)', l: 'Head, neck, shaft, greater/lesser trochanter, linea aspera, medial/lateral epicondyles, medial/lateral condyles' },
    { t: 'b', p: 1, n: 'Tibia', r: 'Appendicular (Lower Limb)', l: 'Medial/lateral condyles, intercondylar eminence, tibial tuberosity, anterior crest, medial malleolus' },
    { t: 'b', p: 1, n: 'Fibula', r: 'Appendicular (Lower Limb)', l: 'Head, lateral malleolus' },

    // --- OSTEOLOGY (BONES) - PRIORITY 2 ---
    { t: 'b', p: 2, n: 'Ethmoid Bone', r: 'Axial (Cranial)', l: 'Cribriform plate, crista galli, superior/middle nasal conchae, perpendicular plate' },
    { t: 'b', p: 2, n: 'Zygomatic Bone', r: 'Axial (Facial)', l: 'Forms the cheekbone' },
    { t: 'b', p: 2, n: 'Palatine Bone', r: 'Axial (Facial)', l: 'Horizontal plate, vertical plate' },
    { t: 'b', p: 2, n: 'Lacrimal Bone', r: 'Axial (Facial)', l: 'Lacrimal fossa' },
    { t: 'b', p: 2, n: 'Nasal Bone', r: 'Axial (Facial)', l: 'Forms the bridge of the nose' },
    { t: 'b', p: 2, n: 'Vomer', r: 'Axial (Facial)', l: 'Forms the inferior nasal septum' },
    { t: 'b', p: 2, n: 'Inferior Nasal Concha', r: 'Axial (Facial)', l: 'Lateral walls of nasal cavity' },
    { t: 'b', p: 2, n: 'Hyoid Bone', r: 'Axial (Neck)', l: 'Body, greater cornua, lesser cornua' },
    { t: 'b', p: 2, n: 'Cervical Vertebrae', r: 'Axial (Spine)', l: 'Atlas (C1), Axis (C2), odontoid process (dens), vertebra prominens (C7), transverse foramina' },
    { t: 'b', p: 2, n: 'Thoracic & Lumbar Vertebrae', r: 'Axial (Spine)', l: 'Body, vertebral foramen, spinous process, transverse process, superior/inferior articular processes, intervertebral disc' },
    { t: 'b', p: 2, n: 'Sacrum & Coccyx', r: 'Axial (Spine)', l: 'Alae, sacral foramina, sacral canal, sacral promontory, median sacral crest, sacral hiatus' },
    { t: 'b', p: 2, n: 'Carpals', r: 'Appendicular (Wrist)', l: 'Scaphoid, Lunate, Triquetrum, Pisiform, Trapezium, Trapezoid, Capitate, Hamate' },
    { t: 'b', p: 2, n: 'Metacarpals & Phalanges (Hand)', r: 'Appendicular (Hand)', l: 'Metacarpals I-V, Phalanges I-V (proximal, middle, distal)' },
    { t: 'b', p: 2, n: 'Patella', r: 'Appendicular (Knee)', l: 'Medial and lateral facets' },
    { t: 'b', p: 2, n: 'Tarsals', r: 'Appendicular (Ankle)', l: 'Calcaneus, Talus, Navicular, Cuboid, Cuneiforms (medial, intermediate, lateral)' },
    { t: 'b', p: 2, n: 'Metatarsals & Phalanges (Foot)', r: 'Appendicular (Foot)', l: 'Metatarsals I-V, Phalanges I-V (proximal, middle, distal)' },

    // --- MYOLOGY (MUSCLES) - PRIORITY 1 ---
    { t: 'm', p: 1, n: 'Masseter', o: 'Zygomatic arch', i: 'Lateral surface of mandibular ramus and angle', a: 'Elevates mandible & closes jaw (primary muscle of mastication)' },
    { t: 'm', p: 1, n: 'Sternocleidomastoid', o: 'Manubrium of sternum & clavicle', i: 'Mastoid process of temporal bone', a: 'Flexes neck & rotates head' },
    { t: 'm', p: 1, n: 'Pectoralis Major', o: 'Clavicle, sternum & ribs (2-6)', i: 'Greater tubercle & intertubercular groove of the humerus', a: 'Flexes, adducts, & medially rotates humerus' },
    { t: 'm', p: 1, n: 'Latissimus Dorsi', o: 'Spinous processes of inferior thoracic and all lumbar vertebrae, ribs (8-12) & iliac crest', i: 'Intertubercular groove of humerus', a: 'Extends, adducts, & medially rotates humerus' },
    { t: 'm', p: 1, n: 'Deltoid', o: 'Clavicle & scapula', i: 'Deltoid tuberosity of humerus', a: 'Prime mover of humerus abduction; aids in flexion, extension, and rotation of the humerus' },
    { t: 'm', p: 1, n: 'Biceps Brachii', o: 'Coracoid process of scapula', i: 'Radial tuberosity', a: 'Flexes forearm at elbow & supinates forearm' },
    { t: 'm', p: 1, n: 'Triceps Brachii', o: 'Scapula & humerus', i: 'Olecranon process of ulna', a: 'Extends forearm at elbow' },
    { t: 'm', p: 1, n: 'Rectus Abdominis', o: 'Pubis', i: 'Costal cartilage of ribs 5-7 & xiphoid process of sternum', a: 'Depresses ribs, flexes vertebral column' },
    { t: 'm', p: 1, n: 'Diaphragm', o: 'Xiphoid process, cartilages of ribs 4-10, anterior surfaces of lumbar vertebrae', i: 'Central tendonous sheet', a: 'Contraction expands thoracic cavity, compresses abdominopelvic cavity' },
    { t: 'm', p: 1, n: 'Gluteus Maximus', o: 'Iliac crest, sacrum, & coccyx', i: 'Femur & iliotibial tract', a: 'Extends & laterally rotates thigh' },
    { t: 'm', p: 1, n: 'Rectus Femoris', o: 'Anterior inferior iliac spine & rim of acetabulum', i: 'Tibial tuberosity via patellar tendon', a: 'Extends lower leg at knee & flexes thigh at the hip' },
    { t: 'm', p: 1, n: 'Biceps Femoris', o: 'Ischial tuberosity & linea aspera', i: 'Lateral condyle of tibia & fibular head', a: 'Flexes lower leg at knee, extends & laterally rotates thigh' },
    { t: 'm', p: 1, n: 'Gastrocnemius', o: 'Condyles of femur', i: 'Calcaneous via calcaneal tendon', a: 'Plantar flexes foot, flexes lower leg at knee (when foot is dorsiflexed)' },
    { t: 'm', p: 1, n: 'Trapezius', o: 'Occipital bone, ligamentum nuchae, and spinous processes of all thoracic vertebrae', i: 'Clavicle & acromion and spine of scapula', a: 'Elevates, retracts, depresses, or rotates scapula; elevates clavicle; extends neck' },

    // --- MYOLOGY (MUSCLES) - PRIORITY 2 ---
    { t: 'm', p: 2, n: 'Frontalis', o: 'Epicranial aponeurosis', i: 'Skin of eyebrow, bridge of nose', a: 'Raises eyebrows, wrinkles forehead' },
    { t: 'm', p: 2, n: 'Orbicularis Oculi', o: 'Medial margin of orbit', i: 'Skin around eyelid', a: 'Closes eye' },
    { t: 'm', p: 2, n: 'Zygomaticus', o: 'Zygomatic bone', i: 'Corner of mouth', a: 'Retracts and elevates corner of mouth (smiling)' },
    { t: 'm', p: 2, n: 'Orbicularis Oris', o: 'Maxillary bone & mandible', i: 'Lips', a: 'Compresses, purses lips (kissing)' },
    { t: 'm', p: 2, n: 'Buccinator', o: 'Molar regions of maxilla & mandible', i: 'Orbicularis oris', a: 'Compresses cheeks (whistling)' },
    { t: 'm', p: 2, n: 'Temporalis', o: 'Temporal bone', i: 'Coronoid process of mandible', a: 'Elevates mandible, closes jaw' },
    { t: 'm', p: 2, n: 'Platysma', o: 'Fascia of chest & neck', i: 'Mandible & skin of cheek', a: 'Tenses skin of neck & depresses lower lip / mandible (frowning)' },
    { t: 'm', p: 2, n: 'Digastric', o: 'Mandible & mastoid process of temporal bone', i: 'Hyoid', a: 'Depresses mandible & elevates larynx' },
    { t: 'm', p: 2, n: 'Stylohyoid', o: 'Styloid process of temporal bone', i: 'Hyoid', a: 'Elevates larynx' },
    { t: 'm', p: 2, n: 'Mylohyoid', o: 'Medial surface of mandible', i: 'Hyoid', a: 'Elevates floor of mouth and hyoid bone; depresses mandible' },
    { t: 'm', p: 2, n: 'Sternohyoid', o: 'Manubrium of sternum & clavicle', i: 'Hyoid', a: 'Depresses hyoid & larynx' },
    { t: 'm', p: 2, n: 'Sternothyroid', o: 'Manubrium of sternum & 1st costal cartilage', i: 'Thyroid cartilage of larynx', a: 'Depresses hyoid & larynx' },
    { t: 'm', p: 2, n: 'Scalenes', o: 'Transverse processes of cervical vertebrae', i: 'Superior surfaces of ribs 1 and 2', a: 'Elevate ribs or flex neck' },
    { t: 'm', p: 2, n: 'Serratus Anterior', o: 'Upper ribs (1-9)', i: 'Scapula', a: 'Protracts shoulder; upward rotation of scapula' },
    { t: 'm', p: 2, n: 'Pectoralis Minor', o: 'Upper ribs (3-5)', i: 'Coracoid process of scapula', a: 'Depresses and protracs shoulder; downward rotation of scapula; elevates ribs' },
    { t: 'm', p: 2, n: 'Teres Major', o: 'Inferior angle of scapula', i: 'Intertubercular groove of humerus', a: 'Extends, adducts, & medially rotates humerus' },
    { t: 'm', p: 2, n: 'Teres Minor', o: 'Lateral border of scapula', i: 'Greater tubercle of humerus', a: 'Laterally rotates humerus' },
    { t: 'm', p: 2, n: 'Subscapularis', o: 'Subscapular fossa of scapula', i: 'Lesser tubercle of humerus', a: 'Medial rotation of humerus' },
    { t: 'm', p: 2, n: 'Levator Scapulae', o: 'Transverse processes of cervical vertebrae (1-4)', i: 'Scapula', a: 'Elevates scapula' },
    { t: 'm', p: 2, n: 'Infraspinatus', o: 'Infraspinous fossa of scapula', i: 'Greater tubercle of humerus', a: 'Lateral rotation of humerus' },
    { t: 'm', p: 2, n: 'Supraspinatus', o: 'Supraspinous fossa of scapula', i: 'Greater tubercle of humerus', a: 'Abduction of the humerus' },
    { t: 'm', p: 2, n: 'Rhomboid Major', o: 'Spinous processes of upper thoracic vertebrae', i: 'Medial border of scapula', a: 'Adducts scapula & downward rotation' },
    { t: 'm', p: 2, n: 'Rhomboid Minor', o: 'Spinous processes of vertebrae C7 to T1', i: 'Medial border of scapula', a: 'Adducts scapula & downward rotation' },
    { t: 'm', p: 2, n: 'Erector Spinae', o: 'Iliac crest, vertebrae, and ribs 3-6', i: 'Ribs and vertebrae above the origin', a: 'Extends vertebral column and/or neck; lateral flexion of vertebral column' },
    { t: 'm', p: 2, n: 'External Oblique', o: 'Ribs 5-12', i: 'Iliac crest & linea alba', a: 'Compresses abdomen, depresses ribs & flexes spine' },
    { t: 'm', p: 2, n: 'Internal Oblique', o: 'Iliac crest and lumbodorsal fascia', i: 'Inferior ribs, xiphoid process & linea alba', a: 'Compresses abdomen, depresses ribs & flexes spine' },
    { t: 'm', p: 2, n: 'Transversus Abdominis', o: 'Iliac crest, lower ribs (6-12), and lumbodorsal fascia', i: 'Linea alba & pubis', a: 'Compresses abdomen' },
    { t: 'm', p: 2, n: 'External Intercostals', o: 'Inferior border of each rib', i: 'Superior border of rib below', a: 'Elevates ribs during inspiration' },
    { t: 'm', p: 2, n: 'Internal Intercostals', o: 'Superior border of each rib', i: 'Inferior border of rib above', a: 'Depresses ribs during expiration' },
    { t: 'm', p: 2, n: 'Quadratus Lumborum', o: 'Iliac crest and iliolumbar ligament', i: 'Last rib and transverse processes of lumbar vertebrae', a: 'Together, depress ribs; alone flexes vertebral column laterally' },
    { t: 'm', p: 2, n: 'Brachialis', o: 'Anterior distal surface of humerus', i: 'Coronoid process of ulna', a: 'Flexes forearm at elbow' },
    { t: 'm', p: 2, n: 'Brachioradialis', o: 'Humerus (ridge superior to lateral epicondyle)', i: 'Styloid process of radius', a: 'Flexes forearm at elbow' },
    { t: 'm', p: 2, n: 'Supinator', o: 'Lateral epicondyle of humerus and ulna', i: 'Radius', a: 'Supinates forearm' },
    { t: 'm', p: 2, n: 'Pronator Teres', o: 'Medial epicondyle of humerus & coronoid process of ulna', i: 'Radius', a: 'Pronates forearm' },
    { t: 'm', p: 2, n: 'Flexor Carpi Radialis', o: 'Medial epicondyle of humerus', i: 'Base of 2nd & 3rd metacarpals', a: 'Flexes & abducts wrist' },
    { t: 'm', p: 2, n: 'Flexor Carpi Ulnaris', o: 'Medial epicondyle of humerus & ulna', i: 'Pisiform, hamate, & base of 5th metacarpal', a: 'Flexes & adducts wrist' },
    { t: 'm', p: 2, n: 'Extensor Carpi Radialis Longus', o: 'Humerus', i: 'Base of 2nd metacarpal', a: 'Extends & abducts wrist' },
    { t: 'm', p: 2, n: 'Extensor Carpi Ulnaris', o: 'Lateral epicondyle of humerus & ulna', i: 'Base of 5th metacarpal', a: 'Extends & adducts wrist' },
    { t: 'm', p: 2, n: 'Flexor Digitorum Superficialis', o: 'Medial epicondyle of humerus & anterior of ulna and radius', i: 'Midlateral surface of phalanges 2-5', a: 'Flexes digits 2-5 and wrist' },
    { t: 'm', p: 2, n: 'Extensor Digitorum', o: 'Lateral epicondyle of humerus', i: 'Posterior surface of phalanges 2-5', a: 'Extends digits 2-5 and wrist' },
    { t: 'm', p: 2, n: 'Iliopsoas', o: 'Vertebrae (T12-L5) & iliac fossa', i: 'Lesser trochanter of femur', a: 'Flexes thigh at hip' },
    { t: 'm', p: 2, n: 'Gluteus Medius', o: 'Iliac crest', i: 'Greater trochanter of femur', a: 'Abducts & medially rotates thigh' },
    { t: 'm', p: 2, n: 'Gluteus Minimus', o: 'Ilium', i: 'Greater trochanter of femur', a: 'Abducts & medially rotates thigh' },
    { t: 'm', p: 2, n: 'Tensor Fasciae Latae', o: 'Iliac crest & anterior superior iliac spine', i: 'Iliotibial tract', a: 'Flexes and medially rotates thigh; tenses fascia lata which laterally supports the knee' },
    { t: 'm', p: 2, n: 'Adductor Longus', o: 'Inferior ramus of pubis', i: 'Linea aspera of femur', a: 'Adducts, flexes, & medially rotates thigh' },
    { t: 'm', p: 2, n: 'Adductor Brevis', o: 'Inferior ramus of pubis', i: 'Linea aspera of femur', a: 'Adducts, flexes, & medially rotates thigh' },
    { t: 'm', p: 2, n: 'Adductor Magnus', o: 'Inferior ramus of pubis & ischial tuberosity', i: 'Linea aspera of femur', a: 'Adducts, flexes & medially rotates thigh' },
    { t: 'm', p: 2, n: 'Vastus Medialis', o: 'Entire linea aspera of femur', i: 'Tibial tuberosity via patellar tendon', a: 'Extends lower leg at knee' },
    { t: 'm', p: 2, n: 'Vastus Lateralis', o: 'Proximal half of linea aspera of femur', i: 'Tibial tuberosity via patellar tendon', a: 'Extends lower leg at knee' },
    { t: 'm', p: 2, n: 'Vastus Intermedius', o: 'Anterior and lateral surface of femur', i: 'Tibial tuberosity via patellar tendon', a: 'Extends lower leg at knee' },
    { t: 'm', p: 2, n: 'Semimembranosus', o: 'Ischial tuberosity', i: 'Medial condyle of tibia', a: 'Flexes lower leg at knee, medially rotates lower leg, & extends thigh at hip' },
    { t: 'm', p: 2, n: 'Semitendinosus', o: 'Ischial tuberosity', i: 'Tibia', a: 'Flexes lower leg at knee, medially rotates lower leg, & extends thigh at hip' },
    { t: 'm', p: 2, n: 'Gracilis', o: 'Inferior ramus of pubis', i: 'Tibia', a: 'Flexes lower, and medially rotates leg at knee, adducts thigh at hip' },
    { t: 'm', p: 2, n: 'Sartorius', o: 'Anterior superior iliac spine', i: 'Medial surface near tibial tuberosity', a: 'Flexes, abducts, and laterally rotates thigh at hip, flexes lower leg at knee' },
    { t: 'm', p: 2, n: 'Soleus', o: 'Proximal tibia and fibula', i: 'Calcaneous via calcaneal tendon', a: 'Plantar flexes foot' },
    { t: 'm', p: 2, n: 'Popliteus', o: 'Lateral condyle of femur', i: 'Posterior surface of proximal tibial shaft', a: 'Medial rotation of tibia; flexion at knee' },
    { t: 'm', p: 2, n: 'Peroneus (Fibularis) Longus', o: 'Lateral condyle of tibia & fibula', i: 'Base of 1st metatarsal & medial cuneiform bone', a: 'Plantar flexes & everts foot; supports longitudinal arch' },
    { t: 'm', p: 2, n: 'Peroneus (Fibularis) Brevis', o: 'Fibula', i: 'Base of 5th metatarsal', a: 'Plantar flexes & everts foot' },
    { t: 'm', p: 2, n: 'Tibialis Anterior', o: 'Lateral condyle of tibia', i: 'Base of 1st metatarsal & medial cuneiform bone', a: 'Dorsiflexes & inverts foot' },
    { t: 'm', p: 2, n: 'Tibialis Posterior', o: 'Tibia and fibula', i: 'Tarsals and metatarsals', a: 'Adducts, inverts, and plantar flexes foot' },
    { t: 'm', p: 2, n: 'Flexor Digitorum Longus', o: 'Tibia', i: 'Inferior surface of phalanges 2-5', a: 'Flexes toes 2-5' },
    { t: 'm', p: 2, n: 'Extensor Digitorum Longus', o: 'Lateral condyle of tibia & fibula', i: 'Superior surface of phalanges 2-5', a: 'Extends toes 2-5' }
];

// Formatting function to generate unique IDs and SVG references for each item.
rawDB.forEach((item, idx) => {
    item.id = idx; // Assign a simple numeric ID for the SRS cache.
    const prefix = item.t === 'b' ? 'bone' : 'muscle';
    
    // Generate a clean, consistent ID string for linking to SVG data.
    // e.g., "Pectoralis Major" -> "muscle_pectoralis_major"
    // e.g., "Os Coxa (Pelvis)" -> "bone_os_coxa_pelvis"
    item.svg_id = `${prefix}_${item.n.toLowerCase().replace(/[^a-z0-9]/g, '_').replace(/_+/g, '_').replace(/_$/,'')}`;
    
    // Assign a fallback placeholder SVG template. The engine will look for a specific
    // SVG matching svg_id first, and use this template if a custom one isn't found.
    item.svg_template = item.t === 'b' ? 'placeholder_bone' : 'placeholder_muscle';
});
