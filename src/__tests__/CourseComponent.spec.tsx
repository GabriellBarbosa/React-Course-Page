import CourseComponent from "../pages/Course/CourseComponent";
import mockedCourse from "../mock/course";
import { render, screen } from '@testing-library/react';
import { act } from "react-dom/test-utils";
import { MemoryRouter } from "react-router";

jest.mock('../constants/enviroment.ts', () => ({
    VITE_API_URL: 'http://bookinvideo',
  }));

global.fetch = jest.fn(() => {
    return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockedCourse)
    })
}) as jest.Mock;

describe('CourseComponent', () => {

    beforeEach(async () => {
        await act(() => render(
            <MemoryRouter>
                <CourseComponent />
            </MemoryRouter>
        ));
    });

    it('', () => {
        const element = screen.getByTestId("navbar");
        expect(element).toBeTruthy();
    });
});