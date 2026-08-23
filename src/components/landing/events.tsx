import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { events } from "@/lib/site";

export function Events() {
  return (
    <section id="events" className="px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-xl">
          <p className="text-xs font-medium tracking-[0.18em] text-primary uppercase">
            On the calendar
          </p>
          <h2 className="font-heading mt-3 text-3xl tracking-tight sm:text-4xl">
            Upcoming gatherings
          </h2>
          <p className="mt-4 text-muted-foreground">
            Dates and copy come from public listings hosted by The CF Events Team,
            including The Augusta Press calendar and ticket pages.
          </p>
        </div>
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {events.map((event) => (
            <Card key={event.slug} className="h-full bg-card/90">
              <CardHeader>
                <Badge variant="secondary" className="w-fit">
                  {event.status}
                </Badge>
                <CardTitle className="font-heading mt-2 text-2xl font-normal leading-snug">
                  {event.title}
                </CardTitle>
                <CardDescription>{event.subtitle}</CardDescription>
                <p className="pt-2 text-sm font-medium">
                  {event.dateLabel}
                  <span className="block font-normal text-muted-foreground">
                    {event.timeLabel}
                  </span>
                  <span className="block font-normal text-muted-foreground">
                    {event.place}
                  </span>
                </p>
              </CardHeader>
              <CardContent>
                <p className="leading-relaxed text-muted-foreground">{event.blurb}</p>
                <ul className="mt-4 space-y-1.5 text-sm">
                  {event.details.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="border-t-0 bg-transparent">
                <Button
                  className="h-10 w-full"
                  nativeButton={false}
                  render={
                    <a
                      href={event.cta.href}
                      target={event.cta.href.startsWith("http") ? "_blank" : undefined}
                      rel={event.cta.href.startsWith("http") ? "noreferrer" : undefined}
                    />
                  }
                >
                  {event.cta.label}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
