export const cabinet = {
 name: 'Aurélie Couffort', title: 'Pédicure-podologue',
 address: null, phone: null, email: null, hours: null, bookingUrl: null,
} as const;
export const navigation = [
 ['Enfant', '/#podologie-enfant'], ['Sport', '/#podologie-sport'], ['Les soins', '/#soins'],
 ['À propos', '/#a-propos'], ['Questions', '/#faq'],
];
export const expertise = [
 {id:'podologie-enfant', type:'enfant', label:"Podologie de l’enfant", title:'Grandir, marcher, découvrir le mouvement.', intro:"Chaque enfant avance à son rythme. L’écoute des parents et l’observation de la marche ouvrent un espace pour comprendre ses appuis, sans médicaliser les étapes normales de sa croissance.", tags:'Croissance · Marche · Posture', image:'enfant', alt:'Illustration générée : un enfant marche pieds nus sur un parquet.', points:[['La croissance du pied','Le pied évolue pendant l’enfance. Ses variations ne constituent pas, à elles seules, une maladie.'],['La marche et les appuis','Observer les mouvements permet de mettre les questions des parents en perspective.'],['La posture','Les appuis s’inscrivent dans une observation globale, adaptée à chaque situation.'],['Bilan et accompagnement','Échanger, expliquer et envisager un suivi lorsqu’il est pertinent. Les semelles ne sont pas systématiques.']],cta:'Consulter pour mon enfant'},
 {id:'podologie-sport',type:'sport',label:'Podologie du sport',title:'Votre pratique. Vos appuis. Votre mouvement.',intro:"Le terrain, le chaussage, le rythme de pratique : le mouvement se comprend dans son contexte. Une approche podologique attentive aux besoins exprimés et aux contraintes de l’activité.",tags:'Bilans · Semelles · Terrain',image:'sport',alt:'Illustration générée : jambes d’un coureur sur un sentier, chaussures sauge.',points:[['Bilan podologique du sportif','Un échange autour de la pratique et des observations adaptées. Les examens réalisés au cabinet restent à préciser.'],['Semelles adaptées','Les orthèses plantaires peuvent avoir une place lorsqu’elles sont indiquées. Elles ne sont ni systématiques ni une promesse de performance.'],['Contraintes liées au sport','Le chaussage, les surfaces et la fréquence de pratique font partie du contexte à prendre en compte.']],cta:'Consulter pour ma pratique sportive'},
];
export const services = [
 ['foot','Bilan podologique','Comprendre la marche, les appuis et les besoins exprimés.','Échange, observation et explications : le contenu précis du bilan doit être validé par Aurélie.'],
 ['insole','Semelles & orthèses','Une place éventuelle dans un accompagnement individualisé.','Les indications et les modalités de fabrication proposées au cabinet restent à confirmer.'],
 ['sun','Conseils & prévention','Des explications claires pour mieux comprendre ses pieds.','Les conseils sont adaptés à la situation. Les recommandations cliniques seront rédigées et validées par Aurélie.'],
 ['people','Accompagnement & suivi','Faire le point et adapter la suite selon les besoins.','Le rythme et les modalités de suivi dépendent de la situation et restent à préciser avec Aurélie.'],
];
const clinical = 'Réponse clinique à rédiger et à valider avec Aurélie. Lorem ipsum — contenu provisoire, non destiné à guider une décision de santé.';
export const faq = [
 {name:"Pour mon enfant",questions:[['Quand consulter pour son enfant ?',clinical],['Comment se déroule un bilan chez l’enfant ?',"Le parcours proposé est présenté dans la section Consultation. Les modalités, les âges accueillis et les examens restent à confirmer."],['Les semelles sont-elles systématiquement nécessaires ?',"Non. Leur place éventuelle dépend d’une évaluation individuelle. Formulation à valider par Aurélie."],['Peut-on échanger sur les questions liées à la croissance ?',clinical]]},
 {name:'Pour ma pratique sportive',questions:[['Quel est l’intérêt d’un bilan dans un contexte sportif ?',clinical],['Comment se déroule un bilan sportif ?',"L’activité pratiquée et les besoins exprimés font partie de l’échange. Le déroulé précis reste à confirmer."],['Les semelles sont-elles utiles pour tous les sportifs ?',"Les semelles ne sont pas systématiques. Leur éventuelle indication relève d’une évaluation individuelle. Texte à valider."],['Quels sports peuvent être concernés ?',"Les disciplines accompagnées par Aurélie seront précisées après validation. Aucune spécialisation sportive n’est annoncée à ce stade."]]},
 {name:'En pratique',questions:[['Comment prendre rendez-vous ?',"Le lien de réservation et les coordonnées du cabinet seront disponibles après validation par Aurélie."],['Faut-il une ordonnance ?',"Modalités à confirmer auprès du cabinet selon la consultation envisagée."],['Combien de temps dure une consultation ?',"Durées à confirmer avec Aurélie selon le type de consultation."],['Quels sont les tarifs et les remboursements ?',"Tarifs, conventionnement et modalités de remboursement à renseigner avant publication. Aucun montant provisoire n’est affiché."]]},
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
