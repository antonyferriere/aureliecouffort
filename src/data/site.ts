export const cabinet = {
 name: 'Aurélie Couffort', title: 'Pédicure-podologue',
 address: '901 avenue Pierre Sauvaigo', postalCode: '06700', city: 'Saint-Laurent-du-Var',
 phone: '04 89 22 39 61', phoneHref: 'tel:+33489223961',
 mobile: '06 10 26 46 63', mobileHref: 'tel:+33610264663', email: null,
 rpps: '10006131683', verifiedOn: '17 novembre 2026',
 hours: [['Du lundi au vendredi', '08h00 – 19h00'], ['Samedi', '08h00 – 12h00']],
 fees: [['Soin de pédicurie', '45 €'], ['Consultation', '50 €'], ['Semelles orthopédiques (consultations comprises)', '130 à 160 €']],
 access: 'Rez-de-chaussée sans ascenseur',
 transport: ['Collège Saint-Exupéry : lignes 56, 58 et 54', 'Libération : lignes 56, 58 et 54', 'Les Gallinières : ligne 42'],
 languages: ['Français', 'Anglais'], association: 'Podoxygène',
 qualifications: [['2012', 'Diplôme d’État de pédicure-podologue', 'École de Podologie de Marseille (EPM)'], ['2008', 'Licence 3 STAPS', 'Nice']],
 practiceSince: '2013', homeVisits: true,
 mapsUrl: 'https://www.google.com/maps/dir/?api=1&destination=901%20avenue%20Pierre%20Sauvaigo%2006700%20Saint-Laurent-du-Var',

 profileUrl: 'https://www.doctolib.fr/pedicure-podologue/saint-laurent-du-var/aurelie-couffort',
 bookingUrl: 'https://www.doctolib.fr/pedicure-podologue/saint-laurent-du-var/aurelie-couffort/booking?source=profile',
} as const;
export const navigation = [
 ['Accueil', '/#accueil'],
 ['Enfant', '/#podologie-enfant'], ['Sport', '/#podologie-sport'], ['Les soins', '/#soins'],
 ['À propos', '/#a-propos'], ['Questions', '/#faq'], ['Contact', '/#contact'],
];
export const expertise = [
 {id:'podologie-enfant', type:'enfant', label:"Podologie de l’enfant", title:'Grandir, marcher, découvrir le mouvement.', intro:"Chaque enfant avance à son rythme. L’écoute des parents et l’observation de la marche ouvrent un espace pour comprendre ses appuis, sans médicaliser les étapes normales de sa croissance.", tags:'Croissance · Marche · Posture', image:'enfant', alt:'Illustration générée : un enfant marche pieds nus sur un parquet.', points:[['La croissance du pied','Le pied évolue pendant l’enfance. Ses variations ne constituent pas, à elles seules, une maladie.'],['La marche et les appuis','Observer les mouvements permet de mettre les questions des parents en perspective.'],['La posture','Les appuis s’inscrivent dans une observation globale, adaptée à chaque situation.'],['Bilan et accompagnement','Échanger, expliquer et envisager un suivi lorsqu’il est pertinent. Les semelles ne sont pas systématiques.']],cta:'Consulter pour mon enfant'},
 {id:'podologie-sport',type:'sport',label:'Podologie du sport',title:'Votre pratique. Vos appuis. Votre mouvement.',intro:"Le terrain, le chaussage, le rythme de pratique : le mouvement se comprend dans son contexte. Une approche podologique attentive aux besoins exprimés et aux contraintes de l’activité.",tags:'Bilans · Semelles · Terrain',image:'sport',alt:'Illustration générée : jambes d’un coureur sur un sentier, chaussures sauge.',points:[['Bilan podologique du sportif','Un échange autour de la pratique et des observations adaptées. Les examens réalisés au cabinet restent à préciser.'],['Semelles adaptées','Les orthèses plantaires peuvent avoir une place lorsqu’elles sont indiquées. Elles ne sont ni systématiques ni une promesse de performance.'],['Contraintes liées au sport','Le chaussage, les surfaces et la fréquence de pratique font partie du contexte à prendre en compte.']],cta:'Consulter pour ma pratique sportive'},
];
export const services = [
 ['foot','Soins de pédicurie','Des soins des pieds, de la peau et des ongles.','La pédicurie figure parmi les actes proposés par Aurélie. Le soin adapté est défini en consultation.'],
 ['insole','Orthoplastie','Un petit appareillage adapté à une situation individuelle.','L’orthoplastie figure parmi les actes du cabinet. Ses indications et ses modalités sont expliquées lors de la consultation.'],
 ['foot','Bilan podologique','Comprendre la marche, les appuis et les besoins exprimés.','Échange, observation et explications : le contenu précis du bilan doit être validé par Aurélie.'],
 ['insole','Semelles & orthèses','Une place éventuelle dans un accompagnement individualisé.','Les semelles orthopédiques font partie des prestations du cabinet. Leur indication est individuelle ; le tarif annoncé comprend les consultations.'],
 ['sun','Conseils & prévention','Des explications claires pour mieux comprendre ses pieds.','Les conseils sont adaptés à la situation. Les recommandations cliniques seront rédigées et validées par Aurélie.'],
 ['people','Accompagnement & suivi','Faire le point et adapter la suite selon les besoins.','Le rythme et les modalités de suivi dépendent de la situation et restent à préciser avec Aurélie.'],
];
const clinical = 'Réponse clinique à rédiger et à valider avec Aurélie. Lorem ipsum — contenu provisoire, non destiné à guider une décision de santé.';
export const faq = [
 {name:"Pour mon enfant",questions:[['Quand consulter pour son enfant ?',clinical],['Comment se déroule un bilan chez l’enfant ?',"Le parcours proposé est présenté dans la section Consultation. Les modalités, les âges accueillis et les examens restent à confirmer."],['Les semelles sont-elles systématiquement nécessaires ?',"Non. Leur place éventuelle dépend d’une évaluation individuelle. Formulation à valider par Aurélie."],['Peut-on échanger sur les questions liées à la croissance ?',clinical]]},
 {name:'Pour ma pratique sportive',questions:[['Quel est l’intérêt d’un bilan dans un contexte sportif ?',clinical],['Comment se déroule un bilan sportif ?',"L’activité pratiquée et les besoins exprimés font partie de l’échange. Le déroulé précis reste à confirmer."],['Les semelles sont-elles utiles pour tous les sportifs ?',"Les semelles ne sont pas systématiques. Leur éventuelle indication relève d’une évaluation individuelle. Texte à valider."],['Quels sports peuvent être concernés ?',"Les disciplines accompagnées par Aurélie seront précisées après validation. Aucune spécialisation sportive n’est annoncée à ce stade."]]},
 {name:'En pratique',questions:[['Comment prendre rendez-vous ?',"Vous pouvez prendre rendez-vous en ligne sur Doctolib. Choisissez le motif adapté à votre consultation et un créneau disponible."],['Faut-il une ordonnance ?',"Le profil Doctolib indique un accueil sans prescription médicale préalable. Pour les conditions de remboursement de votre situation, renseignez-vous auprès du cabinet et de votre organisme de prise en charge."],['Combien de temps dure une consultation ?',"Durées à confirmer avec Aurélie selon le type de consultation."],['Quels sont les tarifs et les remboursements ?',"Soin de pédicurie : 45 €. Consultation : 50 €. Semelles orthopédiques, consultations comprises : 130 à 160 €. La praticienne est conventionnée ; la carte Vitale n’est pas acceptée. Les conditions de remboursement sont à vérifier selon votre situation."]]},
];
export const steps = [
 ['Échanger','Vos questions, votre quotidien et vos attentes sont le point de départ.'],
 ['Observer','Une observation adaptée à la situation et au motif de consultation.'],
 ['Comprendre','Des explications accessibles pour donner du sens aux observations.'],
 ['Accompagner','Des recommandations et, si nécessaire, un suivi à définir ensemble.'],
];
export const advice = [
 {category:'Enfant',title:'Grandir à son rythme',image:'enfant',topics:'Croissance · Marche · Chaussage'},
 {category:'Sport',title:'Le chaussage en mouvement',image:'sport',topics:'Chaussures · Appuis · Semelles'},
 {category:'Au quotidien',title:'Mieux comprendre ses pieds',image:'hero',topics:'Confort · Mouvement · Questions'},
];
