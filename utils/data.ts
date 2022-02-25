import { Category, CategoryTypes, Dates } from "../types/index";
import moment from "moment";

export const EventDates: Dates[] = [
  { id: "0", date: moment().add(0, "days") },
  { id: "1", date: moment().add(8, "days") },
  { id: "2", date: moment().add(9, "days") },
  { id: "3", date: moment().add(10, "days") },
  { id: "4", date: moment().add(12, "days") },
  { id: "5", date: moment().add(16, "days") },
];

export const Events: Category[] = [
  {
    id: "c1",
    title: "The family light show",
    location: "Crystal palace park",
    date: EventDates[0].date.format("MMMM DD, YYYY"),
    img: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    id: "c2",
    title: "Vaisakhi festival",
    location: "Trafalgar Square",
    date: EventDates[1].date.format("MMMM DD, YYYY"),
    img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.expressandstar.com%2Fresizer%2FxdcPoyR-U4RuLODG-vQaYg3-Hnc%3D%2F1200x0%2Fcloudfront-us-east-1.images.arcpublishing.com%2Fmna%2FDE54UJVVDVBEVF2TOOZTUBDV6A.jpg&f=1&nofb=1",
  },
  {
    id: "c3",
    title: "African culture fest",
    location: "Brockwell park",
    date: EventDates[2].date.format("MMMM DD, YYYY"),
    img: "https://images.pexels.com/photos/2170387/pexels-photo-2170387.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    id: "c4",
    title: "Cake meet up",
    location: "Wells park",
    date: EventDates[2].date.format("MMMM DD, YYYY"),
    img: "https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    id: "c5",
    title: "Beer festival",
    location: "Valentines park",
    date: EventDates[3].date.format("MMMM DD, YYYY"),
    img: "https://images.pexels.com/photos/1267309/pexels-photo-1267309.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    id: "c6",
    title: "Chinese new year",
    location: "Brockwell park",
    date: EventDates[3].date.format("MMMM DD, YYYY"),
    img: "https://images.pexels.com/photos/2771809/pexels-photo-2771809.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    id: "c7",
    title: "African culture fest",
    location: "Brockwell park",
    date: EventDates[4].date.format("MMMM DD, YYYY"),
    img: "https://images.pexels.com/photos/2170387/pexels-photo-2170387.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    id: "c8",
    title: "Wine tasting",
    location: "Howell Park",
    date: EventDates[5].date.format("MMMM DD, YYYY"),
    img: "https://images.pexels.com/photos/290316/pexels-photo-290316.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
];

export const DATACats: CategoryTypes[] = [
  { id: "c1", title: "Event one", icon: "#f5428d" },
  { id: "c2", title: "Event two", icon: "#f5428d" },
  { id: "c3", title: "Event three", icon: "#f5428d" },
  { id: "c4", title: "Event four", icon: "#f5428d" },
  { id: "c5", title: "Event five", icon: "#f5428d" },
];
