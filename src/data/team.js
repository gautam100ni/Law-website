import abhishekPhoto from "../assets/abhishek-akhawat-cropped.jpg";
import pankajPhoto from "../assets/pankaj-kumar.jpeg";
import digvijayPhoto from "../assets/digvijay-singh.jpeg";

export const teamMembers = [
  {
    id: "vasudeo-charan", name: "Vasudeo Charan", role: "Advocate",
    initials: "VC",
    image: null, practiceAreas: ["Writ Petitions", "Criminal Law", "Civil Disputes"],
    bio: "Vasudeo Charan is a renowned lawyer of Rajasthan with 29 years of extensive experience in advocacy. He primarily practises before the Jodhpur Sessions Court and the Rajasthan High Court, handling a wide range of matters including writ petitions, criminal law, and civil disputes. Over nearly three decades of legal practice, Mr. Charan has built a strong reputation for his in-depth knowledge of constitutional and criminal jurisprudence, and is recognized for his sharp litigation strategy and commitment to his clients. His extensive courtroom experience and command over writ, criminal, and civil matters have made him one of the most respected legal practitioners in the region."
  },
  {
    id: "digvijay-singh-punayata", name: "Digvijay Singh Punayata",
    role: "Legal Researcher",
    initials: "DR",
    image: digvijayPhoto, practiceAreas: ["Writ Petitions", "Constitutional Matters", "Legal Research"],
    bio: "Digvijay Singh Punayata is a Legal Researcher at Akhawat Law Firm, holding an LL.B. degree from Jai Narain Vyas University (JNVU), Jodhpur. He specializes in research relating to writ petitions and constitutional matters, and has worked extensively on major court judgments to support the firm's litigation practice. He previously served as a legal researcher to Justice Farzand Ali at the Rajasthan High Court for six months, gaining direct exposure to judicial reasoning and drafting in constitutional and writ matters. His research combines strong analytical skills with a precedent-driven approach to complex legal issues."
  },
  {
    id: "pankaj-kumar", name: "Pankaj Kumar", role: "Advocate",
    initials: "PK",
    image: pankajPhoto, practiceAreas: ["Criminal Matters", "Civil Matters", "Litigation"],
    bio: "Pankaj Kumar is an experienced lawyer practising mainly before the Pali Sessions Court. He handles a broad spectrum of criminal and civil matters, bringing dedicated legal representation and practical courtroom experience to every case he undertakes. Known for his diligent approach and client-focused practice, Mr. Kumar has established himself as a reliable advocate in Pali, consistently working to secure favorable outcomes for his clients in both criminal and civil litigation."
  },
  {
    id: "abhishek-akhawat", name: "Advocate Abhishek Akhawat",
    role: "Managing Director",
    initials: "AA",
    image: abhishekPhoto, practiceAreas: ["Civil Law", "Criminal Law", "Constitutional Law"]
  }
];

const teamData = teamMembers;
export default teamData;
