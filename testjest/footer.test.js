import React from "react";
import { render, screen } from "../test/test.utils";
import Footer from "@components/layout/footer";

describe("Test du footer ", () => {
  test("Voir si le footer montre bien son text ", () => {
    render(<Footer />);
    const foot = screen.getByText(/Footer component/i);
    expect(foot).toBeInTheDocument();
  });
});
