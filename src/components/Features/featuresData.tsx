import { Feature } from "@/types/feature";
import {
  FaCode,
  FaMobileAlt,
  FaBullhorn,
  FaCloud,
  FaPaintBrush,
  FaTools,
} from "react-icons/fa";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: <FaCode className="text-4xl text-blue-600" />,
    title: "Custom Web Development",
    paragraph:
      "We build responsive, SEO-optimized websites tailored to your business goals—scalable, secure, and with clean code for future growth.",
  },
  {
    id: 2,
    icon: <FaMobileAlt className="text-4xl text-green-600" />,
    title: "Native & Cross‑Platform App Development",
    paragraph:
      "Specializing in Flutter and React Native, we craft performant mobile apps for iOS & Android with engaging UI and smooth UX.",
  },
  {
    id: 3,
    icon: <FaBullhorn className="text-4xl text-pink-600" />,
    title: "Digital Marketing & SEO",
    paragraph:
      "Boost your online presence with data-driven SEO, paid campaigns, content marketing, and social media strategies designed for ROI.",
  },
  {
    id: 4,
    icon: <FaCloud className="text-4xl text-purple-600" />,
    title: "Cloud Infrastructure & DevOps",
    paragraph:
      "We help you migrate, deploy, and manage cloud environments (AWS/Azure/GCP) with CI/CD pipelines, container orchestration, and cost optimization.",
  },
  {
    id: 5,
    icon: <FaPaintBrush className="text-4xl text-yellow-500" />,
    title: "UI/UX Design & Prototyping",
    paragraph:
      "From wireframes to user-tested prototypes, we design intuitive interfaces that engage users and streamline conversion paths.",
  },
  {
    id: 6,
    icon: <FaTools className="text-4xl text-gray-600" />,
    title: "Support & Maintenance",
    paragraph:
      "Our ongoing maintenance plans include performance tuning, security audits, backups, and feature updates to keep your systems reliable.",
  },
];

export default featuresData;
